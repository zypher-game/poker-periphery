/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface MentalPokerTestInterface extends utils.Interface {
  functions: {
    "computeAggregateKey(bytes[])": FunctionFragment;
    "mask(bytes,bytes,bytes)": FunctionFragment;
    "reveal(bytes[],bytes)": FunctionFragment;
    "test(bytes,bytes[])": FunctionFragment;
    "verifyKeyOwnership(bytes,bytes,bytes,bytes)": FunctionFragment;
    "verifyReveal(bytes,bytes,bytes,bytes,bytes)": FunctionFragment;
    "verifyShuffle(bytes,bytes,bytes[],bytes[],bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
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
    values: [PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "mask",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "reveal",
    values: [PromiseOrValue<BytesLike>[], PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "test",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyKeyOwnership",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyReveal",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyShuffle",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BytesLike>
    ]
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

  events: {};
}

export interface MentalPokerTest extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MentalPokerTestInterface;

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
    computeAggregateKey(
      pubKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    mask(
      params: PromiseOrValue<BytesLike>,
      sharedKey: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    reveal(
      revealTokens: PromiseOrValue<BytesLike>[],
      masked: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    test(
      param1: PromiseOrValue<BytesLike>,
      param2: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<[string]>;

    verifyKeyOwnership(
      params: PromiseOrValue<BytesLike>,
      pubKey: PromiseOrValue<BytesLike>,
      memo: PromiseOrValue<BytesLike>,
      keyProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyReveal(
      params: PromiseOrValue<BytesLike>,
      pubKey: PromiseOrValue<BytesLike>,
      revealToken: PromiseOrValue<BytesLike>,
      masked: PromiseOrValue<BytesLike>,
      revealProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyShuffle(
      params: PromiseOrValue<BytesLike>,
      sharedKey: PromiseOrValue<BytesLike>,
      curDeck: PromiseOrValue<BytesLike>[],
      newDeck: PromiseOrValue<BytesLike>[],
      shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  computeAggregateKey(
    pubKeys: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<string>;

  mask(
    params: PromiseOrValue<BytesLike>,
    sharedKey: PromiseOrValue<BytesLike>,
    encoded: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  reveal(
    revealTokens: PromiseOrValue<BytesLike>[],
    masked: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  test(
    param1: PromiseOrValue<BytesLike>,
    param2: PromiseOrValue<BytesLike>[],
    overrides?: CallOverrides
  ): Promise<string>;

  verifyKeyOwnership(
    params: PromiseOrValue<BytesLike>,
    pubKey: PromiseOrValue<BytesLike>,
    memo: PromiseOrValue<BytesLike>,
    keyProof: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyReveal(
    params: PromiseOrValue<BytesLike>,
    pubKey: PromiseOrValue<BytesLike>,
    revealToken: PromiseOrValue<BytesLike>,
    masked: PromiseOrValue<BytesLike>,
    revealProof: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyShuffle(
    params: PromiseOrValue<BytesLike>,
    sharedKey: PromiseOrValue<BytesLike>,
    curDeck: PromiseOrValue<BytesLike>[],
    newDeck: PromiseOrValue<BytesLike>[],
    shuffleProof: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    computeAggregateKey(
      pubKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string>;

    mask(
      params: PromiseOrValue<BytesLike>,
      sharedKey: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    reveal(
      revealTokens: PromiseOrValue<BytesLike>[],
      masked: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    test(
      param1: PromiseOrValue<BytesLike>,
      param2: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<string>;

    verifyKeyOwnership(
      params: PromiseOrValue<BytesLike>,
      pubKey: PromiseOrValue<BytesLike>,
      memo: PromiseOrValue<BytesLike>,
      keyProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyReveal(
      params: PromiseOrValue<BytesLike>,
      pubKey: PromiseOrValue<BytesLike>,
      revealToken: PromiseOrValue<BytesLike>,
      masked: PromiseOrValue<BytesLike>,
      revealProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyShuffle(
      params: PromiseOrValue<BytesLike>,
      sharedKey: PromiseOrValue<BytesLike>,
      curDeck: PromiseOrValue<BytesLike>[],
      newDeck: PromiseOrValue<BytesLike>[],
      shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    computeAggregateKey(
      pubKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    mask(
      params: PromiseOrValue<BytesLike>,
      sharedKey: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    reveal(
      revealTokens: PromiseOrValue<BytesLike>[],
      masked: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    test(
      param1: PromiseOrValue<BytesLike>,
      param2: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyKeyOwnership(
      params: PromiseOrValue<BytesLike>,
      pubKey: PromiseOrValue<BytesLike>,
      memo: PromiseOrValue<BytesLike>,
      keyProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyReveal(
      params: PromiseOrValue<BytesLike>,
      pubKey: PromiseOrValue<BytesLike>,
      revealToken: PromiseOrValue<BytesLike>,
      masked: PromiseOrValue<BytesLike>,
      revealProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyShuffle(
      params: PromiseOrValue<BytesLike>,
      sharedKey: PromiseOrValue<BytesLike>,
      curDeck: PromiseOrValue<BytesLike>[],
      newDeck: PromiseOrValue<BytesLike>[],
      shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeAggregateKey(
      pubKeys: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    mask(
      params: PromiseOrValue<BytesLike>,
      sharedKey: PromiseOrValue<BytesLike>,
      encoded: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    reveal(
      revealTokens: PromiseOrValue<BytesLike>[],
      masked: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    test(
      param1: PromiseOrValue<BytesLike>,
      param2: PromiseOrValue<BytesLike>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyKeyOwnership(
      params: PromiseOrValue<BytesLike>,
      pubKey: PromiseOrValue<BytesLike>,
      memo: PromiseOrValue<BytesLike>,
      keyProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyReveal(
      params: PromiseOrValue<BytesLike>,
      pubKey: PromiseOrValue<BytesLike>,
      revealToken: PromiseOrValue<BytesLike>,
      masked: PromiseOrValue<BytesLike>,
      revealProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyShuffle(
      params: PromiseOrValue<BytesLike>,
      sharedKey: PromiseOrValue<BytesLike>,
      curDeck: PromiseOrValue<BytesLike>[],
      newDeck: PromiseOrValue<BytesLike>[],
      shuffleProof: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
