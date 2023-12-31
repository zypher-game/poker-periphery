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
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export declare namespace Multicall {
  export type CallStruct = { target: AddressLike; callData: BytesLike };

  export type CallStructOutput = [target: string, callData: string] & {
    target: string;
    callData: string;
  };
}

export interface MulticallInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "aggregate"
      | "getBlockHash"
      | "getCurrentBlockCoinbase"
      | "getCurrentBlockDifficulty"
      | "getCurrentBlockGasLimit"
      | "getCurrentBlockTimestamp"
      | "getEthBalance"
      | "getLastBlockHash"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "aggregate",
    values: [Multicall.CallStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getBlockHash",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockCoinbase",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockDifficulty",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockGasLimit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCurrentBlockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEthBalance",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastBlockHash",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "aggregate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getBlockHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockCoinbase",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockDifficulty",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockGasLimit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCurrentBlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastBlockHash",
    data: BytesLike
  ): Result;
}

export interface Multicall extends BaseContract {
  connect(runner?: ContractRunner | null): Multicall;
  waitForDeployment(): Promise<this>;

  interface: MulticallInterface;

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

  aggregate: TypedContractMethod<
    [calls: Multicall.CallStruct[]],
    [[bigint, string[]] & { blockNumber: bigint; returnData: string[] }],
    "nonpayable"
  >;

  getBlockHash: TypedContractMethod<
    [blockNumber: BigNumberish],
    [string],
    "view"
  >;

  getCurrentBlockCoinbase: TypedContractMethod<[], [string], "view">;

  getCurrentBlockDifficulty: TypedContractMethod<[], [bigint], "view">;

  getCurrentBlockGasLimit: TypedContractMethod<[], [bigint], "view">;

  getCurrentBlockTimestamp: TypedContractMethod<[], [bigint], "view">;

  getEthBalance: TypedContractMethod<[addr: AddressLike], [bigint], "view">;

  getLastBlockHash: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "aggregate"
  ): TypedContractMethod<
    [calls: Multicall.CallStruct[]],
    [[bigint, string[]] & { blockNumber: bigint; returnData: string[] }],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getBlockHash"
  ): TypedContractMethod<[blockNumber: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getCurrentBlockCoinbase"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getCurrentBlockDifficulty"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCurrentBlockGasLimit"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCurrentBlockTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getEthBalance"
  ): TypedContractMethod<[addr: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLastBlockHash"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
