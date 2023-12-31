/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DemoLobby, DemoLobbyInterface } from "../DemoLobby";

const _abi = [
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
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
        indexed: true,
        internalType: "uint64",
        name: "gameId",
        type: "uint64",
      },
      {
        indexed: false,
        internalType: "enum ILobby.GameStage",
        name: "stage",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "uint8",
        name: "position",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "enum ILobby.BettingOption",
        name: "option",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "callAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "raiseAmount",
        type: "uint256",
      },
    ],
    name: "Bet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "uint64",
        name: "gameId",
        type: "uint64",
      },
    ],
    name: "GameStarted",
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
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "seats",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "timeout",
        type: "uint32",
      },
    ],
    name: "PendingReveal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "seats",
        type: "bytes[]",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "shareKey",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "timeout",
        type: "uint32",
      },
    ],
    name: "PendingShuffle",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "PlayerJoined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "PlayerLeft",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "PlayerReady",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "PlayerRevealedSeat",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "position",
        type: "uint8",
      },
    ],
    name: "PlayerSeated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "player",
        type: "address",
      },
    ],
    name: "PlayerShuffledSeats",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "table",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "players",
        type: "address[]",
      },
    ],
    name: "TableStarted",
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
        name: "deputy",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "until",
        type: "uint64",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint64",
        name: "signedAt",
        type: "uint64",
      },
    ],
    name: "authorize",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "deputy",
        type: "address",
      },
    ],
    name: "cancelAuthorization",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cardConfig",
    outputs: [
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
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "positionCounts",
        type: "uint8",
      },
    ],
    name: "createTable",
    outputs: [
      {
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "cardFaces",
        type: "bytes[]",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "isPlayerPlaying",
    outputs: [
      {
        internalType: "bool",
        name: "playing",
        type: "bool",
      },
      {
        internalType: "uint32",
        name: "lastTableId",
        type: "uint32",
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
    name: "isPlayerWaiting",
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
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "waitingPublicKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "join",
    outputs: [
      {
        internalType: "bool",
        name: "joined",
        type: "bool",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "leave",
    outputs: [
      {
        internalType: "uint256",
        name: "refund",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "mainWallet",
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
    name: "ready",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
    ],
    name: "removeTable",
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
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "player",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "reportPlayerLeft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
    ],
    name: "reportTableEnded",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        internalType: "bytes[]",
        name: "revealed",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "revealProofs",
        type: "bytes[]",
      },
    ],
    name: "revealSeats",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "helper",
        type: "address",
      },
    ],
    name: "setHelper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "readyTimeout",
        type: "uint32",
      },
    ],
    name: "setReadyTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "revealTimeout",
        type: "uint32",
      },
    ],
    name: "setRevealTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "shuffleTimeout",
        type: "uint32",
      },
    ],
    name: "setShuffleTime",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "setStakeAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "ratio",
        type: "uint256",
      },
    ],
    name: "setStakeRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "setStakeToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        internalType: "contract IPokerTable",
        name: "table",
        type: "address",
      },
    ],
    name: "setTable",
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
    ],
    name: "setTableFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tablePlayTime",
        type: "uint32",
      },
    ],
    name: "setTablePlayTime",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
      {
        internalType: "bytes[]",
        name: "",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "shuffleSeats",
    outputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
    ],
    name: "tableExists",
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
        internalType: "uint32",
        name: "tableId",
        type: "uint32",
      },
    ],
    name: "tablePlaying",
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
    name: "tables",
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
  {
    inputs: [
      {
        internalType: "bytes",
        name: "sig",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "message",
        type: "bytes",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
    ],
    name: "verifySigner",
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
    name: "version",
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
] as const;

export class DemoLobby__factory {
  static readonly abi = _abi;
  static createInterface(): DemoLobbyInterface {
    return new utils.Interface(_abi) as DemoLobbyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DemoLobby {
    return new Contract(address, _abi, signerOrProvider) as DemoLobby;
  }
}
