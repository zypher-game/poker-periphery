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

export declare namespace IGameInstance {
  export type PlayerStruct = {
    _acc: PromiseOrValue<string>;
    _key: PromiseOrValue<BytesLike>;
    _memo: PromiseOrValue<BytesLike>;
    _cards: PromiseOrValue<BigNumberish>[];
  };

  export type PlayerStructOutput = [string, string, string, BigNumber[]] & {
    _acc: string;
    _key: string;
    _memo: string;
    _cards: BigNumber[];
  };
}

export interface IGameInstanceInterface extends utils.Interface {
  functions: {
    "addRevealTokens(address,bool,uint256[],bytes[],bytes[])": FunctionFragment;
    "cardHash(bytes)": FunctionFragment;
    "getPlayer(address)": FunctionFragment;
    "getRevealTokens(uint256)": FunctionFragment;
    "isFull()": FunctionFragment;
    "isOpen(uint256)": FunctionFragment;
    "isPlayer(address)": FunctionFragment;
    "isUsed(uint256)": FunctionFragment;
    "joinGame(address,bytes,bytes,bytes)": FunctionFragment;
    "leaveGame(address)": FunctionFragment;
    "numUsed()": FunctionFragment;
    "players()": FunctionFragment;
    "playingCard(uint256)": FunctionFragment;
    "readyToReveal(uint256[])": FunctionFragment;
    "resetGame(bytes,uint256)": FunctionFragment;
    "setUsed(uint256[])": FunctionFragment;
    "shuffleDeck(address,bytes[],bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addRevealTokens"
      | "cardHash"
      | "getPlayer"
      | "getRevealTokens"
      | "isFull"
      | "isOpen"
      | "isPlayer"
      | "isUsed"
      | "joinGame"
      | "leaveGame"
      | "numUsed"
      | "players"
      | "playingCard"
      | "readyToReveal"
      | "resetGame"
      | "setUsed"
      | "shuffleDeck"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addRevealTokens",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<boolean>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "cardHash",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlayer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getRevealTokens",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "isFull", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isOpen",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPlayer",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isUsed",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "joinGame",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "leaveGame",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "numUsed", values?: undefined): string;
  encodeFunctionData(functionFragment: "players", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "playingCard",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "readyToReveal",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "resetGame",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "setUsed",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "shuffleDeck",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "addRevealTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cardHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPlayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRevealTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isFull", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isOpen", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isPlayer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isUsed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "joinGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "leaveGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "numUsed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "players", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "playingCard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "readyToReveal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "resetGame", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUsed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "shuffleDeck",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGameInstance extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGameInstanceInterface;

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
    addRevealTokens(
      _player: PromiseOrValue<string>,
      _revealMine: PromiseOrValue<boolean>,
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      _revealTokens: PromiseOrValue<BytesLike>[],
      _revealProofs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    cardHash(
      _card: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getPlayer(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[IGameInstance.PlayerStructOutput]>;

    getRevealTokens(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    isFull(overrides?: CallOverrides): Promise<[boolean]>;

    isOpen(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPlayer(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isUsed(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    joinGame(
      _player: PromiseOrValue<string>,
      _pubKey: PromiseOrValue<BytesLike>,
      _memo: PromiseOrValue<BytesLike>,
      _keyProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    leaveGame(
      _player: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    numUsed(overrides?: CallOverrides): Promise<[BigNumber]>;

    players(overrides?: CallOverrides): Promise<[string[]]>;

    playingCard(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    readyToReveal(
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    resetGame(
      _params: PromiseOrValue<BytesLike>,
      _numPlayers: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setUsed(
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shuffleDeck(
      _player: PromiseOrValue<string>,
      _shuffledDeck: PromiseOrValue<BytesLike>[],
      _shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addRevealTokens(
    _player: PromiseOrValue<string>,
    _revealMine: PromiseOrValue<boolean>,
    _cardIndexes: PromiseOrValue<BigNumberish>[],
    _revealTokens: PromiseOrValue<BytesLike>[],
    _revealProofs: PromiseOrValue<BytesLike>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  cardHash(
    _card: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getPlayer(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<IGameInstance.PlayerStructOutput>;

  getRevealTokens(
    _cardIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string[]>;

  isFull(overrides?: CallOverrides): Promise<boolean>;

  isOpen(
    _cardIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPlayer(
    _account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isUsed(
    _cardIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  joinGame(
    _player: PromiseOrValue<string>,
    _pubKey: PromiseOrValue<BytesLike>,
    _memo: PromiseOrValue<BytesLike>,
    _keyProof: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  leaveGame(
    _player: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  numUsed(overrides?: CallOverrides): Promise<BigNumber>;

  players(overrides?: CallOverrides): Promise<string[]>;

  playingCard(
    _cardIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  readyToReveal(
    _cardIndexes: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<boolean>;

  resetGame(
    _params: PromiseOrValue<BytesLike>,
    _numPlayers: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setUsed(
    _cardIndexes: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shuffleDeck(
    _player: PromiseOrValue<string>,
    _shuffledDeck: PromiseOrValue<BytesLike>[],
    _shuffleProof: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addRevealTokens(
      _player: PromiseOrValue<string>,
      _revealMine: PromiseOrValue<boolean>,
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      _revealTokens: PromiseOrValue<BytesLike>[],
      _revealProofs: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<void>;

    cardHash(
      _card: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getPlayer(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<IGameInstance.PlayerStructOutput>;

    getRevealTokens(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    isFull(overrides?: CallOverrides): Promise<boolean>;

    isOpen(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPlayer(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isUsed(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    joinGame(
      _player: PromiseOrValue<string>,
      _pubKey: PromiseOrValue<BytesLike>,
      _memo: PromiseOrValue<BytesLike>,
      _keyProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    leaveGame(
      _player: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    numUsed(overrides?: CallOverrides): Promise<BigNumber>;

    players(overrides?: CallOverrides): Promise<string[]>;

    playingCard(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    readyToReveal(
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    resetGame(
      _params: PromiseOrValue<BytesLike>,
      _numPlayers: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    setUsed(
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    shuffleDeck(
      _player: PromiseOrValue<string>,
      _shuffledDeck: PromiseOrValue<BytesLike>[],
      _shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addRevealTokens(
      _player: PromiseOrValue<string>,
      _revealMine: PromiseOrValue<boolean>,
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      _revealTokens: PromiseOrValue<BytesLike>[],
      _revealProofs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    cardHash(
      _card: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPlayer(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRevealTokens(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isFull(overrides?: CallOverrides): Promise<BigNumber>;

    isOpen(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPlayer(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUsed(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    joinGame(
      _player: PromiseOrValue<string>,
      _pubKey: PromiseOrValue<BytesLike>,
      _memo: PromiseOrValue<BytesLike>,
      _keyProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    leaveGame(
      _player: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    numUsed(overrides?: CallOverrides): Promise<BigNumber>;

    players(overrides?: CallOverrides): Promise<BigNumber>;

    playingCard(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    readyToReveal(
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    resetGame(
      _params: PromiseOrValue<BytesLike>,
      _numPlayers: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setUsed(
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shuffleDeck(
      _player: PromiseOrValue<string>,
      _shuffledDeck: PromiseOrValue<BytesLike>[],
      _shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addRevealTokens(
      _player: PromiseOrValue<string>,
      _revealMine: PromiseOrValue<boolean>,
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      _revealTokens: PromiseOrValue<BytesLike>[],
      _revealProofs: PromiseOrValue<BytesLike>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    cardHash(
      _card: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPlayer(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRevealTokens(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isFull(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOpen(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPlayer(
      _account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUsed(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    joinGame(
      _player: PromiseOrValue<string>,
      _pubKey: PromiseOrValue<BytesLike>,
      _memo: PromiseOrValue<BytesLike>,
      _keyProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    leaveGame(
      _player: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    numUsed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    players(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    playingCard(
      _cardIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    readyToReveal(
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    resetGame(
      _params: PromiseOrValue<BytesLike>,
      _numPlayers: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setUsed(
      _cardIndexes: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shuffleDeck(
      _player: PromiseOrValue<string>,
      _shuffledDeck: PromiseOrValue<BytesLike>[],
      _shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
