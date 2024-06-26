/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface LockInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "deposits"
      | "getBalance"
      | "getDeposit"
      | "owner"
      | "save"
      | "unlock"
      | "unlockTime"
      | "withdraw"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "DepositMade" | "UnlockTimeUpdated" | "Withdrawal"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "deposits",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "save", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "unlock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "unlockTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getBalance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "save", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlockTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
}

export namespace DepositMadeEvent {
  export type InputTuple = [user: AddressLike, amount: BigNumberish];
  export type OutputTuple = [user: string, amount: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnlockTimeUpdatedEvent {
  export type InputTuple = [newUnlockTime: BigNumberish];
  export type OutputTuple = [newUnlockTime: bigint];
  export interface OutputObject {
    newUnlockTime: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawalEvent {
  export type InputTuple = [
    user: AddressLike,
    amount: BigNumberish,
    when: BigNumberish
  ];
  export type OutputTuple = [user: string, amount: bigint, when: bigint];
  export interface OutputObject {
    user: string;
    amount: bigint;
    when: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Lock extends BaseContract {
  connect(runner?: ContractRunner | null): Lock;
  waitForDeployment(): Promise<this>;

  interface: LockInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  deposits: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getBalance: TypedContractMethod<[], [bigint], "view">;

  getDeposit: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  save: TypedContractMethod<[amount: BigNumberish], [void], "payable">;

  unlock: TypedContractMethod<[], [void], "nonpayable">;

  unlockTime: TypedContractMethod<[], [bigint], "view">;

  withdraw: TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deposits"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getDeposit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "save"
  ): TypedContractMethod<[amount: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "unlock"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "unlockTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "DepositMade"
  ): TypedContractEvent<
    DepositMadeEvent.InputTuple,
    DepositMadeEvent.OutputTuple,
    DepositMadeEvent.OutputObject
  >;
  getEvent(
    key: "UnlockTimeUpdated"
  ): TypedContractEvent<
    UnlockTimeUpdatedEvent.InputTuple,
    UnlockTimeUpdatedEvent.OutputTuple,
    UnlockTimeUpdatedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawal"
  ): TypedContractEvent<
    WithdrawalEvent.InputTuple,
    WithdrawalEvent.OutputTuple,
    WithdrawalEvent.OutputObject
  >;

  filters: {
    "DepositMade(address,uint256)": TypedContractEvent<
      DepositMadeEvent.InputTuple,
      DepositMadeEvent.OutputTuple,
      DepositMadeEvent.OutputObject
    >;
    DepositMade: TypedContractEvent<
      DepositMadeEvent.InputTuple,
      DepositMadeEvent.OutputTuple,
      DepositMadeEvent.OutputObject
    >;

    "UnlockTimeUpdated(uint256)": TypedContractEvent<
      UnlockTimeUpdatedEvent.InputTuple,
      UnlockTimeUpdatedEvent.OutputTuple,
      UnlockTimeUpdatedEvent.OutputObject
    >;
    UnlockTimeUpdated: TypedContractEvent<
      UnlockTimeUpdatedEvent.InputTuple,
      UnlockTimeUpdatedEvent.OutputTuple,
      UnlockTimeUpdatedEvent.OutputObject
    >;

    "Withdrawal(address,uint256,uint256)": TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
    Withdrawal: TypedContractEvent<
      WithdrawalEvent.InputTuple,
      WithdrawalEvent.OutputTuple,
      WithdrawalEvent.OutputObject
    >;
  };
}
