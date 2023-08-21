/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
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

export interface MentalPokerTestInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "computeAggregateKey"
      | "mask"
      | "reveal"
      | "test"
      | "verifyKeyOwnership"
      | "verifyReveal"
      | "verifyShuffle"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "computeAggregateKey",
    values: [BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mask",
    values: [BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reveal",
    values: [BytesLike[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "test",
    values: [BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyKeyOwnership",
    values: [BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyReveal",
    values: [BytesLike, BytesLike, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyShuffle",
    values: [BytesLike, BytesLike, BytesLike[], BytesLike[], BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeAggregateKey",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "mask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "test", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyKeyOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyReveal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verifyShuffle",
    data: BytesLike
  ): Result;
}

export interface MentalPokerTest extends BaseContract {
  connect(runner?: ContractRunner | null): MentalPokerTest;
  waitForDeployment(): Promise<this>;

  interface: MentalPokerTestInterface;

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

  computeAggregateKey: TypedContractMethod<
    [pubKeys: BytesLike[]],
    [string],
    "view"
  >;

  mask: TypedContractMethod<
    [params: BytesLike, sharedKey: BytesLike, encoded: BytesLike],
    [string],
    "view"
  >;

  reveal: TypedContractMethod<
    [revealTokens: BytesLike[], masked: BytesLike],
    [string],
    "view"
  >;

  test: TypedContractMethod<
    [param1: BytesLike, param2: BytesLike[]],
    [string],
    "view"
  >;

  verifyKeyOwnership: TypedContractMethod<
    [
      params: BytesLike,
      pubKey: BytesLike,
      memo: BytesLike,
      keyProof: BytesLike
    ],
    [boolean],
    "view"
  >;

  verifyReveal: TypedContractMethod<
    [
      params: BytesLike,
      pubKey: BytesLike,
      revealToken: BytesLike,
      masked: BytesLike,
      revealProof: BytesLike
    ],
    [boolean],
    "view"
  >;

  verifyShuffle: TypedContractMethod<
    [
      params: BytesLike,
      sharedKey: BytesLike,
      curDeck: BytesLike[],
      newDeck: BytesLike[],
      shuffleProof: BytesLike
    ],
    [boolean],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "computeAggregateKey"
  ): TypedContractMethod<[pubKeys: BytesLike[]], [string], "view">;
  getFunction(
    nameOrSignature: "mask"
  ): TypedContractMethod<
    [params: BytesLike, sharedKey: BytesLike, encoded: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "reveal"
  ): TypedContractMethod<
    [revealTokens: BytesLike[], masked: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "test"
  ): TypedContractMethod<
    [param1: BytesLike, param2: BytesLike[]],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyKeyOwnership"
  ): TypedContractMethod<
    [
      params: BytesLike,
      pubKey: BytesLike,
      memo: BytesLike,
      keyProof: BytesLike
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyReveal"
  ): TypedContractMethod<
    [
      params: BytesLike,
      pubKey: BytesLike,
      revealToken: BytesLike,
      masked: BytesLike,
      revealProof: BytesLike
    ],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "verifyShuffle"
  ): TypedContractMethod<
    [
      params: BytesLike,
      sharedKey: BytesLike,
      curDeck: BytesLike[],
      newDeck: BytesLike[],
      shuffleProof: BytesLike
    ],
    [boolean],
    "view"
  >;

  filters: {};
}
