/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  TexasHoldemHelper,
  TexasHoldemHelperInterface,
} from "../TexasHoldemHelper";

const _abi = [
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
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
        internalType: "struct IPokerTable.PokerCard[]",
        name: "communityCards",
        type: "tuple[]",
      },
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
        internalType: "struct IPokerTable.PokerCard[]",
        name: "holeCards",
        type: "tuple[]",
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
            internalType: "enum ITexasHoldemTable.GameStage",
            name: "stage",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "position",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "timeout",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "minBet",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastRaise",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "folded",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "allin",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "betMatched",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "showed",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "claimable",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "foldedCount",
            type: "uint8",
          },
        ],
        internalType: "struct ITexasHoldemTable.GameCache",
        name: "cache",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint32",
            name: "initialTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "betTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "showdownTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "endTimeout",
            type: "uint32",
          },
        ],
        internalType: "struct ITexasHoldemTable.GameTimer",
        name: "_timer",
        type: "tuple",
      },
      {
        internalType: "uint8",
        name: "playerCounts",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "fromPos",
        type: "uint8",
      },
      {
        internalType: "uint32",
        name: "fromTime",
        type: "uint32",
      },
    ],
    name: "computeNextPlayer",
    outputs: [
      {
        components: [
          {
            internalType: "enum ITexasHoldemTable.GameStage",
            name: "stage",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "position",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "timeout",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "minBet",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastRaise",
            type: "uint256",
          },
          {
            internalType: "uint16",
            name: "folded",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "allin",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "betMatched",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "showed",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "claimable",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "foldedCount",
            type: "uint8",
          },
        ],
        internalType: "struct ITexasHoldemTable.GameCache",
        name: "",
        type: "tuple",
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
            internalType: "enum HandRanking",
            name: "ranking",
            type: "uint8",
          },
          {
            internalType: "uint64",
            name: "kickers",
            type: "uint64",
          },
          {
            internalType: "uint16",
            name: "positions",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "claimed",
            type: "uint16",
          },
        ],
        internalType: "struct PotWinner[]",
        name: "prevWinners",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "position",
        type: "uint8",
      },
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
        internalType: "struct IPokerTable.PokerCard[]",
        name: "holeCards",
        type: "tuple[]",
      },
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
        internalType: "struct IPokerTable.PokerCard[]",
        name: "communityCards",
        type: "tuple[]",
      },
      {
        internalType: "uint256[]",
        name: "bets",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "ascSortedAllInAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint16",
        name: "bFoldedPositions",
        type: "uint16",
      },
    ],
    name: "computePotWinners",
    outputs: [
      {
        components: [
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
          {
            internalType: "uint16",
            name: "positions",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "claimed",
            type: "uint16",
          },
        ],
        internalType: "struct PotWinner[]",
        name: "winners",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "bets",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "ascSortedAllInAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint16",
        name: "bFoldedPositions",
        type: "uint16",
      },
    ],
    name: "computePots",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint8[]",
            name: "positions",
            type: "uint8[]",
          },
        ],
        internalType: "struct ITexasHoldemTable.Pot[]",
        name: "pots",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "cachedSortedAllinAmounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "newAmount",
        type: "uint256",
      },
    ],
    name: "computeSortedAllinAmounts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "ascSortedAllInAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "subject",
        type: "string",
      },
      {
        internalType: "uint64",
        name: "id",
        type: "uint64",
      },
    ],
    name: "createSignMessage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "string",
        name: "salt",
        type: "string",
      },
    ],
    name: "parseSigner",
    outputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class TexasHoldemHelper__factory {
  static readonly abi = _abi;
  static createInterface(): TexasHoldemHelperInterface {
    return new Interface(_abi) as TexasHoldemHelperInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TexasHoldemHelper {
    return new Contract(address, _abi, runner) as unknown as TexasHoldemHelper;
  }
}
