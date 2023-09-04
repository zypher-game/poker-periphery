/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IBeaconUpgradeable,
  IBeaconUpgradeableInterface,
} from "../IBeaconUpgradeable";

const _abi = [
  {
    inputs: [],
    name: "implementation",
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
] as const;

export class IBeaconUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): IBeaconUpgradeableInterface {
    return new Interface(_abi) as IBeaconUpgradeableInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IBeaconUpgradeable {
    return new Contract(address, _abi, runner) as unknown as IBeaconUpgradeable;
  }
}
