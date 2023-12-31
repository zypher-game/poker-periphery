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
    activePlayers: PromiseOrValue<BigNumberish>;
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
    number,
    ILobby.WaitingStructOutput[],
    MentalPokerHelper.ConfigStructOutput,
    ILobby.PendingActionStructOutput
  ] & {
    id: number;
    table: string;
    seats: number;
    activePlayers: number;
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

export interface ILobbyInterface extends utils.Interface {
  functions: {
    "isPlayerPlaying(address)": FunctionFragment;
    "isPlayerWaiting(address)": FunctionFragment;
    "join(uint32,string,bytes,bytes,bytes)": FunctionFragment;
    "leave()": FunctionFragment;
    "mainWallet(address)": FunctionFragment;
    "ready()": FunctionFragment;
    "reportPlayerLeft(uint32,address,uint256)": FunctionFragment;
    "reportTableEnded(uint32)": FunctionFragment;
    "revealSeats(uint32,bytes[],bytes[])": FunctionFragment;
    "shuffleSeats(uint32,bytes[],bytes)": FunctionFragment;
    "tableExists(uint32)": FunctionFragment;
    "tablePlaying(uint32)": FunctionFragment;
    "tables()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
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

  encodeFunctionData(
    functionFragment: "isPlayerPlaying",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPlayerWaiting",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "join",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "leave", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "mainWallet",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "ready", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "reportPlayerLeft",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "reportTableEnded",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "revealSeats",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "shuffleSeats",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tableExists",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tablePlaying",
    values: [PromiseOrValue<BigNumberish>]
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

  events: {
    "Bet(uint64,uint8,uint8,uint8,uint256,uint256)": EventFragment;
    "GameStarted(uint32,uint64)": EventFragment;
    "PendingReveal(uint32,address,bytes[],uint32)": EventFragment;
    "PendingShuffle(uint32,address,bytes[],bytes,uint32)": EventFragment;
    "PlayerJoined(uint32,address,string)": EventFragment;
    "PlayerLeft(uint32,address)": EventFragment;
    "PlayerReady(uint32,address)": EventFragment;
    "PlayerRevealedSeat(uint32,address)": EventFragment;
    "PlayerSeated(uint32,address,uint8)": EventFragment;
    "PlayerShuffledSeats(uint32,address)": EventFragment;
    "TableStarted(uint32,address,address[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Bet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GameStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendingReveal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PendingShuffle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerJoined"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerLeft"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerReady"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerRevealedSeat"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerSeated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlayerShuffledSeats"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TableStarted"): EventFragment;
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

export interface PendingRevealEventObject {
  tableId: number;
  player: string;
  seats: string[];
  timeout: number;
}
export type PendingRevealEvent = TypedEvent<
  [number, string, string[], number],
  PendingRevealEventObject
>;

export type PendingRevealEventFilter = TypedEventFilter<PendingRevealEvent>;

export interface PendingShuffleEventObject {
  tableId: number;
  player: string;
  seats: string[];
  shareKey: string;
  timeout: number;
}
export type PendingShuffleEvent = TypedEvent<
  [number, string, string[], string, number],
  PendingShuffleEventObject
>;

export type PendingShuffleEventFilter = TypedEventFilter<PendingShuffleEvent>;

export interface PlayerJoinedEventObject {
  tableId: number;
  player: string;
  name: string;
}
export type PlayerJoinedEvent = TypedEvent<
  [number, string, string],
  PlayerJoinedEventObject
>;

export type PlayerJoinedEventFilter = TypedEventFilter<PlayerJoinedEvent>;

export interface PlayerLeftEventObject {
  tableId: number;
  player: string;
}
export type PlayerLeftEvent = TypedEvent<
  [number, string],
  PlayerLeftEventObject
>;

export type PlayerLeftEventFilter = TypedEventFilter<PlayerLeftEvent>;

export interface PlayerReadyEventObject {
  tableId: number;
  player: string;
}
export type PlayerReadyEvent = TypedEvent<
  [number, string],
  PlayerReadyEventObject
>;

export type PlayerReadyEventFilter = TypedEventFilter<PlayerReadyEvent>;

export interface PlayerRevealedSeatEventObject {
  tableId: number;
  player: string;
}
export type PlayerRevealedSeatEvent = TypedEvent<
  [number, string],
  PlayerRevealedSeatEventObject
>;

export type PlayerRevealedSeatEventFilter =
  TypedEventFilter<PlayerRevealedSeatEvent>;

export interface PlayerSeatedEventObject {
  tableId: number;
  player: string;
  position: number;
}
export type PlayerSeatedEvent = TypedEvent<
  [number, string, number],
  PlayerSeatedEventObject
>;

export type PlayerSeatedEventFilter = TypedEventFilter<PlayerSeatedEvent>;

export interface PlayerShuffledSeatsEventObject {
  tableId: number;
  player: string;
}
export type PlayerShuffledSeatsEvent = TypedEvent<
  [number, string],
  PlayerShuffledSeatsEventObject
>;

export type PlayerShuffledSeatsEventFilter =
  TypedEventFilter<PlayerShuffledSeatsEvent>;

export interface TableStartedEventObject {
  tableId: number;
  table: string;
  players: string[];
}
export type TableStartedEvent = TypedEvent<
  [number, string, string[]],
  TableStartedEventObject
>;

export type TableStartedEventFilter = TypedEventFilter<TableStartedEvent>;

export interface ILobby extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ILobbyInterface;

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
    isPlayerPlaying(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { playing: boolean; lastTableId: number }>;

    isPlayerWaiting(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    join(
      tableId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      player: PromiseOrValue<BytesLike>,
      seatDrawingPublicKey: PromiseOrValue<BytesLike>,
      waitingKeyProof: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    leave(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mainWallet(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    ready(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reportPlayerLeft(
      tableId: PromiseOrValue<BigNumberish>,
      player: PromiseOrValue<string>,
      finalBalance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    reportTableEnded(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    revealSeats(
      tableId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<BytesLike>[],
      revealProofs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shuffleSeats(
      tableId: PromiseOrValue<BigNumberish>,
      shuffled: PromiseOrValue<BytesLike>[],
      shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    tableExists(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tablePlaying(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    tables(overrides?: CallOverrides): Promise<[ILobby.TableStructOutput[]]>;
  };

  isPlayerPlaying(
    player: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[boolean, number] & { playing: boolean; lastTableId: number }>;

  isPlayerWaiting(
    player: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  join(
    tableId: PromiseOrValue<BigNumberish>,
    name: PromiseOrValue<string>,
    player: PromiseOrValue<BytesLike>,
    seatDrawingPublicKey: PromiseOrValue<BytesLike>,
    waitingKeyProof: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  leave(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  mainWallet(
    sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  ready(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reportPlayerLeft(
    tableId: PromiseOrValue<BigNumberish>,
    player: PromiseOrValue<string>,
    finalBalance: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  reportTableEnded(
    tableId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  revealSeats(
    tableId: PromiseOrValue<BigNumberish>,
    tokens: PromiseOrValue<BytesLike>[],
    revealProofs: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shuffleSeats(
    tableId: PromiseOrValue<BigNumberish>,
    shuffled: PromiseOrValue<BytesLike>[],
    shuffleProof: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  tableExists(
    tableId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tablePlaying(
    tableId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  tables(overrides?: CallOverrides): Promise<ILobby.TableStructOutput[]>;

  callStatic: {
    isPlayerPlaying(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean, number] & { playing: boolean; lastTableId: number }>;

    isPlayerWaiting(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    join(
      tableId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      player: PromiseOrValue<BytesLike>,
      seatDrawingPublicKey: PromiseOrValue<BytesLike>,
      waitingKeyProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    leave(overrides?: CallOverrides): Promise<BigNumber>;

    mainWallet(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    ready(overrides?: CallOverrides): Promise<boolean>;

    reportPlayerLeft(
      tableId: PromiseOrValue<BigNumberish>,
      player: PromiseOrValue<string>,
      finalBalance: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    reportTableEnded(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    revealSeats(
      tableId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<BytesLike>[],
      revealProofs: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    shuffleSeats(
      tableId: PromiseOrValue<BigNumberish>,
      shuffled: PromiseOrValue<BytesLike>[],
      shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tableExists(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tablePlaying(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    tables(overrides?: CallOverrides): Promise<ILobby.TableStructOutput[]>;
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

    "PendingReveal(uint32,address,bytes[],uint32)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      seats?: null,
      timeout?: null
    ): PendingRevealEventFilter;
    PendingReveal(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      seats?: null,
      timeout?: null
    ): PendingRevealEventFilter;

    "PendingShuffle(uint32,address,bytes[],bytes,uint32)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      seats?: null,
      shareKey?: null,
      timeout?: null
    ): PendingShuffleEventFilter;
    PendingShuffle(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      seats?: null,
      shareKey?: null,
      timeout?: null
    ): PendingShuffleEventFilter;

    "PlayerJoined(uint32,address,string)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      name?: null
    ): PlayerJoinedEventFilter;
    PlayerJoined(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      name?: null
    ): PlayerJoinedEventFilter;

    "PlayerLeft(uint32,address)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerLeftEventFilter;
    PlayerLeft(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerLeftEventFilter;

    "PlayerReady(uint32,address)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerReadyEventFilter;
    PlayerReady(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerReadyEventFilter;

    "PlayerRevealedSeat(uint32,address)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerRevealedSeatEventFilter;
    PlayerRevealedSeat(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerRevealedSeatEventFilter;

    "PlayerSeated(uint32,address,uint8)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      position?: null
    ): PlayerSeatedEventFilter;
    PlayerSeated(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null,
      position?: null
    ): PlayerSeatedEventFilter;

    "PlayerShuffledSeats(uint32,address)"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerShuffledSeatsEventFilter;
    PlayerShuffledSeats(
      tableId?: PromiseOrValue<BigNumberish> | null,
      player?: PromiseOrValue<string> | null
    ): PlayerShuffledSeatsEventFilter;

    "TableStarted(uint32,address,address[])"(
      tableId?: PromiseOrValue<BigNumberish> | null,
      table?: null,
      players?: null
    ): TableStartedEventFilter;
    TableStarted(
      tableId?: PromiseOrValue<BigNumberish> | null,
      table?: null,
      players?: null
    ): TableStartedEventFilter;
  };

  estimateGas: {
    isPlayerPlaying(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPlayerWaiting(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    join(
      tableId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      player: PromiseOrValue<BytesLike>,
      seatDrawingPublicKey: PromiseOrValue<BytesLike>,
      waitingKeyProof: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    leave(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    mainWallet(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ready(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reportPlayerLeft(
      tableId: PromiseOrValue<BigNumberish>,
      player: PromiseOrValue<string>,
      finalBalance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    reportTableEnded(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    revealSeats(
      tableId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<BytesLike>[],
      revealProofs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shuffleSeats(
      tableId: PromiseOrValue<BigNumberish>,
      shuffled: PromiseOrValue<BytesLike>[],
      shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    tableExists(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tablePlaying(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tables(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    isPlayerPlaying(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPlayerWaiting(
      player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    join(
      tableId: PromiseOrValue<BigNumberish>,
      name: PromiseOrValue<string>,
      player: PromiseOrValue<BytesLike>,
      seatDrawingPublicKey: PromiseOrValue<BytesLike>,
      waitingKeyProof: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    leave(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    mainWallet(
      sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ready(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reportPlayerLeft(
      tableId: PromiseOrValue<BigNumberish>,
      player: PromiseOrValue<string>,
      finalBalance: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    reportTableEnded(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    revealSeats(
      tableId: PromiseOrValue<BigNumberish>,
      tokens: PromiseOrValue<BytesLike>[],
      revealProofs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shuffleSeats(
      tableId: PromiseOrValue<BigNumberish>,
      shuffled: PromiseOrValue<BytesLike>[],
      shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    tableExists(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tablePlaying(
      tableId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tables(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
