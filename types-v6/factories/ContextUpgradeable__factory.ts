/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ContextUpgradeable,
  ContextUpgradeableInterface,
} from "../ContextUpgradeable";

const _abi = ["event Initialized(uint8)"] as const;

export class ContextUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): ContextUpgradeableInterface {
    return new Interface(_abi) as ContextUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ContextUpgradeable {
    return new Contract(address, _abi, runner) as unknown as ContextUpgradeable;
  }
}
