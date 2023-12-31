/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace IPokerTable {
  export type InfoStruct = {
    tableId: PromiseOrValue<BigNumberish>;
    subject: PromiseOrValue<string>;
    lobby: PromiseOrValue<string>;
    gameType: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<BigNumberish>;
    seats: PromiseOrValue<BigNumberish>;
    initialBuyin: PromiseOrValue<BigNumberish>;
  };

  export type InfoStructOutput = [
    number,
    string,
    string,
    number,
    number,
    number,
    BigNumber
  ] & {
    tableId: number;
    subject: string;
    lobby: string;
    gameType: number;
    status: number;
    seats: number;
    initialBuyin: BigNumber;
  };

  export type PlayerStruct = {
    wallet: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
  };

  export type PlayerStructOutput = [string, string] & {
    wallet: string;
    name: string;
  };

  export type PositionStruct = {
    pid: PromiseOrValue<BigNumberish>;
    player: IPokerTable.PlayerStruct;
    bets: PromiseOrValue<BigNumberish>;
    chips: PromiseOrValue<BigNumberish>;
    leftAt: PromiseOrValue<BigNumberish>;
  };

  export type PositionStructOutput = [
    number,
    IPokerTable.PlayerStructOutput,
    BigNumber,
    BigNumber,
    number
  ] & {
    pid: number;
    player: IPokerTable.PlayerStructOutput;
    bets: BigNumber;
    chips: BigNumber;
    leftAt: number;
  };
}

export interface PokerTableInterface extends utils.Interface {
  functions: {
    "TABLE_TIMEOUT()": FunctionFragment;
    "activePlayerCounts()": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "bets(address)": FunctionFragment;
    "decimals()": FunctionFragment;
    "info()": FunctionFragment;
    "isPlaying()": FunctionFragment;
    "name()": FunctionFragment;
    "newTable((address,string)[])": FunctionFragment;
    "owner()": FunctionFragment;
    "playerCounts()": FunctionFragment;
    "position(uint8)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalPots()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "TABLE_TIMEOUT"
      | "activePlayerCounts"
      | "balanceOf"
      | "bets"
      | "decimals"
      | "info"
      | "isPlaying"
      | "name"
      | "newTable"
      | "owner"
      | "playerCounts"
      | "position"
      | "symbol"
      | "totalPots"
      | "totalSupply"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "TABLE_TIMEOUT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "activePlayerCounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "bets",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "info", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPlaying", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "newTable",
    values: [IPokerTable.PlayerStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playerCounts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "position",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalPots", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "TABLE_TIMEOUT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "activePlayerCounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPlaying", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newTable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playerCounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "position", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalPots", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  value: BigNumber;
}
export type TransferEvent = TypedEvent<
  [string, string, BigNumber],
  TransferEventObject
>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface PokerTable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PokerTableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    TABLE_TIMEOUT(overrides?: CallOverrides): Promise<[number]>;

    activePlayerCounts(overrides?: CallOverrides): Promise<[number]>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    bets(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    info(overrides?: CallOverrides): Promise<[IPokerTable.InfoStructOutput]>;

    isPlaying(overrides?: CallOverrides): Promise<[boolean]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    newTable(
      players: IPokerTable.PlayerStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    playerCounts(overrides?: CallOverrides): Promise<[number]>;

    position(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IPokerTable.PositionStructOutput]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    totalPots(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  TABLE_TIMEOUT(overrides?: CallOverrides): Promise<number>;

  activePlayerCounts(overrides?: CallOverrides): Promise<number>;

  balanceOf(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  bets(
    player: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  decimals(overrides?: CallOverrides): Promise<number>;

  info(overrides?: CallOverrides): Promise<IPokerTable.InfoStructOutput>;

  isPlaying(overrides?: CallOverrides): Promise<boolean>;

  name(overrides?: CallOverrides): Promise<string>;

  newTable(
    players: IPokerTable.PlayerStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  playerCounts(overrides?: CallOverrides): Promise<number>;

  position(
    pid: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IPokerTable.PositionStructOutput>;

  symbol(overrides?: CallOverrides): Promise<string>;

  totalPots(overrides?: CallOverrides): Promise<BigNumber>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    TABLE_TIMEOUT(overrides?: CallOverrides): Promise<number>;

    activePlayerCounts(overrides?: CallOverrides): Promise<number>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bets(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<number>;

    info(overrides?: CallOverrides): Promise<IPokerTable.InfoStructOutput>;

    isPlaying(overrides?: CallOverrides): Promise<boolean>;

    name(overrides?: CallOverrides): Promise<string>;

    newTable(
      players: IPokerTable.PlayerStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    playerCounts(overrides?: CallOverrides): Promise<number>;

    position(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IPokerTable.PositionStructOutput>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalPots(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Transfer(address,address,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
    Transfer(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      value?: null
    ): TransferEventFilter;
  };

  estimateGas: {
    TABLE_TIMEOUT(overrides?: CallOverrides): Promise<BigNumber>;

    activePlayerCounts(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    bets(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    info(overrides?: CallOverrides): Promise<BigNumber>;

    isPlaying(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    newTable(
      players: IPokerTable.PlayerStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    playerCounts(overrides?: CallOverrides): Promise<BigNumber>;

    position(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    totalPots(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    TABLE_TIMEOUT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    activePlayerCounts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    bets(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    info(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPlaying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newTable(
      players: IPokerTable.PlayerStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    playerCounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    position(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPots(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
