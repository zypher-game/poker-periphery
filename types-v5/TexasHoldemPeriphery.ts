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

export type TablePositionStruct = {
  pid: PromiseOrValue<BigNumberish>;
  wallet: PromiseOrValue<string>;
  displayName: PromiseOrValue<string>;
  status: PromiseOrValue<BigNumberish>;
  holeCards: IPokerTable.PokerCardStruct[];
  bets: PromiseOrValue<BigNumberish>;
  chips: PromiseOrValue<BigNumberish>;
  pendingBuyin: PromiseOrValue<BigNumberish>;
};

export type TablePositionStructOutput = [
  number,
  string,
  string,
  number,
  IPokerTable.PokerCardStructOutput[],
  BigNumber,
  BigNumber,
  BigNumber
] & {
  pid: number;
  wallet: string;
  displayName: string;
  status: number;
  holeCards: IPokerTable.PokerCardStructOutput[];
  bets: BigNumber;
  chips: BigNumber;
  pendingBuyin: BigNumber;
};

export type PotMetaStruct = {
  amount: PromiseOrValue<BigNumberish>;
  winners: PromiseOrValue<BigNumberish>[];
  winnerHandRanking: PromiseOrValue<BigNumberish>;
};

export type PotMetaStructOutput = [BigNumber, number[], number] & {
  amount: BigNumber;
  winners: number[];
  winnerHandRanking: number;
};

export type TableStatusStruct = {
  table: PromiseOrValue<string>;
  subject: PromiseOrValue<string>;
  stage: PromiseOrValue<BigNumberish>;
  communityCards: IPokerTable.PokerCardStruct[];
  positions: TablePositionStruct[];
  mainPot: PotMetaStruct;
  sidePots: PotMetaStruct[];
  minRaise: PromiseOrValue<BigNumberish>;
  betAmount: PromiseOrValue<BigNumberish>;
  actingPosition: PromiseOrValue<BigNumberish>;
  actingTimeStart: PromiseOrValue<BigNumberish>;
  actingTimeout: PromiseOrValue<BigNumberish>;
  timestamp: PromiseOrValue<BigNumberish>;
};

export type TableStatusStructOutput = [
  string,
  string,
  number,
  IPokerTable.PokerCardStructOutput[],
  TablePositionStructOutput[],
  PotMetaStructOutput,
  PotMetaStructOutput[],
  BigNumber,
  BigNumber,
  number,
  number,
  number,
  number
] & {
  table: string;
  subject: string;
  stage: number;
  communityCards: IPokerTable.PokerCardStructOutput[];
  positions: TablePositionStructOutput[];
  mainPot: PotMetaStructOutput;
  sidePots: PotMetaStructOutput[];
  minRaise: BigNumber;
  betAmount: BigNumber;
  actingPosition: number;
  actingTimeStart: number;
  actingTimeout: number;
  timestamp: number;
};

export declare namespace IPokerTable {
  export type PokerCardStruct = {
    suit: PromiseOrValue<BigNumberish>;
    rank: PromiseOrValue<BigNumberish>;
  };

  export type PokerCardStructOutput = [number, number] & {
    suit: number;
    rank: number;
  };
}

export declare namespace ILobby {
  export type WaitingStruct = {
    player: PromiseOrValue<string>;
    name: PromiseOrValue<string>;
    publicKey: PromiseOrValue<BytesLike>;
  };

  export type WaitingStructOutput = [string, string, string] & {
    player: string;
    name: string;
    publicKey: string;
  };

  export type PendingActionStruct = {
    act: PromiseOrValue<BigNumberish>;
    users: PromiseOrValue<string>[];
    timeout: PromiseOrValue<BigNumberish>;
  };

  export type PendingActionStructOutput = [number, string[], number] & {
    act: number;
    users: string[];
    timeout: number;
  };

  export type TableStruct = {
    id: PromiseOrValue<BigNumberish>;
    table: PromiseOrValue<string>;
    seats: PromiseOrValue<BigNumberish>;
    status: PromiseOrValue<BigNumberish>;
    waitings: ILobby.WaitingStruct[];
    config: MentalPokerHelper.ConfigStruct;
    pendingAction: ILobby.PendingActionStruct;
  };

  export type TableStructOutput = [
    number,
    string,
    number,
    number,
    ILobby.WaitingStructOutput[],
    MentalPokerHelper.ConfigStructOutput,
    ILobby.PendingActionStructOutput
  ] & {
    id: number;
    table: string;
    seats: number;
    status: number;
    waitings: ILobby.WaitingStructOutput[];
    config: MentalPokerHelper.ConfigStructOutput;
    pendingAction: ILobby.PendingActionStructOutput;
  };
}

export declare namespace MentalPokerHelper {
  export type ConfigStruct = {
    m: PromiseOrValue<BigNumberish>;
    n: PromiseOrValue<BigNumberish>;
    param: PromiseOrValue<BytesLike>;
    items: PromiseOrValue<BytesLike>[];
  };

  export type ConfigStructOutput = [number, number, string, string[]] & {
    m: number;
    n: number;
    param: string;
    items: string[];
  };
}

export interface TexasHoldemPeripheryInterface extends utils.Interface {
  functions: {
    "_tableStatus(address,bytes)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "lobby()": FunctionFragment;
    "lobbyTables()": FunctionFragment;
    "owner()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "tableByAddress(address,bytes)": FunctionFragment;
    "tableByIndex(uint8,bytes)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_tableStatus"
      | "initialize"
      | "lobby"
      | "lobbyTables"
      | "owner"
      | "proxiableUUID"
      | "renounceOwnership"
      | "tableByAddress"
      | "tableByIndex"
      | "transferOwnership"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "_tableStatus",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "lobby", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lobbyTables",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tableByAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "tableByIndex",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "_tableStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lobby", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lobbyTables",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tableByAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tableByIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

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

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface TexasHoldemPeriphery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TexasHoldemPeripheryInterface;

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
    _tableStatus(
      table: PromiseOrValue<string>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[TableStatusStructOutput] & { status: TableStatusStructOutput }>;

    initialize(
      _lobby: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    lobby(overrides?: CallOverrides): Promise<[string]>;

    lobbyTables(
      overrides?: CallOverrides
    ): Promise<
      [ILobby.TableStructOutput[]] & { tables: ILobby.TableStructOutput[] }
    >;

    owner(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tableByAddress(
      table: PromiseOrValue<string>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[TableStatusStructOutput] & { status: TableStatusStructOutput }>;

    tableByIndex(
      index: PromiseOrValue<BigNumberish>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[TableStatusStructOutput] & { status: TableStatusStructOutput }>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _tableStatus(
    table: PromiseOrValue<string>,
    revealToken: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<TableStatusStructOutput>;

  initialize(
    _lobby: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  lobby(overrides?: CallOverrides): Promise<string>;

  lobbyTables(overrides?: CallOverrides): Promise<ILobby.TableStructOutput[]>;

  owner(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tableByAddress(
    table: PromiseOrValue<string>,
    revealToken: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<TableStatusStructOutput>;

  tableByIndex(
    index: PromiseOrValue<BigNumberish>,
    revealToken: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<TableStatusStructOutput>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _tableStatus(
      table: PromiseOrValue<string>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<TableStatusStructOutput>;

    initialize(
      _lobby: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    lobby(overrides?: CallOverrides): Promise<string>;

    lobbyTables(overrides?: CallOverrides): Promise<ILobby.TableStructOutput[]>;

    owner(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    tableByAddress(
      table: PromiseOrValue<string>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<TableStatusStructOutput>;

    tableByIndex(
      index: PromiseOrValue<BigNumberish>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<TableStatusStructOutput>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

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

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    _tableStatus(
      table: PromiseOrValue<string>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _lobby: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    lobby(overrides?: CallOverrides): Promise<BigNumber>;

    lobbyTables(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tableByAddress(
      table: PromiseOrValue<string>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tableByIndex(
      index: PromiseOrValue<BigNumberish>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _tableStatus(
      table: PromiseOrValue<string>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _lobby: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    lobby(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lobbyTables(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tableByAddress(
      table: PromiseOrValue<string>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tableByIndex(
      index: PromiseOrValue<BigNumberish>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
