/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type PotWinnerStruct = {
  ranking: PromiseOrValue<BigNumberish>;
  kickers: PromiseOrValue<BigNumberish>;
  sharedReward: PromiseOrValue<BigNumberish>;
  sharedCount: PromiseOrValue<BigNumberish>;
  positions: PromiseOrValue<BigNumberish>;
  claimed: PromiseOrValue<BigNumberish>;
};

export type PotWinnerStructOutput = [
  number,
  BigNumber,
  BigNumber,
  number,
  number,
  number
] & {
  ranking: number;
  kickers: BigNumber;
  sharedReward: BigNumber;
  sharedCount: number;
  positions: number;
  claimed: number;
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

export declare namespace ITexasHoldemTable {
  export type GameCacheStruct = {
    stage: PromiseOrValue<BigNumberish>;
    position: PromiseOrValue<BigNumberish>;
    timeout: PromiseOrValue<BigNumberish>;
    minBet: PromiseOrValue<BigNumberish>;
    lastRaise: PromiseOrValue<BigNumberish>;
    lastStageBalancedBet: PromiseOrValue<BigNumberish>;
    folded: PromiseOrValue<BigNumberish>;
    allin: PromiseOrValue<BigNumberish>;
    betMatched: PromiseOrValue<BigNumberish>;
    showed: PromiseOrValue<BigNumberish>;
    claimed: PromiseOrValue<BigNumberish>;
    foldedCount: PromiseOrValue<BigNumberish>;
  };

  export type GameCacheStructOutput = [
    number,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number,
    number,
    number
  ] & {
    stage: number;
    position: number;
    timeout: number;
    minBet: BigNumber;
    lastRaise: BigNumber;
    lastStageBalancedBet: BigNumber;
    folded: number;
    allin: number;
    betMatched: number;
    showed: number;
    claimed: number;
    foldedCount: number;
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

  export type PotStruct = {
    amount: PromiseOrValue<BigNumberish>;
    positions: PromiseOrValue<BigNumberish>[];
  };

  export type PotStructOutput = [BigNumber, number[]] & {
    amount: BigNumber;
    positions: number[];
  };
}

export interface TexasHoldemHelperInterface extends utils.Interface {
  functions: {
    "bestHand((uint8,uint8)[],(uint8,uint8)[])": FunctionFragment;
    "computeNextPlayer((uint8,uint8,uint32,uint256,uint256,uint256,uint16,uint16,uint16,uint16,uint16,uint8),(uint32,uint32,uint32,uint32),uint8,uint8,uint32)": FunctionFragment;
    "computePotWinners((uint8,uint64,uint256,uint8,uint16,uint16)[],uint8,(uint8,uint8)[],(uint8,uint8)[],uint256[],uint256[],uint16)": FunctionFragment;
    "computePots(uint256[],uint256[],uint16)": FunctionFragment;
    "computeSortedAllinAmounts(uint256[],uint256)": FunctionFragment;
    "createSignMessage(string,uint64)": FunctionFragment;
    "getHandRanking((uint8,uint8)[5])": FunctionFragment;
    "parseSigner(bytes,string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
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
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computePotWinners",
    values: [
      PotWinnerStruct[],
      PromiseOrValue<BigNumberish>,
      IPokerTable.PokerCardStruct[],
      IPokerTable.PokerCardStruct[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computePots",
    values: [
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "computeSortedAllinAmounts",
    values: [PromiseOrValue<BigNumberish>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "createSignMessage",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
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
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
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

  events: {};
}

export interface TexasHoldemHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TexasHoldemHelperInterface;

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
    bestHand(
      communityCards: IPokerTable.PokerCardStruct[],
      holeCards: IPokerTable.PokerCardStruct[],
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { ranking: number; kickers: BigNumber }>;

    computeNextPlayer(
      cache: ITexasHoldemTable.GameCacheStruct,
      _timer: ITexasHoldemTable.GameTimerStruct,
      playerCounts: PromiseOrValue<BigNumberish>,
      fromPos: PromiseOrValue<BigNumberish>,
      fromTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[ITexasHoldemTable.GameCacheStructOutput]>;

    computePotWinners(
      prevWinners: PotWinnerStruct[],
      position: PromiseOrValue<BigNumberish>,
      holeCards: IPokerTable.PokerCardStruct[],
      communityCards: IPokerTable.PokerCardStruct[],
      bets: PromiseOrValue<BigNumberish>[],
      ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
      bFoldedPositions: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [PotWinnerStructOutput[], number, BigNumber] & {
        winners: PotWinnerStructOutput[];
        ranking: number;
        kickers: BigNumber;
      }
    >;

    computePots(
      bets: PromiseOrValue<BigNumberish>[],
      ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
      bFoldedPositions: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [ITexasHoldemTable.PotStructOutput[]] & {
        pots: ITexasHoldemTable.PotStructOutput[];
      }
    >;

    computeSortedAllinAmounts(
      cachedSortedAllinAmounts: PromiseOrValue<BigNumberish>[],
      newAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { ascSortedAllInAmounts: BigNumber[] }>;

    createSignMessage(
      subject: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getHandRanking(
      cards: [
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct
      ],
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { ranking: number; kickers: BigNumber }>;

    parseSigner(
      signature: PromiseOrValue<BytesLike>,
      salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string] & { signer: string }>;
  };

  bestHand(
    communityCards: IPokerTable.PokerCardStruct[],
    holeCards: IPokerTable.PokerCardStruct[],
    overrides?: CallOverrides
  ): Promise<[number, BigNumber] & { ranking: number; kickers: BigNumber }>;

  computeNextPlayer(
    cache: ITexasHoldemTable.GameCacheStruct,
    _timer: ITexasHoldemTable.GameTimerStruct,
    playerCounts: PromiseOrValue<BigNumberish>,
    fromPos: PromiseOrValue<BigNumberish>,
    fromTime: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ITexasHoldemTable.GameCacheStructOutput>;

  computePotWinners(
    prevWinners: PotWinnerStruct[],
    position: PromiseOrValue<BigNumberish>,
    holeCards: IPokerTable.PokerCardStruct[],
    communityCards: IPokerTable.PokerCardStruct[],
    bets: PromiseOrValue<BigNumberish>[],
    ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
    bFoldedPositions: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [PotWinnerStructOutput[], number, BigNumber] & {
      winners: PotWinnerStructOutput[];
      ranking: number;
      kickers: BigNumber;
    }
  >;

  computePots(
    bets: PromiseOrValue<BigNumberish>[],
    ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
    bFoldedPositions: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<ITexasHoldemTable.PotStructOutput[]>;

  computeSortedAllinAmounts(
    cachedSortedAllinAmounts: PromiseOrValue<BigNumberish>[],
    newAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  createSignMessage(
    subject: PromiseOrValue<string>,
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getHandRanking(
    cards: [
      IPokerTable.PokerCardStruct,
      IPokerTable.PokerCardStruct,
      IPokerTable.PokerCardStruct,
      IPokerTable.PokerCardStruct,
      IPokerTable.PokerCardStruct
    ],
    overrides?: CallOverrides
  ): Promise<[number, BigNumber] & { ranking: number; kickers: BigNumber }>;

  parseSigner(
    signature: PromiseOrValue<BytesLike>,
    salt: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    bestHand(
      communityCards: IPokerTable.PokerCardStruct[],
      holeCards: IPokerTable.PokerCardStruct[],
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { ranking: number; kickers: BigNumber }>;

    computeNextPlayer(
      cache: ITexasHoldemTable.GameCacheStruct,
      _timer: ITexasHoldemTable.GameTimerStruct,
      playerCounts: PromiseOrValue<BigNumberish>,
      fromPos: PromiseOrValue<BigNumberish>,
      fromTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ITexasHoldemTable.GameCacheStructOutput>;

    computePotWinners(
      prevWinners: PotWinnerStruct[],
      position: PromiseOrValue<BigNumberish>,
      holeCards: IPokerTable.PokerCardStruct[],
      communityCards: IPokerTable.PokerCardStruct[],
      bets: PromiseOrValue<BigNumberish>[],
      ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
      bFoldedPositions: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [PotWinnerStructOutput[], number, BigNumber] & {
        winners: PotWinnerStructOutput[];
        ranking: number;
        kickers: BigNumber;
      }
    >;

    computePots(
      bets: PromiseOrValue<BigNumberish>[],
      ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
      bFoldedPositions: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<ITexasHoldemTable.PotStructOutput[]>;

    computeSortedAllinAmounts(
      cachedSortedAllinAmounts: PromiseOrValue<BigNumberish>[],
      newAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    createSignMessage(
      subject: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getHandRanking(
      cards: [
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct
      ],
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { ranking: number; kickers: BigNumber }>;

    parseSigner(
      signature: PromiseOrValue<BytesLike>,
      salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    bestHand(
      communityCards: IPokerTable.PokerCardStruct[],
      holeCards: IPokerTable.PokerCardStruct[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeNextPlayer(
      cache: ITexasHoldemTable.GameCacheStruct,
      _timer: ITexasHoldemTable.GameTimerStruct,
      playerCounts: PromiseOrValue<BigNumberish>,
      fromPos: PromiseOrValue<BigNumberish>,
      fromTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computePotWinners(
      prevWinners: PotWinnerStruct[],
      position: PromiseOrValue<BigNumberish>,
      holeCards: IPokerTable.PokerCardStruct[],
      communityCards: IPokerTable.PokerCardStruct[],
      bets: PromiseOrValue<BigNumberish>[],
      ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
      bFoldedPositions: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computePots(
      bets: PromiseOrValue<BigNumberish>[],
      ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
      bFoldedPositions: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    computeSortedAllinAmounts(
      cachedSortedAllinAmounts: PromiseOrValue<BigNumberish>[],
      newAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createSignMessage(
      subject: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getHandRanking(
      cards: [
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct
      ],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    parseSigner(
      signature: PromiseOrValue<BytesLike>,
      salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bestHand(
      communityCards: IPokerTable.PokerCardStruct[],
      holeCards: IPokerTable.PokerCardStruct[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeNextPlayer(
      cache: ITexasHoldemTable.GameCacheStruct,
      _timer: ITexasHoldemTable.GameTimerStruct,
      playerCounts: PromiseOrValue<BigNumberish>,
      fromPos: PromiseOrValue<BigNumberish>,
      fromTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computePotWinners(
      prevWinners: PotWinnerStruct[],
      position: PromiseOrValue<BigNumberish>,
      holeCards: IPokerTable.PokerCardStruct[],
      communityCards: IPokerTable.PokerCardStruct[],
      bets: PromiseOrValue<BigNumberish>[],
      ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
      bFoldedPositions: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computePots(
      bets: PromiseOrValue<BigNumberish>[],
      ascSortedAllInAmounts: PromiseOrValue<BigNumberish>[],
      bFoldedPositions: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    computeSortedAllinAmounts(
      cachedSortedAllinAmounts: PromiseOrValue<BigNumberish>[],
      newAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createSignMessage(
      subject: PromiseOrValue<string>,
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getHandRanking(
      cards: [
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct,
        IPokerTable.PokerCardStruct
      ],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    parseSigner(
      signature: PromiseOrValue<BytesLike>,
      salt: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
