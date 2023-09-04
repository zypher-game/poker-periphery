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
  "function bestHand(tuple(uint8,uint8)[],tuple(uint8,uint8)[]) pure returns (uint8, uint64)",
  "function computeNextPlayer(tuple(uint8,uint8,uint32,uint256,uint256,uint16,uint16,uint16,uint16,uint16,uint8),tuple(uint32,uint32,uint32,uint32),uint8,uint8,uint32) view returns (tuple(uint8,uint8,uint32,uint256,uint256,uint16,uint16,uint16,uint16,uint16,uint8))",
  "function computePotWinners(tuple(uint8,uint64,uint256,uint8,uint16,uint16)[],uint8,tuple(uint8,uint8)[],tuple(uint8,uint8)[],uint256[],uint256[],uint16) view returns (tuple(uint8,uint64,uint256,uint8,uint16,uint16)[])",
  "function computePots(uint256[],uint256[],uint16) view returns (tuple(uint256,uint8[])[])",
  "function computeSortedAllinAmounts(uint256[],uint256) pure returns (uint256[])",
  "function createSignMessage(string,uint64) view returns (string)",
  "function getHandRanking(tuple(uint8,uint8)[5]) pure returns (uint8, uint64)",
  "function parseSigner(bytes,string) pure returns (address)",
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
