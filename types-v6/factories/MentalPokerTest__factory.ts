/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MentalPokerTest,
  MentalPokerTestInterface,
} from "../MentalPokerTest";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_mentalPokerAddr",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "pubKeys",
        type: "bytes[]",
      },
    ],
    name: "computeAggregateKey",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sharedKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "encoded",
        type: "bytes",
      },
    ],
    name: "mask",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "revealTokens",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "masked",
        type: "bytes",
      },
    ],
    name: "reveal",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "param1",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "param2",
        type: "bytes[]",
      },
    ],
    name: "test",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "pubKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "memo",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "keyProof",
        type: "bytes",
      },
    ],
    name: "verifyKeyOwnership",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "pubKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "revealToken",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "masked",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "revealProof",
        type: "bytes",
      },
    ],
    name: "verifyReveal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "sharedKey",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "curDeck",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "newDeck",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "shuffleProof",
        type: "bytes",
      },
    ],
    name: "verifyShuffle",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class MentalPokerTest__factory {
  static readonly abi = _abi;
  static createInterface(): MentalPokerTestInterface {
    return new Interface(_abi) as MentalPokerTestInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MentalPokerTest {
    return new Contract(address, _abi, runner) as unknown as MentalPokerTest;
  }
}
