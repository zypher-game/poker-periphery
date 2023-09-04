/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  OwnableUpgradeable,
  OwnableUpgradeableInterface,
} from "../OwnableUpgradeable";

const _abi = [
  "event Initialized(uint8)",
  "event OwnershipTransferred(address indexed,address indexed)",
  "function owner() view returns (address)",
  "function renounceOwnership()",
  "function transferOwnership(address)",
] as const;

export class OwnableUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): OwnableUpgradeableInterface {
    return new utils.Interface(_abi) as OwnableUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OwnableUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as OwnableUpgradeable;
  }
}
