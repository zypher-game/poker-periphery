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

export declare namespace IPokerTable {
  export type InfoStruct = {
    subject: string;
    lobby: AddressLike;
    gameType: BigNumberish;
    status: BigNumberish;
    seats: BigNumberish;
    initialBuyin: BigNumberish;
  };

  export type InfoStructOutput = [
    subject: string,
    lobby: string,
    gameType: bigint,
    status: bigint,
    seats: bigint,
    initialBuyin: bigint
  ] & {
    subject: string;
    lobby: string;
    gameType: bigint;
    status: bigint;
    seats: bigint;
    initialBuyin: bigint;
  };

  export type PlayerStruct = { wallet: AddressLike; name: string };

  export type PlayerStructOutput = [wallet: string, name: string] & {
    wallet: string;
    name: string;
  };

  export type PositionStruct = {
    pid: BigNumberish;
    player: IPokerTable.PlayerStruct;
    wins: BigNumberish;
    draws: BigNumberish;
    bets: BigNumberish;
    chips: BigNumberish;
    pendingBuyin: BigNumberish;
  };

  export type PositionStructOutput = [
    pid: bigint,
    player: IPokerTable.PlayerStructOutput,
    wins: bigint,
    draws: bigint,
    bets: bigint,
    chips: bigint,
    pendingBuyin: bigint
  ] & {
    pid: bigint;
    player: IPokerTable.PlayerStructOutput;
    wins: bigint;
    draws: bigint;
    bets: bigint;
    chips: bigint;
    pendingBuyin: bigint;
  };
}

export interface IPokerTableInterface extends Interface {
  getFunction(
    nameOrSignature: "info" | "isPlaying" | "newTable" | "position"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "info", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPlaying", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "newTable",
    values: [IPokerTable.PlayerStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "position",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPlaying", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newTable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "position", data: BytesLike): Result;
}

export interface IPokerTable extends BaseContract {
  connect(runner?: ContractRunner | null): IPokerTable;
  waitForDeployment(): Promise<this>;

  interface: IPokerTableInterface;

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

  info: TypedContractMethod<[], [IPokerTable.InfoStructOutput], "view">;

  isPlaying: TypedContractMethod<[], [boolean], "view">;

  newTable: TypedContractMethod<
    [players: IPokerTable.PlayerStruct[]],
    [void],
    "payable"
  >;

  position: TypedContractMethod<
    [pid: BigNumberish],
    [IPokerTable.PositionStructOutput],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "info"
  ): TypedContractMethod<[], [IPokerTable.InfoStructOutput], "view">;
  getFunction(
    nameOrSignature: "isPlaying"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "newTable"
  ): TypedContractMethod<
    [players: IPokerTable.PlayerStruct[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "position"
  ): TypedContractMethod<
    [pid: BigNumberish],
    [IPokerTable.PositionStructOutput],
    "view"
  >;

  filters: {};
}
