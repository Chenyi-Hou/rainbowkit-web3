import { expect } from "chai";
import { ethers, upgrades } from "hardhat";
import { Lock } from "../typechain/Lock";

describe("Lock", function () {
  let lock: Lock;
  let owner: ethers.Signer;
  let other: ethers.Signer;
  const unlockTime = (await ethers.provider.getBlock("latest")).timestamp + 365 * 24 * 60 * 60; // 一年后的时间
  const initialDeposit = ethers.utils.parseEther("1"); // 存入1 ETH

  beforeEach(async () => {
    // 获取两个账户，一个作为合约所有者，一个用于测试其他账户
    [owner, other] = await ethers.getSigners();
    // 部署Lock合约
    lock = await (await ethers.getContractFactory("Lock")).deploy(unlockTime, { value: initialDeposit });
    await lock.deployed();
  });

  describe("Deployment", function () {
    it("Should set the right unlockTime", async () => {
      expect(await lock.unlockTime()).to.equal(unlockTime);
    });

    it("Should set the right owner", async () => {
      expect(await lock.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to lock", async () => {
      expect(await ethers.provider.getBalance(lock.address)).to.equal(initialDeposit);
    });

    it("Should fail if the unlockTime is not in the future", async () => {
      const latestTime = await ethers.provider.getBlock("latest").timestamp;
      const lockFactory = await ethers.getContractFactory("Lock");
      await expect(lockFactory.deploy(latestTime)).to.be.revertedWith("Unlock time should be in the future");
    });
  });

  describe("Deposits", function () {
    it("Should allow depositing more funds", async () => {
      const additionalDeposit = ethers.utils.parseEther("0.5"); // 存入0.5 ETH
      await expect(lock.connect(other).save(additionalDeposit)).to.emit(lock, "DepositMade").withArgs(other.address, additionalDeposit);
      expect(await lock.getDeposit(other.address)).to.equal(initialDeposit.add(additionalDeposit));
    });
  });

  describe("Withdrawals", function () {
    it("Should allow the owner to withdraw funds after the unlock time", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [unlockTime]);
      await expect(lock.withdraw()).to.emit(lock, "Withdrawal").withArgs(owner.address, initialDeposit);
      expect(await ethers.provider.getBalance(owner.address)).to.equal(initialDeposit);
    });

    it("Should not allow others to withdraw", async () => {
      await ethers.provider.send("evm_setNextBlockTimestamp", [unlockTime + 1]);
      await expect(lock.withdraw()).to.be.revertedWith("You aren't the owner");
    });

    it("Should not allow withdrawal before the unlock time", async () => {
      await expect(lock.withdraw()).to.be.revertedWith("You can't withdraw yet");
    });
  });

  describe("Unlock", function () {
    it("Should allow the owner to update the unlock time", async () => {
      const newUnlockTime = (await ethers.provider.getBlock("latest")).timestamp + 45 * 24 * 60 * 60; // 45 天后的时间
      await expect(lock.unlock()).to.emit(lock, "UnlockTimeUpdated").withArgs(newUnlockTime);
      expect(await lock.unlockTime()).to.equal(newUnlockTime);
    });

    it("Should not allow others to update the unlock time", async () => {
      await expect(lock.connect(other).unlock()).to.be.revertedWith("You are not the owner");
    });
  });
});