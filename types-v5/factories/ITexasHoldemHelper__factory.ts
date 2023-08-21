/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITexasHoldemHelper,
  ITexasHoldemHelperInterface,
} from "../ITexasHoldemHelper";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IPokerTable.PokerSuit",
            name: "suit",
            type: "uint8",
          },
          {
            internalType: "enum IPokerTable.PokerRank",
            name: "rank",
            type: "uint8",
          },
        ],
        internalType: "struct IPokerTable.PokerCard[7]",
        name: "cards",
        type: "tuple[7]",
      },
    ],
    name: "bestHand",
    outputs: [
      {
        internalType: "enum HandRanking",
        name: "ranking",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "kickers",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum IPokerTable.PokerSuit",
            name: "suit",
            type: "uint8",
          },
          {
            internalType: "enum IPokerTable.PokerRank",
            name: "rank",
            type: "uint8",
          },
        ],
        internalType: "struct IPokerTable.PokerCard[5]",
        name: "cards",
        type: "tuple[5]",
      },
    ],
    name: "getHandRanking",
    outputs: [
      {
        internalType: "enum HandRanking",
        name: "ranking",
        type: "uint8",
      },
      {
        internalType: "uint64",
        name: "kickers",
        type: "uint64",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class ITexasHoldemHelper__factory {
  static readonly abi = _abi;
  static createInterface(): ITexasHoldemHelperInterface {
    return new utils.Interface(_abi) as ITexasHoldemHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITexasHoldemHelper {
    return new Contract(address, _abi, signerOrProvider) as ITexasHoldemHelper;
  }
}
