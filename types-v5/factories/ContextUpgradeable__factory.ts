/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ContextUpgradeable,
  ContextUpgradeableInterface,
} from "../ContextUpgradeable";

const _abi = [
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
] as const;

export class ContextUpgradeable__factory {
  static readonly abi = _abi;
  static createInterface(): ContextUpgradeableInterface {
    return new utils.Interface(_abi) as ContextUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ContextUpgradeable {
    return new Contract(address, _abi, signerOrProvider) as ContextUpgradeable;
  }
}
