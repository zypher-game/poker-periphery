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

export interface ZkGameLobbyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "TEXAS_HOLDEM_TABLE"
      | "cardConfig"
      | "createTable"
      | "isPlayerPlaying"
      | "isPlayerWaiting"
      | "join"
      | "kick"
      | "leave"
      | "owner"
      | "ready"
      | "removeTable"
      | "renounceOwnership"
      | "revealSeats"
      | "setDefinition"
      | "show"
      | "shuffleSeats"
      | "tableExists"
      | "tablePlaying"
      | "tables"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "OwnershipTransferred"
      | "PendingReveal"
      | "PendingShuffle"
      | "PlayerJoined"
      | "PlayerLeft"
      | "PlayerReady"
      | "PlayerRevealedSeat"
      | "PlayerSeated"
      | "PlayerShuffledSeats"
      | "TableStarted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "TEXAS_HOLDEM_TABLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "cardConfig",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createTable",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isPlayerPlaying",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isPlayerWaiting",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "join",
    values: [BigNumberish, string, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "kick",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "leave", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "ready", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeTable",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "revealSeats",
    values: [BigNumberish, BytesLike[], BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefinition",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "show",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "shuffleSeats",
    values: [BigNumberish, BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tableExists",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tablePlaying",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "tables", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "TEXAS_HOLDEM_TABLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cardConfig", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createTable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPlayerPlaying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPlayerWaiting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kick", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leave", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ready", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeTable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revealSeats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefinition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "show", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shuffleSeats",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tableExists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tablePlaying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tables", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
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

export namespace PendingRevealEvent {
  export type InputTuple = [
    tableId: BigNumberish,
    player: AddressLike,
    seats: BytesLike[],
    timeout: BigNumberish
  ];
  export type OutputTuple = [
    tableId: bigint,
    player: string,
    seats: string[],
    timeout: bigint
  ];
  export interface OutputObject {
    tableId: bigint;
    player: string;
    seats: string[];
    timeout: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PendingShuffleEvent {
  export type InputTuple = [
    tableId: BigNumberish,
    player: AddressLike,
    seats: BytesLike[],
    shareKey: BytesLike,
    timeout: BigNumberish
  ];
  export type OutputTuple = [
    tableId: bigint,
    player: string,
    seats: string[],
    shareKey: string,
    timeout: bigint
  ];
  export interface OutputObject {
    tableId: bigint;
    player: string;
    seats: string[];
    shareKey: string;
    timeout: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PlayerJoinedEvent {
  export type InputTuple = [
    tableId: BigNumberish,
    player: AddressLike,
    name: string
  ];
  export type OutputTuple = [tableId: bigint, player: string, name: string];
  export interface OutputObject {
    tableId: bigint;
    player: string;
    name: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PlayerLeftEvent {
  export type InputTuple = [tableId: BigNumberish, player: AddressLike];
  export type OutputTuple = [tableId: bigint, player: string];
  export interface OutputObject {
    tableId: bigint;
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PlayerReadyEvent {
  export type InputTuple = [tableId: BigNumberish, player: AddressLike];
  export type OutputTuple = [tableId: bigint, player: string];
  export interface OutputObject {
    tableId: bigint;
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PlayerRevealedSeatEvent {
  export type InputTuple = [tableId: BigNumberish, player: AddressLike];
  export type OutputTuple = [tableId: bigint, player: string];
  export interface OutputObject {
    tableId: bigint;
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PlayerSeatedEvent {
  export type InputTuple = [
    tableId: BigNumberish,
    player: AddressLike,
    position: BigNumberish
  ];
  export type OutputTuple = [tableId: bigint, player: string, position: bigint];
  export interface OutputObject {
    tableId: bigint;
    player: string;
    position: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PlayerShuffledSeatsEvent {
  export type InputTuple = [tableId: BigNumberish, player: AddressLike];
  export type OutputTuple = [tableId: bigint, player: string];
  export interface OutputObject {
    tableId: bigint;
    player: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TableStartedEvent {
  export type InputTuple = [
    tableId: BigNumberish,
    table: AddressLike,
    players: AddressLike[]
  ];
  export type OutputTuple = [tableId: bigint, table: string, players: string[]];
  export interface OutputObject {
    tableId: bigint;
    table: string;
    players: string[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZkGameLobby extends BaseContract {
  connect(runner?: ContractRunner | null): ZkGameLobby;
  waitForDeployment(): Promise<this>;

  interface: ZkGameLobbyInterface;

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

  TEXAS_HOLDEM_TABLE: TypedContractMethod<[], [string], "view">;

  cardConfig: TypedContractMethod<
    [],
    [[bigint, bigint, string] & { m: bigint; n: bigint; param: string }],
    "view"
  >;

  createTable: TypedContractMethod<
    [name: string, posCounts: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  isPlayerPlaying: TypedContractMethod<
    [player: AddressLike],
    [[boolean, bigint] & { playing: boolean; lastTableId: bigint }],
    "view"
  >;

  isPlayerWaiting: TypedContractMethod<
    [player: AddressLike],
    [boolean],
    "view"
  >;

  join: TypedContractMethod<
    [
      tableId: BigNumberish,
      name: string,
      player: BytesLike,
      waitingPublicKey: BytesLike,
      waitingKeyProof: BytesLike
    ],
    [boolean],
    "payable"
  >;

  kick: TypedContractMethod<
    [tableId: BigNumberish, player: AddressLike],
    [boolean],
    "nonpayable"
  >;

  leave: TypedContractMethod<[], [bigint], "nonpayable">;

  owner: TypedContractMethod<[], [string], "view">;

  ready: TypedContractMethod<[], [boolean], "nonpayable">;

  removeTable: TypedContractMethod<
    [tableId: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  revealSeats: TypedContractMethod<
    [tableId: BigNumberish, tokens: BytesLike[], revealProofs: BytesLike[]],
    [boolean],
    "nonpayable"
  >;

  setDefinition: TypedContractMethod<
    [key: BytesLike, table: AddressLike],
    [void],
    "nonpayable"
  >;

  show: TypedContractMethod<
    [tableId: BigNumberish, index: BigNumberish],
    [
      [string, string[], string[]] & {
        revealed: string;
        sealeds: string[];
        publics: string[];
      }
    ],
    "view"
  >;

  shuffleSeats: TypedContractMethod<
    [tableId: BigNumberish, shuffled: BytesLike[], shuffleProof: BytesLike],
    [boolean],
    "nonpayable"
  >;

  tableExists: TypedContractMethod<[tableId: BigNumberish], [boolean], "view">;

  tablePlaying: TypedContractMethod<[tableId: BigNumberish], [boolean], "view">;

  tables: TypedContractMethod<[], [ILobby.TableStructOutput[]], "view">;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "TEXAS_HOLDEM_TABLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cardConfig"
  ): TypedContractMethod<
    [],
    [[bigint, bigint, string] & { m: bigint; n: bigint; param: string }],
    "view"
  >;
  getFunction(
    nameOrSignature: "createTable"
  ): TypedContractMethod<
    [name: string, posCounts: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "isPlayerPlaying"
  ): TypedContractMethod<
    [player: AddressLike],
    [[boolean, bigint] & { playing: boolean; lastTableId: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "isPlayerWaiting"
  ): TypedContractMethod<[player: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "join"
  ): TypedContractMethod<
    [
      tableId: BigNumberish,
      name: string,
      player: BytesLike,
      waitingPublicKey: BytesLike,
      waitingKeyProof: BytesLike
    ],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "kick"
  ): TypedContractMethod<
    [tableId: BigNumberish, player: AddressLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "leave"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "ready"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "removeTable"
  ): TypedContractMethod<[tableId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revealSeats"
  ): TypedContractMethod<
    [tableId: BigNumberish, tokens: BytesLike[], revealProofs: BytesLike[]],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setDefinition"
  ): TypedContractMethod<
    [key: BytesLike, table: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "show"
  ): TypedContractMethod<
    [tableId: BigNumberish, index: BigNumberish],
    [
      [string, string[], string[]] & {
        revealed: string;
        sealeds: string[];
        publics: string[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "shuffleSeats"
  ): TypedContractMethod<
    [tableId: BigNumberish, shuffled: BytesLike[], shuffleProof: BytesLike],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "tableExists"
  ): TypedContractMethod<[tableId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "tablePlaying"
  ): TypedContractMethod<[tableId: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "tables"
  ): TypedContractMethod<[], [ILobby.TableStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "PendingReveal"
  ): TypedContractEvent<
    PendingRevealEvent.InputTuple,
    PendingRevealEvent.OutputTuple,
    PendingRevealEvent.OutputObject
  >;
  getEvent(
    key: "PendingShuffle"
  ): TypedContractEvent<
    PendingShuffleEvent.InputTuple,
    PendingShuffleEvent.OutputTuple,
    PendingShuffleEvent.OutputObject
  >;
  getEvent(
    key: "PlayerJoined"
  ): TypedContractEvent<
    PlayerJoinedEvent.InputTuple,
    PlayerJoinedEvent.OutputTuple,
    PlayerJoinedEvent.OutputObject
  >;
  getEvent(
    key: "PlayerLeft"
  ): TypedContractEvent<
    PlayerLeftEvent.InputTuple,
    PlayerLeftEvent.OutputTuple,
    PlayerLeftEvent.OutputObject
  >;
  getEvent(
    key: "PlayerReady"
  ): TypedContractEvent<
    PlayerReadyEvent.InputTuple,
    PlayerReadyEvent.OutputTuple,
    PlayerReadyEvent.OutputObject
  >;
  getEvent(
    key: "PlayerRevealedSeat"
  ): TypedContractEvent<
    PlayerRevealedSeatEvent.InputTuple,
    PlayerRevealedSeatEvent.OutputTuple,
    PlayerRevealedSeatEvent.OutputObject
  >;
  getEvent(
    key: "PlayerSeated"
  ): TypedContractEvent<
    PlayerSeatedEvent.InputTuple,
    PlayerSeatedEvent.OutputTuple,
    PlayerSeatedEvent.OutputObject
  >;
  getEvent(
    key: "PlayerShuffledSeats"
  ): TypedContractEvent<
    PlayerShuffledSeatsEvent.InputTuple,
    PlayerShuffledSeatsEvent.OutputTuple,
    PlayerShuffledSeatsEvent.OutputObject
  >;
  getEvent(
    key: "TableStarted"
  ): TypedContractEvent<
    TableStartedEvent.InputTuple,
    TableStartedEvent.OutputTuple,
    TableStartedEvent.OutputObject
  >;

  filters: {
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

    "PendingReveal(uint32,address,bytes[],uint32)": TypedContractEvent<
      PendingRevealEvent.InputTuple,
      PendingRevealEvent.OutputTuple,
      PendingRevealEvent.OutputObject
    >;
    PendingReveal: TypedContractEvent<
      PendingRevealEvent.InputTuple,
      PendingRevealEvent.OutputTuple,
      PendingRevealEvent.OutputObject
    >;

    "PendingShuffle(uint32,address,bytes[],bytes,uint32)": TypedContractEvent<
      PendingShuffleEvent.InputTuple,
      PendingShuffleEvent.OutputTuple,
      PendingShuffleEvent.OutputObject
    >;
    PendingShuffle: TypedContractEvent<
      PendingShuffleEvent.InputTuple,
      PendingShuffleEvent.OutputTuple,
      PendingShuffleEvent.OutputObject
    >;

    "PlayerJoined(uint32,address,string)": TypedContractEvent<
      PlayerJoinedEvent.InputTuple,
      PlayerJoinedEvent.OutputTuple,
      PlayerJoinedEvent.OutputObject
    >;
    PlayerJoined: TypedContractEvent<
      PlayerJoinedEvent.InputTuple,
      PlayerJoinedEvent.OutputTuple,
      PlayerJoinedEvent.OutputObject
    >;

    "PlayerLeft(uint32,address)": TypedContractEvent<
      PlayerLeftEvent.InputTuple,
      PlayerLeftEvent.OutputTuple,
      PlayerLeftEvent.OutputObject
    >;
    PlayerLeft: TypedContractEvent<
      PlayerLeftEvent.InputTuple,
      PlayerLeftEvent.OutputTuple,
      PlayerLeftEvent.OutputObject
    >;

    "PlayerReady(uint32,address)": TypedContractEvent<
      PlayerReadyEvent.InputTuple,
      PlayerReadyEvent.OutputTuple,
      PlayerReadyEvent.OutputObject
    >;
    PlayerReady: TypedContractEvent<
      PlayerReadyEvent.InputTuple,
      PlayerReadyEvent.OutputTuple,
      PlayerReadyEvent.OutputObject
    >;

    "PlayerRevealedSeat(uint32,address)": TypedContractEvent<
      PlayerRevealedSeatEvent.InputTuple,
      PlayerRevealedSeatEvent.OutputTuple,
      PlayerRevealedSeatEvent.OutputObject
    >;
    PlayerRevealedSeat: TypedContractEvent<
      PlayerRevealedSeatEvent.InputTuple,
      PlayerRevealedSeatEvent.OutputTuple,
      PlayerRevealedSeatEvent.OutputObject
    >;

    "PlayerSeated(uint32,address,uint8)": TypedContractEvent<
      PlayerSeatedEvent.InputTuple,
      PlayerSeatedEvent.OutputTuple,
      PlayerSeatedEvent.OutputObject
    >;
    PlayerSeated: TypedContractEvent<
      PlayerSeatedEvent.InputTuple,
      PlayerSeatedEvent.OutputTuple,
      PlayerSeatedEvent.OutputObject
    >;

    "PlayerShuffledSeats(uint32,address)": TypedContractEvent<
      PlayerShuffledSeatsEvent.InputTuple,
      PlayerShuffledSeatsEvent.OutputTuple,
      PlayerShuffledSeatsEvent.OutputObject
    >;
    PlayerShuffledSeats: TypedContractEvent<
      PlayerShuffledSeatsEvent.InputTuple,
      PlayerShuffledSeatsEvent.OutputTuple,
      PlayerShuffledSeatsEvent.OutputObject
    >;

    "TableStarted(uint32,address,address[])": TypedContractEvent<
      TableStartedEvent.InputTuple,
      TableStartedEvent.OutputTuple,
      TableStartedEvent.OutputObject
    >;
    TableStarted: TypedContractEvent<
      TableStartedEvent.InputTuple,
      TableStartedEvent.OutputTuple,
      TableStartedEvent.OutputObject
    >;
  };
}
