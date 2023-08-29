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

export type TablePositionStruct = {
  pid: BigNumberish;
  wallet: AddressLike;
  displayName: string;
  status: BigNumberish;
  holeCards: IPokerTable.PokerCardStruct[];
  bets: BigNumberish;
  chips: BigNumberish;
  pendingBuyin: BigNumberish;
  claimable: BigNumberish;
};

export type TablePositionStructOutput = [
  pid: bigint,
  wallet: string,
  displayName: string,
  status: bigint,
  holeCards: IPokerTable.PokerCardStructOutput[],
  bets: bigint,
  chips: bigint,
  pendingBuyin: bigint,
  claimable: bigint
] & {
  pid: bigint;
  wallet: string;
  displayName: string;
  status: bigint;
  holeCards: IPokerTable.PokerCardStructOutput[];
  bets: bigint;
  chips: bigint;
  pendingBuyin: bigint;
  claimable: bigint;
};

export type TableStatusStruct = {
  table: AddressLike;
  subject: string;
  stage: BigNumberish;
  communityCards: IPokerTable.PokerCardStruct[];
  positions: TablePositionStruct[];
  mainPot: ITexasHoldemTable.PotStruct;
  sidePots: ITexasHoldemTable.PotStruct[];
  minRaise: BigNumberish;
  betAmount: BigNumberish;
  actingPosition: BigNumberish;
  actingTimeStart: BigNumberish;
  actingTimeout: BigNumberish;
  timestamp: BigNumberish;
};

export type TableStatusStructOutput = [
  table: string,
  subject: string,
  stage: bigint,
  communityCards: IPokerTable.PokerCardStructOutput[],
  positions: TablePositionStructOutput[],
  mainPot: ITexasHoldemTable.PotStructOutput,
  sidePots: ITexasHoldemTable.PotStructOutput[],
  minRaise: bigint,
  betAmount: bigint,
  actingPosition: bigint,
  actingTimeStart: bigint,
  actingTimeout: bigint,
  timestamp: bigint
] & {
  table: string;
  subject: string;
  stage: bigint;
  communityCards: IPokerTable.PokerCardStructOutput[];
  positions: TablePositionStructOutput[];
  mainPot: ITexasHoldemTable.PotStructOutput;
  sidePots: ITexasHoldemTable.PotStructOutput[];
  minRaise: bigint;
  betAmount: bigint;
  actingPosition: bigint;
  actingTimeStart: bigint;
  actingTimeout: bigint;
  timestamp: bigint;
};

export declare namespace IPokerTable {
  export type PokerCardStruct = { suit: BigNumberish; rank: BigNumberish };

  export type PokerCardStructOutput = [suit: bigint, rank: bigint] & {
    suit: bigint;
    rank: bigint;
  };
}

export declare namespace ITexasHoldemTable {
  export type PotStruct = {
    amount: BigNumberish;
    positions: BigNumberish[];
    winners: BigNumberish[];
    winnerHandRanking: BigNumberish;
    winnerKickers: BigNumberish;
  };

  export type PotStructOutput = [
    amount: bigint,
    positions: bigint[],
    winners: bigint[],
    winnerHandRanking: bigint,
    winnerKickers: bigint
  ] & {
    amount: bigint;
    positions: bigint[];
    winners: bigint[];
    winnerHandRanking: bigint;
    winnerKickers: bigint;
  };
}

export declare namespace ILobby {
  export type WaitingStruct = {
    player: AddressLike;
    name: string;
    publicKey: BytesLike;
  };

  export type WaitingStructOutput = [
    player: string,
    name: string,
    publicKey: string
  ] & { player: string; name: string; publicKey: string };

  export type PendingActionStruct = {
    act: BigNumberish;
    users: AddressLike[];
    timeout: BigNumberish;
  };

  export type PendingActionStructOutput = [
    act: bigint,
    users: string[],
    timeout: bigint
  ] & { act: bigint; users: string[]; timeout: bigint };

  export type TableStruct = {
    id: BigNumberish;
    table: AddressLike;
    seats: BigNumberish;
    status: BigNumberish;
    waitings: ILobby.WaitingStruct[];
    config: MentalPokerHelper.ConfigStruct;
    pendingAction: ILobby.PendingActionStruct;
  };

  export type TableStructOutput = [
    id: bigint,
    table: string,
    seats: bigint,
    status: bigint,
    waitings: ILobby.WaitingStructOutput[],
    config: MentalPokerHelper.ConfigStructOutput,
    pendingAction: ILobby.PendingActionStructOutput
  ] & {
    id: bigint;
    table: string;
    seats: bigint;
    status: bigint;
    waitings: ILobby.WaitingStructOutput[];
    config: MentalPokerHelper.ConfigStructOutput;
    pendingAction: ILobby.PendingActionStructOutput;
  };
}

export declare namespace MentalPokerHelper {
  export type ConfigStruct = {
    m: BigNumberish;
    n: BigNumberish;
    param: BytesLike;
    items: BytesLike[];
  };

  export type ConfigStructOutput = [
    m: bigint,
    n: bigint,
    param: string,
    items: string[]
  ] & { m: bigint; n: bigint; param: string; items: string[] };
}

export interface TexasHoldemPeripheryInterface extends Interface {
  getFunction(
    nameOrSignature:
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

  getEvent(
    nameOrSignatureOrTopic:
      | "AdminChanged"
      | "BeaconUpgraded"
      | "Initialized"
      | "OwnershipTransferred"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "_tableStatus",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
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
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tableByIndex",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
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
}

export namespace AdminChangedEvent {
  export type InputTuple = [previousAdmin: AddressLike, newAdmin: AddressLike];
  export type OutputTuple = [previousAdmin: string, newAdmin: string];
  export interface OutputObject {
    previousAdmin: string;
    newAdmin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace BeaconUpgradedEvent {
  export type InputTuple = [beacon: AddressLike];
  export type OutputTuple = [beacon: string];
  export interface OutputObject {
    beacon: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface TexasHoldemPeriphery extends BaseContract {
  connect(runner?: ContractRunner | null): TexasHoldemPeriphery;
  waitForDeployment(): Promise<this>;

  interface: TexasHoldemPeripheryInterface;

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

  _tableStatus: TypedContractMethod<
    [table: AddressLike, revealToken: BytesLike],
    [TableStatusStructOutput],
    "view"
  >;

  initialize: TypedContractMethod<[_lobby: AddressLike], [void], "nonpayable">;

  lobby: TypedContractMethod<[], [string], "view">;

  lobbyTables: TypedContractMethod<[], [ILobby.TableStructOutput[]], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  tableByAddress: TypedContractMethod<
    [table: AddressLike, revealToken: BytesLike],
    [TableStatusStructOutput],
    "view"
  >;

  tableByIndex: TypedContractMethod<
    [index: BigNumberish, revealToken: BytesLike],
    [TableStatusStructOutput],
    "view"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeTo: TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "_tableStatus"
  ): TypedContractMethod<
    [table: AddressLike, revealToken: BytesLike],
    [TableStatusStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_lobby: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lobby"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "lobbyTables"
  ): TypedContractMethod<[], [ILobby.TableStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "tableByAddress"
  ): TypedContractMethod<
    [table: AddressLike, revealToken: BytesLike],
    [TableStatusStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "tableByIndex"
  ): TypedContractMethod<
    [index: BigNumberish, revealToken: BytesLike],
    [TableStatusStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeTo"
  ): TypedContractMethod<
    [newImplementation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "AdminChanged"
  ): TypedContractEvent<
    AdminChangedEvent.InputTuple,
    AdminChangedEvent.OutputTuple,
    AdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "BeaconUpgraded"
  ): TypedContractEvent<
    BeaconUpgradedEvent.InputTuple,
    BeaconUpgradedEvent.OutputTuple,
    BeaconUpgradedEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "AdminChanged(address,address)": TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;
    AdminChanged: TypedContractEvent<
      AdminChangedEvent.InputTuple,
      AdminChangedEvent.OutputTuple,
      AdminChangedEvent.OutputObject
    >;

    "BeaconUpgraded(address)": TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;
    BeaconUpgraded: TypedContractEvent<
      BeaconUpgradedEvent.InputTuple,
      BeaconUpgradedEvent.OutputTuple,
      BeaconUpgradedEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
