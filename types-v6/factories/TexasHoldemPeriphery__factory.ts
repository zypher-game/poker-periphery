/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  TexasHoldemPeriphery,
  TexasHoldemPeripheryInterface,
} from "../TexasHoldemPeriphery";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
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
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "table",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "revealToken",
        type: "bytes",
      },
    ],
    name: "_tableStatus",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "table",
            type: "address",
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
                internalType: "uint8",
                name: "pid",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "wallet",
                type: "address",
              },
              {
                internalType: "string",
                name: "displayName",
                type: "string",
              },
              {
                internalType: "enum ITexasHoldemTable.PlayerStatus",
                name: "status",
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
            internalType: "struct TablePosition[]",
            name: "positions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8[]",
                name: "winners",
                type: "uint8[]",
              },
              {
                internalType: "enum HandRanking",
                name: "winnerHandRanking",
                type: "uint8",
              },
            ],
            internalType: "struct PotMeta",
            name: "mainPot",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8[]",
                name: "winners",
                type: "uint8[]",
              },
              {
                internalType: "enum HandRanking",
                name: "winnerHandRanking",
                type: "uint8",
              },
            ],
            internalType: "struct PotMeta[]",
            name: "sidePots",
            type: "tuple[]",
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
            name: "actingTimeStart",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "actingTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
        ],
        internalType: "struct TableStatus",
        name: "status",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_lobby",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lobby",
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
    name: "lobbyTables",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "id",
            type: "uint32",
          },
          {
            internalType: "address",
            name: "table",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "seats",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "activePlayers",
            type: "uint8",
          },
          {
            internalType: "enum IPokerTable.TableStatus",
            name: "status",
            type: "uint8",
          },
          {
            components: [
              {
                internalType: "address",
                name: "player",
                type: "address",
              },
              {
                internalType: "string",
                name: "name",
                type: "string",
              },
              {
                internalType: "bytes",
                name: "publicKey",
                type: "bytes",
              },
            ],
            internalType: "struct ILobby.Waiting[]",
            name: "waitings",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "m",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "n",
                type: "uint8",
              },
              {
                internalType: "bytes",
                name: "param",
                type: "bytes",
              },
              {
                internalType: "bytes[]",
                name: "items",
                type: "bytes[]",
              },
            ],
            internalType: "struct MentalPokerHelper.Config",
            name: "config",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "enum ILobby.PendingActionType",
                name: "act",
                type: "uint8",
              },
              {
                internalType: "address[]",
                name: "users",
                type: "address[]",
              },
              {
                internalType: "uint32",
                name: "timeout",
                type: "uint32",
              },
            ],
            internalType: "struct ILobby.PendingAction",
            name: "pendingAction",
            type: "tuple",
          },
        ],
        internalType: "struct ILobby.Table[]",
        name: "tables",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
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
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
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
        internalType: "address",
        name: "table",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "revealToken",
        type: "bytes",
      },
    ],
    name: "tableByAddress",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "table",
            type: "address",
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
                internalType: "uint8",
                name: "pid",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "wallet",
                type: "address",
              },
              {
                internalType: "string",
                name: "displayName",
                type: "string",
              },
              {
                internalType: "enum ITexasHoldemTable.PlayerStatus",
                name: "status",
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
            internalType: "struct TablePosition[]",
            name: "positions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8[]",
                name: "winners",
                type: "uint8[]",
              },
              {
                internalType: "enum HandRanking",
                name: "winnerHandRanking",
                type: "uint8",
              },
            ],
            internalType: "struct PotMeta",
            name: "mainPot",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8[]",
                name: "winners",
                type: "uint8[]",
              },
              {
                internalType: "enum HandRanking",
                name: "winnerHandRanking",
                type: "uint8",
              },
            ],
            internalType: "struct PotMeta[]",
            name: "sidePots",
            type: "tuple[]",
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
            name: "actingTimeStart",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "actingTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
        ],
        internalType: "struct TableStatus",
        name: "status",
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
        name: "index",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "revealToken",
        type: "bytes",
      },
    ],
    name: "tableByIndex",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "table",
            type: "address",
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
                internalType: "uint8",
                name: "pid",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "wallet",
                type: "address",
              },
              {
                internalType: "string",
                name: "displayName",
                type: "string",
              },
              {
                internalType: "enum ITexasHoldemTable.PlayerStatus",
                name: "status",
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
            internalType: "struct TablePosition[]",
            name: "positions",
            type: "tuple[]",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8[]",
                name: "winners",
                type: "uint8[]",
              },
              {
                internalType: "enum HandRanking",
                name: "winnerHandRanking",
                type: "uint8",
              },
            ],
            internalType: "struct PotMeta",
            name: "mainPot",
            type: "tuple",
          },
          {
            components: [
              {
                internalType: "uint256",
                name: "amount",
                type: "uint256",
              },
              {
                internalType: "uint8[]",
                name: "winners",
                type: "uint8[]",
              },
              {
                internalType: "enum HandRanking",
                name: "winnerHandRanking",
                type: "uint8",
              },
            ],
            internalType: "struct PotMeta[]",
            name: "sidePots",
            type: "tuple[]",
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
            name: "actingTimeStart",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "actingTimeout",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
        ],
        internalType: "struct TableStatus",
        name: "status",
        type: "tuple",
      },
    ],
    stateMutability: "view",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class TexasHoldemPeriphery__factory {
  static readonly abi = _abi;
  static createInterface(): TexasHoldemPeripheryInterface {
    return new Interface(_abi) as TexasHoldemPeripheryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TexasHoldemPeriphery {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TexasHoldemPeriphery;
  }
}
