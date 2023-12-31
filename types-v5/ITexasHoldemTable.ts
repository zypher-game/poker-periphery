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
  export type PokerCardStruct = {
    suit: PromiseOrValue<BigNumberish>;
    rank: PromiseOrValue<BigNumberish>;
  };

  export type PokerCardStructOutput = [number, number] & {
    suit: number;
    rank: number;
  };

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

export declare namespace ITexasHoldemTable {
  export type TexasHoldemGameStruct = {
    gameId: PromiseOrValue<BigNumberish>;
    stage: PromiseOrValue<BigNumberish>;
    minRaise: PromiseOrValue<BigNumberish>;
    betAmount: PromiseOrValue<BigNumberish>;
    lastStageBet: PromiseOrValue<BigNumberish>;
    actingPosition: PromiseOrValue<BigNumberish>;
    actingTimeout: PromiseOrValue<BigNumberish>;
  };

  export type TexasHoldemGameStructOutput = [
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number
  ] & {
    gameId: BigNumber;
    stage: number;
    minRaise: BigNumber;
    betAmount: BigNumber;
    lastStageBet: BigNumber;
    actingPosition: number;
    actingTimeout: number;
  };

  export type PotStruct = {
    amount: PromiseOrValue<BigNumberish>;
    positions: PromiseOrValue<BigNumberish>[];
  };

  export type PotStructOutput = [BigNumber, number[]] & {
    amount: BigNumber;
    positions: number[];
  };

  export type GameTimerStruct = {
    initialTimeout: PromiseOrValue<BigNumberish>;
    betTimeout: PromiseOrValue<BigNumberish>;
    showdownTimeout: PromiseOrValue<BigNumberish>;
    endTimeout: PromiseOrValue<BigNumberish>;
  };

  export type GameTimerStructOutput = [number, number, number, number] & {
    initialTimeout: number;
    betTimeout: number;
    showdownTimeout: number;
    endTimeout: number;
  };
}

export interface ITexasHoldemTableInterface extends utils.Interface {
  functions: {
    "activePlayerCounts()": FunctionFragment;
    "allinBets()": FunctionFragment;
    "callBets()": FunctionFragment;
    "cashOut()": FunctionFragment;
    "checkBets()": FunctionFragment;
    "claimPots(uint8)": FunctionFragment;
    "communityCards()": FunctionFragment;
    "cutCards()": FunctionFragment;
    "foldBets()": FunctionFragment;
    "forceNewGame()": FunctionFragment;
    "forceStopGame()": FunctionFragment;
    "game()": FunctionFragment;
    "holeCards(uint8,bytes)": FunctionFragment;
    "info()": FunctionFragment;
    "isPlaying()": FunctionFragment;
    "message()": FunctionFragment;
    "newTable((address,string)[])": FunctionFragment;
    "position(uint8)": FunctionFragment;
    "positionStatus(uint8)": FunctionFragment;
    "pots()": FunctionFragment;
    "raiseBets(uint256)": FunctionFragment;
    "setup(uint32,string,uint8,uint256,uint256,uint256,uint256,address,bytes[])": FunctionFragment;
    "showCards()": FunctionFragment;
    "timer()": FunctionFragment;
    "totalPots()": FunctionFragment;
    "winner(uint8)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
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
    values: [PromiseOrValue<BigNumberish>]
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
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
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
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "positionStatus",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "pots", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "raiseBets",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setup",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "showCards", values?: undefined): string;
  encodeFunctionData(functionFragment: "timer", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalPots", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "winner",
    values: [PromiseOrValue<BigNumberish>]
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

  events: {
    "Bet(uint64,uint8,uint8,uint8,uint256,uint256)": EventFragment;
    "GameStarted(uint32,uint64)": EventFragment;
    "ShowdownResult(address,uint8,uint64)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ShowdownResult"): EventFragment;
}

export interface BetEventObject {
  gameId: BigNumber;
  stage: number;
  position: number;
  option: number;
  callAmount: BigNumber;
  raiseAmount: BigNumber;
}
export type BetEvent = TypedEvent<
  [BigNumber, number, number, number, BigNumber, BigNumber],
  BetEventObject
>;

export type BetEventFilter = TypedEventFilter<BetEvent>;

export interface GameStartedEventObject {
  tableId: number;
  gameId: BigNumber;
}
export type GameStartedEvent = TypedEvent<
  [number, BigNumber],
  GameStartedEventObject
>;

export type GameStartedEventFilter = TypedEventFilter<GameStartedEvent>;

export interface ShowdownResultEventObject {
  player: string;
  handRank: number;
  kickers: BigNumber;
}
export type ShowdownResultEvent = TypedEvent<
  [string, number, BigNumber],
  ShowdownResultEventObject
>;

export type ShowdownResultEventFilter = TypedEventFilter<ShowdownResultEvent>;

export interface ITexasHoldemTable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITexasHoldemTableInterface;

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
    activePlayerCounts(overrides?: CallOverrides): Promise<[number]>;

    allinBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cashOut(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    checkBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimPots(
      position: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    communityCards(
      overrides?: CallOverrides
    ): Promise<[IPokerTable.PokerCardStructOutput[]]>;

    cutCards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    foldBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    forceNewGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    forceStopGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    game(
      overrides?: CallOverrides
    ): Promise<
      [ITexasHoldemTable.TexasHoldemGameStructOutput] & {
        currentGame: ITexasHoldemTable.TexasHoldemGameStructOutput;
      }
    >;

    holeCards(
      positionId: PromiseOrValue<BigNumberish>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[IPokerTable.PokerCardStructOutput[]]>;

    info(overrides?: CallOverrides): Promise<[IPokerTable.InfoStructOutput]>;

    isPlaying(overrides?: CallOverrides): Promise<[boolean]>;

    message(overrides?: CallOverrides): Promise<[string]>;

    newTable(
      players: IPokerTable.PlayerStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    position(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[IPokerTable.PositionStructOutput]>;

    positionStatus(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number] & { status: number }>;

    pots(
      overrides?: CallOverrides
    ): Promise<[ITexasHoldemTable.PotStructOutput[]]>;

    raiseBets(
      raiseAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setup(
      tableId: PromiseOrValue<BigNumberish>,
      subject: PromiseOrValue<string>,
      seats: PromiseOrValue<BigNumberish>,
      bbAmount: PromiseOrValue<BigNumberish>,
      sbAmount: PromiseOrValue<BigNumberish>,
      anteAmount: PromiseOrValue<BigNumberish>,
      initialBuyin: PromiseOrValue<BigNumberish>,
      helper: PromiseOrValue<string>,
      cardIds: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    showCards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    timer(
      overrides?: CallOverrides
    ): Promise<[ITexasHoldemTable.GameTimerStructOutput]>;

    totalPots(overrides?: CallOverrides): Promise<[BigNumber]>;

    winner(
      pot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number[], number, BigNumber] & {
        positions: number[];
        winnerHandRanking: number;
        winnerKickers: BigNumber;
      }
    >;
  };

  activePlayerCounts(overrides?: CallOverrides): Promise<number>;

  allinBets(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callBets(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cashOut(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  checkBets(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimPots(
    position: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  communityCards(
    overrides?: CallOverrides
  ): Promise<IPokerTable.PokerCardStructOutput[]>;

  cutCards(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  foldBets(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  forceNewGame(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  forceStopGame(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  game(
    overrides?: CallOverrides
  ): Promise<ITexasHoldemTable.TexasHoldemGameStructOutput>;

  holeCards(
    positionId: PromiseOrValue<BigNumberish>,
    revealToken: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<IPokerTable.PokerCardStructOutput[]>;

  info(overrides?: CallOverrides): Promise<IPokerTable.InfoStructOutput>;

  isPlaying(overrides?: CallOverrides): Promise<boolean>;

  message(overrides?: CallOverrides): Promise<string>;

  newTable(
    players: IPokerTable.PlayerStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  position(
    pid: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<IPokerTable.PositionStructOutput>;

  positionStatus(
    positionId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<number>;

  pots(overrides?: CallOverrides): Promise<ITexasHoldemTable.PotStructOutput[]>;

  raiseBets(
    raiseAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setup(
    tableId: PromiseOrValue<BigNumberish>,
    subject: PromiseOrValue<string>,
    seats: PromiseOrValue<BigNumberish>,
    bbAmount: PromiseOrValue<BigNumberish>,
    sbAmount: PromiseOrValue<BigNumberish>,
    anteAmount: PromiseOrValue<BigNumberish>,
    initialBuyin: PromiseOrValue<BigNumberish>,
    helper: PromiseOrValue<string>,
    cardIds: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  showCards(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  timer(
    overrides?: CallOverrides
  ): Promise<ITexasHoldemTable.GameTimerStructOutput>;

  totalPots(overrides?: CallOverrides): Promise<BigNumber>;

  winner(
    pot: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number[], number, BigNumber] & {
      positions: number[];
      winnerHandRanking: number;
      winnerKickers: BigNumber;
    }
  >;

  callStatic: {
    activePlayerCounts(overrides?: CallOverrides): Promise<number>;

    allinBets(overrides?: CallOverrides): Promise<void>;

    callBets(overrides?: CallOverrides): Promise<void>;

    cashOut(overrides?: CallOverrides): Promise<void>;

    checkBets(overrides?: CallOverrides): Promise<void>;

    claimPots(
      position: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    communityCards(
      overrides?: CallOverrides
    ): Promise<IPokerTable.PokerCardStructOutput[]>;

    cutCards(overrides?: CallOverrides): Promise<void>;

    foldBets(overrides?: CallOverrides): Promise<void>;

    forceNewGame(overrides?: CallOverrides): Promise<void>;

    forceStopGame(overrides?: CallOverrides): Promise<void>;

    game(
      overrides?: CallOverrides
    ): Promise<ITexasHoldemTable.TexasHoldemGameStructOutput>;

    holeCards(
      positionId: PromiseOrValue<BigNumberish>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<IPokerTable.PokerCardStructOutput[]>;

    info(overrides?: CallOverrides): Promise<IPokerTable.InfoStructOutput>;

    isPlaying(overrides?: CallOverrides): Promise<boolean>;

    message(overrides?: CallOverrides): Promise<string>;

    newTable(
      players: IPokerTable.PlayerStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    position(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<IPokerTable.PositionStructOutput>;

    positionStatus(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    pots(
      overrides?: CallOverrides
    ): Promise<ITexasHoldemTable.PotStructOutput[]>;

    raiseBets(
      raiseAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setup(
      tableId: PromiseOrValue<BigNumberish>,
      subject: PromiseOrValue<string>,
      seats: PromiseOrValue<BigNumberish>,
      bbAmount: PromiseOrValue<BigNumberish>,
      sbAmount: PromiseOrValue<BigNumberish>,
      anteAmount: PromiseOrValue<BigNumberish>,
      initialBuyin: PromiseOrValue<BigNumberish>,
      helper: PromiseOrValue<string>,
      cardIds: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    showCards(overrides?: CallOverrides): Promise<void>;

    timer(
      overrides?: CallOverrides
    ): Promise<ITexasHoldemTable.GameTimerStructOutput>;

    totalPots(overrides?: CallOverrides): Promise<BigNumber>;

    winner(
      pot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number[], number, BigNumber] & {
        positions: number[];
        winnerHandRanking: number;
        winnerKickers: BigNumber;
      }
    >;
  };

  filters: {
    "Bet(uint64,uint8,uint8,uint8,uint256,uint256)"(
      gameId?: PromiseOrValue<BigNumberish> | null,
      stage?: null,
      position?: PromiseOrValue<BigNumberish> | null,
      option?: null,
      callAmount?: null,
      raiseAmount?: null
    ): BetEventFilter;
    Bet(
      gameId?: PromiseOrValue<BigNumberish> | null,
      stage?: null,
      position?: PromiseOrValue<BigNumberish> | null,
      option?: null,
      callAmount?: null,
      raiseAmount?: null
    ): BetEventFilter;

    "GameStarted(uint32,uint64)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      gameId?: PromiseOrValue<BigNumberish> | null
    ): GameStartedEventFilter;
    GameStarted(
      tableId?: PromiseOrValue<BigNumberish> | null,
      gameId?: PromiseOrValue<BigNumberish> | null
    ): GameStartedEventFilter;

    "ShowdownResult(address,uint8,uint64)"(
      player?: PromiseOrValue<string> | null,
      handRank?: null,
      kickers?: null
    ): ShowdownResultEventFilter;
    ShowdownResult(
      player?: PromiseOrValue<string> | null,
      handRank?: null,
      kickers?: null
    ): ShowdownResultEventFilter;
  };

  estimateGas: {
    activePlayerCounts(overrides?: CallOverrides): Promise<BigNumber>;

    allinBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    callBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cashOut(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    checkBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimPots(
      position: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    communityCards(overrides?: CallOverrides): Promise<BigNumber>;

    cutCards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    foldBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    forceNewGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    forceStopGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    game(overrides?: CallOverrides): Promise<BigNumber>;

    holeCards(
      positionId: PromiseOrValue<BigNumberish>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    info(overrides?: CallOverrides): Promise<BigNumber>;

    isPlaying(overrides?: CallOverrides): Promise<BigNumber>;

    message(overrides?: CallOverrides): Promise<BigNumber>;

    newTable(
      players: IPokerTable.PlayerStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    position(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    positionStatus(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pots(overrides?: CallOverrides): Promise<BigNumber>;

    raiseBets(
      raiseAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setup(
      tableId: PromiseOrValue<BigNumberish>,
      subject: PromiseOrValue<string>,
      seats: PromiseOrValue<BigNumberish>,
      bbAmount: PromiseOrValue<BigNumberish>,
      sbAmount: PromiseOrValue<BigNumberish>,
      anteAmount: PromiseOrValue<BigNumberish>,
      initialBuyin: PromiseOrValue<BigNumberish>,
      helper: PromiseOrValue<string>,
      cardIds: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    showCards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    timer(overrides?: CallOverrides): Promise<BigNumber>;

    totalPots(overrides?: CallOverrides): Promise<BigNumber>;

    winner(
      pot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activePlayerCounts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    allinBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    callBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cashOut(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    checkBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimPots(
      position: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    communityCards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cutCards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    foldBets(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    forceNewGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    forceStopGame(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    game(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    holeCards(
      positionId: PromiseOrValue<BigNumberish>,
      revealToken: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    info(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPlaying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    message(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    newTable(
      players: IPokerTable.PlayerStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    position(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    positionStatus(
      positionId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pots(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    raiseBets(
      raiseAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setup(
      tableId: PromiseOrValue<BigNumberish>,
      subject: PromiseOrValue<string>,
      seats: PromiseOrValue<BigNumberish>,
      bbAmount: PromiseOrValue<BigNumberish>,
      sbAmount: PromiseOrValue<BigNumberish>,
      anteAmount: PromiseOrValue<BigNumberish>,
      initialBuyin: PromiseOrValue<BigNumberish>,
      helper: PromiseOrValue<string>,
      cardIds: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    showCards(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    timer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalPots(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    winner(
      pot: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
