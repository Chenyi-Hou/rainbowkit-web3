// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
import "hardhat/console.sol";

contract Lock {
    uint public unlockTime;
    address payable public owner;
    mapping(address => uint) public deposits;
    event Withdrawal(address user, uint amount, uint when);
    event UnlockTimeUpdated(uint newUnlockTime);
    event DepositMade(address indexed user, uint amount);

    constructor(uint _unlockTime) payable {
        require(
            block.timestamp < _unlockTime,
            "Unlock time should be in the future"
        );

        unlockTime = _unlockTime;
        owner = payable(msg.sender);
    }

    function withdraw(uint amount) public {
        require(block.timestamp >= unlockTime, "You can't withdraw yet");
        require(amount > 0, "Amount must be greater than 0");
        uint userDeposit = deposits[msg.sender];
        require(userDeposit >= amount, "Insufficient funds");

        emit Withdrawal(msg.sender, amount, block.timestamp);

        // 从用户的存款中扣除提取的金额
        deposits[msg.sender] -= amount;

        // 将指定的金额转移到用户的地址
        payable(msg.sender).transfer(amount);
    }

    function unlock() external {
        require(msg.sender == owner, "You are not the owner");
        unlockTime = block.timestamp;
        emit UnlockTimeUpdated(unlockTime);
    }

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    function save(uint amount) public payable {
        require(amount > 0, "Amount must be greater than 0");
        console.log(amount);
        payable(address(this)).transfer(amount);
        console.log(msg.sender);
        deposits[msg.sender] += amount;
        emit DepositMade(msg.sender, amount);
    }

    function getDeposit() public view returns (uint) {
        return deposits[msg.sender];
    }
}
