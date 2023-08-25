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
    tableId: BigNumberish;
    subject: string;
    lobby: AddressLike;
    gameType: BigNumberish;
    status: BigNumberish;
    seats: BigNumberish;
    initialBuyin: BigNumberish;
  };

  export type InfoStructOutput = [
    tableId: bigint,
    subject: string,
    lobby: string,
    gameType: bigint,
    status: bigint,
    seats: bigint,
    initialBuyin: bigint
  ] & {
    tableId: bigint;
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
    bets: BigNumberish;
    chips: BigNumberish;
    pendingBuyin: BigNumberish;
    leftAt: BigNumberish;
  };

  export type PositionStructOutput = [
    pid: bigint,
    player: IPokerTable.PlayerStructOutput,
    bets: bigint,
    chips: bigint,
    pendingBuyin: bigint,
    leftAt: bigint
  ] & {
    pid: bigint;
    player: IPokerTable.PlayerStructOutput;
    bets: bigint;
    chips: bigint;
    pendingBuyin: bigint;
    leftAt: bigint;
  };
}

export interface IPokerTableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "info"
      | "isPlaying"
      | "newTable"
      | "position"
      | "totalPots"
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
  encodeFunctionData(functionFragment: "totalPots", values?: undefined): string;

  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPlaying", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newTable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "position", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalPots", data: BytesLike): Result;
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

  totalPots: TypedContractMethod<[], [bigint], "view">;

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
  getFunction(
    nameOrSignature: "totalPots"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
