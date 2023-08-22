/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DemoTable, DemoTableInterface } from "../DemoTable";

const _abi = [
  {
    inputs: [],
    name: "Forbidden",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAction",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "current",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "InvalidPlayer",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "enum ITexasHoldemTable.GameStage",
        name: "currentStage",
        type: "uint8",
      },
    ],
    name: "InvalidStage",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "TABLE_TIMEOUT",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "allinBets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "bets",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burnCards",
    outputs: [
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
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "buyin",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "callBets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cashOut",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "checkBets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "communityCards",
    outputs: [
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
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "cutCards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ff",
    outputs: [
      {
        internalType: "enum ITexasHoldemTable.GameStage",
        name: "stage_",
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "foldBets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "forceNewGame",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "forceStop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "game",
    outputs: [
      {
        components: [
          {
            internalType: "uint64",
            name: "id",
            type: "uint64",
          },
          {
            internalType: "string",
            name: "subject",
            type: "string",
          },
          {
            internalType: "enum ITexasHoldemTable.GameStage",
            name: "stage",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "pot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minRaise",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "betAmount",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "actingPosition",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "actingTimeout",
            type: "uint32",
          },
        ],
        internalType: "struct ITexasHoldemTable.TexasHoldemGame",
        name: "currentGame",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getBigBlind",
    outputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "gameId",
        type: "uint64",
      },
    ],
    name: "getGamePlayerCounts",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "pos",
        type: "uint8",
      },
    ],
    name: "getPositionHandRanking",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSmallBlind",
    outputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "positionId",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "revealToken",
        type: "bytes",
      },
    ],
    name: "holeCards",
    outputs: [
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
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "inTable",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "info",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "subject",
            type: "string",
          },
          {
            internalType: "address",
            name: "lobby",
            type: "address",
          },
          {
            internalType: "enum IPokerTable.GameType",
            name: "gameType",
            type: "uint8",
          },
          {
            internalType: "enum IPokerTable.TableStatus",
            name: "status",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "seats",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "initialBuyin",
            type: "uint256",
          },
        ],
        internalType: "struct IPokerTable.Info",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPlaying",
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
    inputs: [],
    name: "name",
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
            internalType: "address",
            name: "wallet",
            type: "address",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        internalType: "struct IPokerTable.Player[]",
        name: "players",
        type: "tuple[]",
      },
    ],
    name: "newTable",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "playerCounts",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "pid",
        type: "uint8",
      },
    ],
    name: "position",
    outputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "pid",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "wallet",
                type: "address",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
            ],
            internalType: "struct IPokerTable.Player",
            name: "player",
            type: "tuple",
          },
          {
            internalType: "uint32",
            name: "wins",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "draws",
            type: "uint32",
          },
          {
            internalType: "uint256",
            name: "bets",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "chips",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pendingBuyin",
            type: "uint256",
          },
        ],
        internalType: "struct IPokerTable.Position",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "position",
        type: "uint8",
      },
    ],
    name: "positionStatus",
    outputs: [
      {
        internalType: "enum ITexasHoldemTable.PlayerStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pot",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raiseAmount",
        type: "uint256",
      },
    ],
    name: "raiseBets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "uint8",
        name: "seats",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "bbAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sbAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "anteAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "initialBuyin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "helper",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "cardFaces",
        type: "bytes[]",
      },
    ],
    name: "setup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class DemoTable__factory {
  static readonly abi = _abi;
  static createInterface(): DemoTableInterface {
    return new utils.Interface(_abi) as DemoTableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DemoTable {
    return new Contract(address, _abi, signerOrProvider) as DemoTable;
  }
}
