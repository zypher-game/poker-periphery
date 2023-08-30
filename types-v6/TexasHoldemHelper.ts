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

export type PotWinnerStruct = {
  ranking: BigNumberish;
  kickers: BigNumberish;
  sharedReward: BigNumberish;
  sharedCount: BigNumberish;
  positions: BigNumberish;
  claimed: BigNumberish;
};

export type PotWinnerStructOutput = [
  ranking: bigint,
  kickers: bigint,
  sharedReward: bigint,
  sharedCount: bigint,
  positions: bigint,
  claimed: bigint
] & {
  ranking: bigint;
  kickers: bigint;
  sharedReward: bigint;
  sharedCount: bigint;
  positions: bigint;
  claimed: bigint;
};

export declare namespace IPokerTable {
  export type PokerCardStruct = { suit: BigNumberish; rank: BigNumberish };

  export type PokerCardStructOutput = [suit: bigint, rank: bigint] & {
    suit: bigint;
    rank: bigint;
  };
}

export declare namespace ITexasHoldemTable {
  export type GameCacheStruct = {
    stage: BigNumberish;
    position: BigNumberish;
    timeout: BigNumberish;
    minBet: BigNumberish;
    lastRaise: BigNumberish;
    folded: BigNumberish;
    allin: BigNumberish;
    betMatched: BigNumberish;
    showed: BigNumberish;
    claimed: BigNumberish;
    foldedCount: BigNumberish;
  };

  export type GameCacheStructOutput = [
    stage: bigint,
    position: bigint,
    timeout: bigint,
    minBet: bigint,
    lastRaise: bigint,
    folded: bigint,
    allin: bigint,
    betMatched: bigint,
    showed: bigint,
    claimed: bigint,
    foldedCount: bigint
  ] & {
    stage: bigint;
    position: bigint;
    timeout: bigint;
    minBet: bigint;
    lastRaise: bigint;
    folded: bigint;
    allin: bigint;
    betMatched: bigint;
    showed: bigint;
    claimed: bigint;
    foldedCount: bigint;
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

  export type PotStruct = { amount: BigNumberish; positions: BigNumberish[] };

  export type PotStructOutput = [amount: bigint, positions: bigint[]] & {
    amount: bigint;
    positions: bigint[];
  };
}

export interface TexasHoldemHelperInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bestHand"
      | "computeNextPlayer"
      | "computePotWinners"
      | "computePots"
      | "computeSortedAllinAmounts"
      | "createSignMessage"
      | "getHandRanking"
      | "parseSigner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bestHand",
    values: [IPokerTable.PokerCardStruct[], IPokerTable.PokerCardStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "computeNextPlayer",
    values: [
      ITexasHoldemTable.GameCacheStruct,
      ITexasHoldemTable.GameTimerStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computePotWinners",
    values: [
      PotWinnerStruct[],
      BigNumberish,
      IPokerTable.PokerCardStruct[],
      IPokerTable.PokerCardStruct[],
      BigNumberish[],
      BigNumberish[],
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computePots",
    values: [BigNumberish[], BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "computeSortedAllinAmounts",
    values: [BigNumberish[], BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "createSignMessage",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getHandRanking",
    values: [
      [
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct
      ]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "parseSigner",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "bestHand", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "computeNextPlayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computePotWinners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computePots",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "computeSortedAllinAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createSignMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getHandRanking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "parseSigner",
    data: BytesLike
  ): Result;
}

export interface TexasHoldemHelper extends BaseContract {
  connect(runner?: ContractRunner | null): TexasHoldemHelper;
  waitForDeployment(): Promise<this>;

  interface: TexasHoldemHelperInterface;

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

  bestHand: TypedContractMethod<
    [
      communityCards: IPokerTable.PokerCardStruct[],
      holeCards: IPokerTable.PokerCardStruct[]
    ],
    [[bigint, bigint] & { ranking: bigint; kickers: bigint }],
    "view"
  >;

  computeNextPlayer: TypedContractMethod<
    [
      cache: ITexasHoldemTable.GameCacheStruct,
      _timer: ITexasHoldemTable.GameTimerStruct,
      playerCounts: BigNumberish,
      fromPos: BigNumberish,
      fromTime: BigNumberish
    ],
    [ITexasHoldemTable.GameCacheStructOutput],
    "view"
  >;

  computePotWinners: TypedContractMethod<
    [
      prevWinners: PotWinnerStruct[],
      position: BigNumberish,
      holeCards: IPokerTable.PokerCardStruct[],
      communityCards: IPokerTable.PokerCardStruct[],
      bets: BigNumberish[],
      ascSortedAllInAmounts: BigNumberish[],
      bFoldedPositions: BigNumberish
    ],
    [PotWinnerStructOutput[]],
    "view"
  >;

  computePots: TypedContractMethod<
    [
      bets: BigNumberish[],
      ascSortedAllInAmounts: BigNumberish[],
      bFoldedPositions: BigNumberish
    ],
    [ITexasHoldemTable.PotStructOutput[]],
    "view"
  >;

  computeSortedAllinAmounts: TypedContractMethod<
    [cachedSortedAllinAmounts: BigNumberish[], newAmount: BigNumberish],
    [bigint[]],
    "view"
  >;

  createSignMessage: TypedContractMethod<
    [subject: string, id: BigNumberish],
    [string],
    "view"
  >;

  getHandRanking: TypedContractMethod<
    [
      cards: [
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct
      ]
    ],
    [[bigint, bigint] & { ranking: bigint; kickers: bigint }],
    "view"
  >;

  parseSigner: TypedContractMethod<
    [signature: BytesLike, salt: string],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bestHand"
  ): TypedContractMethod<
    [
      communityCards: IPokerTable.PokerCardStruct[],
      holeCards: IPokerTable.PokerCardStruct[]
    ],
    [[bigint, bigint] & { ranking: bigint; kickers: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeNextPlayer"
  ): TypedContractMethod<
    [
      cache: ITexasHoldemTable.GameCacheStruct,
      _timer: ITexasHoldemTable.GameTimerStruct,
      playerCounts: BigNumberish,
      fromPos: BigNumberish,
      fromTime: BigNumberish
    ],
    [ITexasHoldemTable.GameCacheStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "computePotWinners"
  ): TypedContractMethod<
    [
      prevWinners: PotWinnerStruct[],
      position: BigNumberish,
      holeCards: IPokerTable.PokerCardStruct[],
      communityCards: IPokerTable.PokerCardStruct[],
      bets: BigNumberish[],
      ascSortedAllInAmounts: BigNumberish[],
      bFoldedPositions: BigNumberish
    ],
    [PotWinnerStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "computePots"
  ): TypedContractMethod<
    [
      bets: BigNumberish[],
      ascSortedAllInAmounts: BigNumberish[],
      bFoldedPositions: BigNumberish
    ],
    [ITexasHoldemTable.PotStructOutput[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "computeSortedAllinAmounts"
  ): TypedContractMethod<
    [cachedSortedAllinAmounts: BigNumberish[], newAmount: BigNumberish],
    [bigint[]],
    "view"
  >;
  getFunction(
    nameOrSignature: "createSignMessage"
  ): TypedContractMethod<[subject: string, id: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "getHandRanking"
  ): TypedContractMethod<
    [
      cards: [
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct
      ]
    ],
    [[bigint, bigint] & { ranking: bigint; kickers: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "parseSigner"
  ): TypedContractMethod<
    [signature: BytesLike, salt: string],
    [string],
    "view"
  >;

  filters: {};
}
