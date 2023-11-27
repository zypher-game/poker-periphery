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

export declare namespace IPokerTable {
  export type PokerCardStruct = { suit: BigNumberish; rank: BigNumberish };

  export type PokerCardStructOutput = [suit: bigint, rank: bigint] & {
    suit: bigint;
    rank: bigint;
  };

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
    leftAt: BigNumberish;
  };

  export type PositionStructOutput = [
    pid: bigint,
    player: IPokerTable.PlayerStructOutput,
    bets: bigint,
    chips: bigint,
    leftAt: bigint
  ] & {
    pid: bigint;
    player: IPokerTable.PlayerStructOutput;
    bets: bigint;
    chips: bigint;
    leftAt: bigint;
  };
}

export declare namespace ITexasHoldemTable {
  export type TexasHoldemGameStruct = {
    gameId: BigNumberish;
    stage: BigNumberish;
    minRaise: BigNumberish;
    betAmount: BigNumberish;
    lastStageBet: BigNumberish;
    actingPosition: BigNumberish;
    actingTimeout: BigNumberish;
  };

  export type TexasHoldemGameStructOutput = [
    gameId: bigint,
    stage: bigint,
    minRaise: bigint,
    betAmount: bigint,
    lastStageBet: bigint,
    actingPosition: bigint,
    actingTimeout: bigint
  ] & {
    gameId: bigint;
    stage: bigint;
    minRaise: bigint;
    betAmount: bigint;
    lastStageBet: bigint;
    actingPosition: bigint;
    actingTimeout: bigint;
  };

  export type PotStruct = { amount: BigNumberish; positions: BigNumberish[] };

  export type PotStructOutput = [amount: bigint, positions: bigint[]] & {
    amount: bigint;
    positions: bigint[];
  };

  export type GameTimerStruct = {
    initialTimeout: BigNumberish;
    betTimeout: BigNumberish;
    showdownTimeout: BigNumberish;
    endTimeout: BigNumberish;
  };

  export type GameTimerStructOutput = [
    initialTimeout: bigint,
    betTimeout: bigint,
    showdownTimeout: bigint,
    endTimeout: bigint
  ] & {
    initialTimeout: bigint;
    betTimeout: bigint;
    showdownTimeout: bigint;
    endTimeout: bigint;
  };
}

export interface ITexasHoldemTableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "activePlayerCounts"
      | "allinBets"
      | "callBets"
      | "cashOut"
      | "checkBets"
      | "claimPots"
      | "communityCards"
      | "cutCards"
      | "foldBets"
      | "forceNewGame"
      | "forceStopGame"
      | "game"
      | "holeCards"
      | "info"
      | "isPlaying"
      | "message"
      | "newTable"
      | "position"
      | "positionStatus"
      | "pots"
      | "raiseBets"
      | "setup"
      | "showCards"
      | "timer"
      | "totalPots"
      | "winner"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Bet" | "GameStarted" | "ShowdownResult"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "activePlayerCounts",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "allinBets", values?: undefined): string;
  encodeFunctionData(functionFragment: "callBets", values?: undefined): string;
  encodeFunctionData(functionFragment: "cashOut", values?: undefined): string;
  encodeFunctionData(functionFragment: "checkBets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimPots",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "communityCards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cutCards", values?: undefined): string;
  encodeFunctionData(functionFragment: "foldBets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "forceNewGame",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "forceStopGame",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "game", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "holeCards",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "info", values?: undefined): string;
  encodeFunctionData(functionFragment: "isPlaying", values?: undefined): string;
  encodeFunctionData(functionFragment: "message", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "newTable",
    values: [IPokerTable.PlayerStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "position",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "positionStatus",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pots", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "raiseBets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setup",
    values: [
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      AddressLike,
      BytesLike[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "showCards", values?: undefined): string;
  encodeFunctionData(functionFragment: "timer", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalPots", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "winner",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "activePlayerCounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allinBets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "callBets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cashOut", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "checkBets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimPots", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "communityCards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cutCards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "foldBets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "forceNewGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "forceStopGame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "game", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "holeCards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "info", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPlaying", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "message", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "newTable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "position", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "positionStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "raiseBets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setup", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "showCards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "timer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalPots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "winner", data: BytesLike): Result;
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

export namespace ShowdownResultEvent {
  export type InputTuple = [
    player: AddressLike,
    handRank: BigNumberish,
    kickers: BigNumberish
  ];
  export type OutputTuple = [player: string, handRank: bigint, kickers: bigint];
  export interface OutputObject {
    player: string;
    handRank: bigint;
    kickers: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ITexasHoldemTable extends BaseContract {
  connect(runner?: ContractRunner | null): ITexasHoldemTable;
  waitForDeployment(): Promise<this>;

  interface: ITexasHoldemTableInterface;

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

  activePlayerCounts: TypedContractMethod<[], [bigint], "view">;

  allinBets: TypedContractMethod<[], [void], "nonpayable">;

  callBets: TypedContractMethod<[], [void], "nonpayable">;

  cashOut: TypedContractMethod<[], [void], "nonpayable">;

  checkBets: TypedContractMethod<[], [void], "nonpayable">;

  claimPots: TypedContractMethod<
    [position: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  communityCards: TypedContractMethod<
    [],
    [IPokerTable.PokerCardStructOutput[]],
    "view"
  >;

  cutCards: TypedContractMethod<[], [void], "nonpayable">;

  foldBets: TypedContractMethod<[], [void], "nonpayable">;

  forceNewGame: TypedContractMethod<[], [void], "nonpayable">;

  forceStopGame: TypedContractMethod<[], [void], "nonpayable">;

  game: TypedContractMethod<
    [],
    [ITexasHoldemTable.TexasHoldemGameStructOutput],
    "view"
  >;

  holeCards: TypedContractMethod<
    [positionId: BigNumberish, revealToken: BytesLike],
    [IPokerTable.PokerCardStructOutput[]],
    "view"
  >;

  info: TypedContractMethod<[], [IPokerTable.InfoStructOutput], "view">;

  isPlaying: TypedContractMethod<[], [boolean], "view">;

  message: TypedContractMethod<[], [string], "view">;

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

  positionStatus: TypedContractMethod<
    [positionId: BigNumberish],
    [bigint],
    "view"
  >;

  pots: TypedContractMethod<[], [ITexasHoldemTable.PotStructOutput[]], "view">;

  raiseBets: TypedContractMethod<
    [raiseAmount: BigNumberish],
    [void],
    "nonpayable"
  >;

  setup: TypedContractMethod<
    [
      tableId: BigNumberish,
      subject: string,
      seats: BigNumberish,
      bbAmount: BigNumberish,
      sbAmount: BigNumberish,
      anteAmount: BigNumberish,
      initialBuyin: BigNumberish,
      helper: AddressLike,
      cardIds: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;

  showCards: TypedContractMethod<[], [void], "nonpayable">;

  timer: TypedContractMethod<
    [],
    [ITexasHoldemTable.GameTimerStructOutput],
    "view"
  >;

  totalPots: TypedContractMethod<[], [bigint], "view">;

  winner: TypedContractMethod<
    [pot: BigNumberish],
    [
      [bigint[], bigint, bigint] & {
        positions: bigint[];
        winnerHandRanking: bigint;
        winnerKickers: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "activePlayerCounts"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "allinBets"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "callBets"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cashOut"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkBets"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "claimPots"
  ): TypedContractMethod<[position: BigNumberish], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "communityCards"
  ): TypedContractMethod<[], [IPokerTable.PokerCardStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "cutCards"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "foldBets"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "forceNewGame"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "forceStopGame"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "game"
  ): TypedContractMethod<
    [],
    [ITexasHoldemTable.TexasHoldemGameStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "holeCards"
  ): TypedContractMethod<
    [positionId: BigNumberish, revealToken: BytesLike],
    [IPokerTable.PokerCardStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "info"
  ): TypedContractMethod<[], [IPokerTable.InfoStructOutput], "view">;
  getFunction(
    nameOrSignature: "isPlaying"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "message"
  ): TypedContractMethod<[], [string], "view">;
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
    nameOrSignature: "positionStatus"
  ): TypedContractMethod<[positionId: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "pots"
  ): TypedContractMethod<[], [ITexasHoldemTable.PotStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "raiseBets"
  ): TypedContractMethod<[raiseAmount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setup"
  ): TypedContractMethod<
    [
      tableId: BigNumberish,
      subject: string,
      seats: BigNumberish,
      bbAmount: BigNumberish,
      sbAmount: BigNumberish,
      anteAmount: BigNumberish,
      initialBuyin: BigNumberish,
      helper: AddressLike,
      cardIds: BytesLike[]
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "showCards"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "timer"
  ): TypedContractMethod<[], [ITexasHoldemTable.GameTimerStructOutput], "view">;
  getFunction(
    nameOrSignature: "totalPots"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "winner"
  ): TypedContractMethod<
    [pot: BigNumberish],
    [
      [bigint[], bigint, bigint] & {
        positions: bigint[];
        winnerHandRanking: bigint;
        winnerKickers: bigint;
      }
    ],
    "view"
  >;

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
    key: "ShowdownResult"
  ): TypedContractEvent<
    ShowdownResultEvent.InputTuple,
    ShowdownResultEvent.OutputTuple,
    ShowdownResultEvent.OutputObject
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

    "ShowdownResult(address,uint8,uint64)": TypedContractEvent<
      ShowdownResultEvent.InputTuple,
      ShowdownResultEvent.OutputTuple,
      ShowdownResultEvent.OutputObject
    >;
    ShowdownResult: TypedContractEvent<
      ShowdownResultEvent.InputTuple,
      ShowdownResultEvent.OutputTuple,
      ShowdownResultEvent.OutputObject
    >;
  };
}
