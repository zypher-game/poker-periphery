/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ZkGameLobby, ZkGameLobbyInterface } from "../ZkGameLobby";

const _abi = [
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
    inputs: [],
    name: "TEXAS_HOLDEM_TABLE",
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
        name: "posCounts",
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
        name: "player",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "waitingPublicKey",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "waitingKeyProof",
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
    ],
    name: "kick",
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
        internalType: "bytes[]",
        name: "tokens",
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
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "key",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "table",
        type: "address",
      },
    ],
    name: "setDefinition",
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
        internalType: "uint8",
        name: "index",
        type: "uint8",
      },
    ],
    name: "show",
    outputs: [
      {
        internalType: "bytes",
        name: "revealed",
        type: "bytes",
      },
      {
        internalType: "bytes[]",
        name: "sealeds",
        type: "bytes[]",
      },
      {
        internalType: "bytes[]",
        name: "publics",
        type: "bytes[]",
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
        internalType: "bytes[]",
        name: "shuffled",
        type: "bytes[]",
      },
      {
        internalType: "bytes",
        name: "shuffleProof",
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
] as const;

export class ZkGameLobby__factory {
  static readonly abi = _abi;
  static createInterface(): ZkGameLobbyInterface {
    return new utils.Interface(_abi) as ZkGameLobbyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZkGameLobby {
    return new Contract(address, _abi, signerOrProvider) as ZkGameLobby;
  }
}
