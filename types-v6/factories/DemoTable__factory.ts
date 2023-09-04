/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { DemoTable, DemoTableInterface } from "../DemoTable";

const _abi = [
  "error ACT()",
  "error BALANCE(uint256,uint256)",
  "error ChipError()",
  "error ChipForbidden()",
  "error PLAYER(address,address)",
  "error STAGE(uint8,uint8)",
  "event Approval(address indexed,address indexed,uint256)",
  "event Bet(uint8 indexed,uint8,uint256,uint256)",
  "event Initialized(uint8)",
  "event OwnershipTransferred(address indexed,address indexed)",
  "event Transfer(address indexed,address indexed,uint256)",
  "function TABLE_TIMEOUT() view returns (uint32)",
  "function activePlayerCounts() view returns (uint8)",
  "function allinBets()",
  "function allowance(address,address) view returns (uint256)",
  "function approve(address,uint256) returns (bool)",
  "function balanceOf(address) view returns (uint256)",
  "function bets(address) view returns (uint256)",
  "function callBets()",
  "function cashOut()",
  "function checkBets()",
  "function claimPots(uint8) returns (uint256)",
  "function communityCards() view returns (tuple(uint8,uint8)[])",
  "function cutCards()",
  "function decimals() view returns (uint8)",
  "function decreaseAllowance(address,uint256) returns (bool)",
  "function foldBets()",
  "function forceNewGame()",
  "function forceStopGame()",
  "function game() view returns (tuple(uint8,uint256,uint256,uint8,uint32))",
  "function getBigBlind() view returns (address, uint256)",
  "function getSmallBlind() view returns (address, uint256)",
  "function holeCards(uint8,bytes) view returns (tuple(uint8,uint8)[])",
  "function increaseAllowance(address,uint256) returns (bool)",
  "function info() view returns (tuple(uint32,string,address,uint8,uint8,uint8,uint256))",
  "function isPlaying() view returns (bool)",
  "function message() view returns (string)",
  "function name() view returns (string)",
  "function newTable(tuple(address,string)[]) payable",
  "function owner() view returns (address)",
  "function playerCounts() view returns (uint8)",
  "function position(uint8) view returns (tuple(uint8,tuple(address,string),uint256,uint256,uint32))",
  "function positionStatus(uint8) view returns (uint8)",
  "function pots() view returns (tuple(uint256,uint8[])[])",
  "function raiseBets(uint256)",
  "function renounceOwnership()",
  "function setup(uint32,string,uint8,uint256,uint256,uint256,uint256,address,bytes[])",
  "function showCards()",
  "function symbol() view returns (string)",
  "function timer() view returns (tuple(uint32,uint32,uint32,uint32))",
  "function totalPots() view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  "function transfer(address,uint256) returns (bool)",
  "function transferFrom(address,address,uint256) returns (bool)",
  "function transferOwnership(address)",
  "function winner(uint8) view returns (uint8[], uint8, uint64)",
] as const;

export class DemoTable__factory {
  static readonly abi = _abi;
  static createInterface(): DemoTableInterface {
    return new Interface(_abi) as DemoTableInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DemoTable {
    return new Contract(address, _abi, runner) as unknown as DemoTable;
  }
}
