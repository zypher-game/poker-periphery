/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { GameLobby, GameLobbyInterface } from "../GameLobby";

const _abi = [
  "event PendingReveal(uint32 indexed,address indexed,bytes[],uint32)",
  "event PendingShuffle(uint32 indexed,address indexed,bytes[],bytes,uint32)",
  "event PlayerJoined(uint32 indexed,address indexed,string)",
  "event PlayerLeft(uint32 indexed,address indexed)",
  "event PlayerReady(uint32 indexed,address indexed)",
  "event PlayerRevealedSeat(uint32 indexed,address indexed)",
  "event PlayerSeated(uint32 indexed,address indexed,uint8)",
  "event PlayerShuffledSeats(uint32 indexed,address indexed)",
  "event TableStarted(uint32 indexed,address,address[])",
  "function isPlayerPlaying(address) view returns (bool, uint32)",
  "function isPlayerWaiting(address) view returns (bool)",
  "function join(uint32,string,bytes,bytes,bytes) payable returns (bool)",
  "function kick(uint32,address) returns (bool)",
  "function leave() returns (uint256)",
  "function ready() returns (bool)",
  "function reportPlayerLeft(uint32,address,uint256,uint256,uint256)",
  "function reportTableEnded(uint32)",
  "function revealSeats(uint32,bytes[],bytes[]) returns (bool)",
  "function show(uint32,uint8) view returns (bytes, bytes[], bytes[])",
  "function shuffleSeats(uint32,bytes[],bytes) returns (bool)",
  "function tableExists(uint32) view returns (bool)",
  "function tablePlaying(uint32) view returns (bool)",
  "function tables() view returns (tuple(uint32,address,uint8,uint8,uint8,tuple(address,string,bytes)[],tuple(uint8,uint8,bytes,bytes[]),tuple(uint8,address[],uint32))[])",
] as const;

export class GameLobby__factory {
  static readonly abi = _abi;
  static createInterface(): GameLobbyInterface {
    return new Interface(_abi) as GameLobbyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): GameLobby {
    return new Contract(address, _abi, runner) as unknown as GameLobby;
  }
}
