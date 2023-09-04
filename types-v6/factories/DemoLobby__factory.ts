/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { DemoLobby, DemoLobbyInterface } from "../DemoLobby";

const _abi = [
  "event AdminChanged(address,address)",
  "event BeaconUpgraded(address indexed)",
  "event Initialized(uint8)",
  "event OwnershipTransferred(address indexed,address indexed)",
  "event PendingReveal(uint32 indexed,address indexed,bytes[],uint32)",
  "event PendingShuffle(uint32 indexed,address indexed,bytes[],bytes,uint32)",
  "event PlayerJoined(uint32 indexed,address indexed,string)",
  "event PlayerLeft(uint32 indexed,address indexed)",
  "event PlayerReady(uint32 indexed,address indexed)",
  "event PlayerRevealedSeat(uint32 indexed,address indexed)",
  "event PlayerSeated(uint32 indexed,address indexed,uint8)",
  "event PlayerShuffledSeats(uint32 indexed,address indexed)",
  "event TableStarted(uint32 indexed,address,address[])",
  "event Upgraded(address indexed)",
  "function cardConfig() view returns (uint8, uint8, bytes)",
  "function createTable(string,uint8) returns (uint32)",
  "function initialize(bytes[])",
  "function isPlayerPlaying(address) view returns (bool, uint32)",
  "function isPlayerWaiting(address) view returns (bool)",
  "function join(uint32,string,bytes,bytes,bytes) payable returns (bool)",
  "function leave() returns (uint256)",
  "function owner() view returns (address)",
  "function proxiableUUID() view returns (bytes32)",
  "function ready() returns (bool)",
  "function removeTable(uint32)",
  "function renounceOwnership()",
  "function reportPlayerLeft(uint32,address,uint256,uint256,uint256)",
  "function reportTableEnded(uint32)",
  "function revealSeats(uint32,bytes[],bytes[]) returns (bool)",
  "function setHelper(address)",
  "function setReadyTime(uint32)",
  "function setRevealTime(uint32)",
  "function setShuffleTime(uint32)",
  "function setTable(uint32,address)",
  "function setTableFactory(address)",
  "function setTablePlayTime(uint32)",
  "function shuffleSeats(uint32,bytes[],bytes) returns (bool)",
  "function tableExists(uint32) view returns (bool)",
  "function tablePlaying(uint32) view returns (bool)",
  "function tables() view returns (tuple(uint32,address,uint8,uint8,uint8,tuple(address,string,bytes)[],tuple(uint8,uint8,bytes,bytes[]),tuple(uint8,address[],uint32))[])",
  "function transferOwnership(address)",
  "function upgradeTo(address)",
  "function upgradeToAndCall(address,bytes) payable",
  "function version() view returns (uint32)",
] as const;

export class DemoLobby__factory {
  static readonly abi = _abi;
  static createInterface(): DemoLobbyInterface {
    return new Interface(_abi) as DemoLobbyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DemoLobby {
    return new Contract(address, _abi, runner) as unknown as DemoLobby;
  }
}
