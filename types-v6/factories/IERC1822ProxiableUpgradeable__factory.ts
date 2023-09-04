/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IERC1822ProxiableUpgradeable,
  IERC1822ProxiableUpgradeableInterface,
} from "../IERC1822ProxiableUpgradeable";

const _abi = ["function proxiableUUID() view returns (bytes32)"] as const;

export class IERC1822ProxiableUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IERC1822ProxiableUpgradeableInterface {
    return new Interface(_abi) as IERC1822ProxiableUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IERC1822ProxiableUpgradeable {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IERC1822ProxiableUpgradeable;
  }
}
