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
    activePlayers: BigNumberish;
    status: BigNumberish;
    waitings: ILobby.WaitingStruct[];
    config: MentalPokerHelper.ConfigStruct;
    pendingAction: ILobby.PendingActionStruct;
  };

  export type TableStructOutput = [
    id: bigint,
    table: string,
    seats: bigint,
    activePlayers: bigint,
    status: bigint,
    waitings: ILobby.WaitingStructOutput[],
    config: MentalPokerHelper.ConfigStructOutput,
    pendingAction: ILobby.PendingActionStructOutput
  ] & {
    id: bigint;
    table: string;
    seats: bigint;
    activePlayers: bigint;
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

export interface ILobbyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "isPlayerPlaying"
      | "isPlayerWaiting"
      | "join"
      | "leave"
      | "mainWallet"
      | "ready"
      | "reportPlayerLeft"
      | "reportTableEnded"
      | "revealSeats"
      | "shuffleSeats"
      | "tableExists"
      | "tablePlaying"
      | "tables"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Bet"
      | "GameStarted"
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
  encodeFunctionData(functionFragment: "leave", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mainWallet",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "ready", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reportPlayerLeft",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "reportTableEnded",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "revealSeats",
    values: [BigNumberish, BytesLike[], BytesLike[]]
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

  decodeFunctionResult(
    functionFragment: "isPlayerPlaying",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPlayerWaiting",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "join", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leave", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mainWallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ready", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reportPlayerLeft",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "reportTableEnded",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "revealSeats",
    data: BytesLike
  ): Result;
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
}

export namespace BetEvent {
  export type InputTuple = [
    gameId: BigNumberish,
    stage: BigNumberish,
    position: BigNumberish,
    option: BigNumberish,
    callAmount: BigNumberish,
    raiseAmount: BigNumberish
  ];
  export type OutputTuple = [
    gameId: bigint,
    stage: bigint,
    position: bigint,
    option: bigint,
    callAmount: bigint,
    raiseAmount: bigint
  ];
  export interface OutputObject {
    gameId: bigint;
    stage: bigint;
    position: bigint;
    option: bigint;
    callAmount: bigint;
    raiseAmount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace GameStartedEvent {
  export type InputTuple = [tableId: BigNumberish, gameId: BigNumberish];
  export type OutputTuple = [tableId: bigint, gameId: bigint];
  export interface OutputObject {
    tableId: bigint;
    gameId: bigint;
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

export interface ILobby extends BaseContract {
  connect(runner?: ContractRunner | null): ILobby;
  waitForDeployment(): Promise<this>;

  interface: ILobbyInterface;

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
      seatDrawingPublicKey: BytesLike,
      waitingKeyProof: BytesLike
    ],
    [boolean],
    "payable"
  >;

  leave: TypedContractMethod<[], [bigint], "nonpayable">;

  mainWallet: TypedContractMethod<[sender: AddressLike], [string], "view">;

  ready: TypedContractMethod<[], [boolean], "nonpayable">;

  reportPlayerLeft: TypedContractMethod<
    [
      tableId: BigNumberish,
      player: AddressLike,
      totalGames: BigNumberish,
      totalBet: BigNumberish,
      totalEarned: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  reportTableEnded: TypedContractMethod<
    [tableId: BigNumberish],
    [void],
    "nonpayable"
  >;

  revealSeats: TypedContractMethod<
    [tableId: BigNumberish, tokens: BytesLike[], revealProofs: BytesLike[]],
    [boolean],
    "nonpayable"
  >;

  shuffleSeats: TypedContractMethod<
    [tableId: BigNumberish, shuffled: BytesLike[], shuffleProof: BytesLike],
    [boolean],
    "nonpayable"
  >;

  tableExists: TypedContractMethod<[tableId: BigNumberish], [boolean], "view">;

  tablePlaying: TypedContractMethod<[tableId: BigNumberish], [boolean], "view">;

  tables: TypedContractMethod<[], [ILobby.TableStructOutput[]], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

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
      seatDrawingPublicKey: BytesLike,
      waitingKeyProof: BytesLike
    ],
    [boolean],
    "payable"
  >;
  getFunction(
    nameOrSignature: "leave"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "mainWallet"
  ): TypedContractMethod<[sender: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "ready"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "reportPlayerLeft"
  ): TypedContractMethod<
    [
      tableId: BigNumberish,
      player: AddressLike,
      totalGames: BigNumberish,
      totalBet: BigNumberish,
      totalEarned: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "reportTableEnded"
  ): TypedContractMethod<[tableId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "revealSeats"
  ): TypedContractMethod<
    [tableId: BigNumberish, tokens: BytesLike[], revealProofs: BytesLike[]],
    [boolean],
    "nonpayable"
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

  getEvent(
    key: "Bet"
  ): TypedContractEvent<
    BetEvent.InputTuple,
    BetEvent.OutputTuple,
    BetEvent.OutputObject
  >;
  getEvent(
    key: "GameStarted"
  ): TypedContractEvent<
    GameStartedEvent.InputTuple,
    GameStartedEvent.OutputTuple,
    GameStartedEvent.OutputObject
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
    "Bet(uint64,uint8,uint8,uint8,uint256,uint256)": TypedContractEvent<
      BetEvent.InputTuple,
      BetEvent.OutputTuple,
      BetEvent.OutputObject
    >;
    Bet: TypedContractEvent<
      BetEvent.InputTuple,
      BetEvent.OutputTuple,
      BetEvent.OutputObject
    >;

    "GameStarted(uint32,uint64)": TypedContractEvent<
      GameStartedEvent.InputTuple,
      GameStartedEvent.OutputTuple,
      GameStartedEvent.OutputObject
    >;
    GameStarted: TypedContractEvent<
      GameStartedEvent.InputTuple,
      GameStartedEvent.OutputTuple,
      GameStartedEvent.OutputObject
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
