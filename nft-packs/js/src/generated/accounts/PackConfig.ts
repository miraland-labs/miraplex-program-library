/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@miraplex/beet';
import * as web3 from '@solarti/web3.js';
import * as beetMiraland from '@miraplex/beet-miraland';
import { AccountType, accountTypeBeet } from '../types/AccountType';
import { CleanUpActions, cleanUpActionsBeet } from '../types/CleanUpActions';

/**
 * Arguments used to create {@link PackConfig}
 * @category Accounts
 * @category generated
 */
export type PackConfigArgs = {
  accountType: AccountType;
  weights: [number, number, number][];
  actionToDo: CleanUpActions;
};
/**
 * Holds the data for the {@link PackConfig} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class PackConfig implements PackConfigArgs {
  private constructor(
    readonly accountType: AccountType,
    readonly weights: [number, number, number][],
    readonly actionToDo: CleanUpActions,
  ) {}

  /**
   * Creates a {@link PackConfig} instance from the provided args.
   */
  static fromArgs(args: PackConfigArgs) {
    return new PackConfig(args.accountType, args.weights, args.actionToDo);
  }

  /**
   * Deserializes the {@link PackConfig} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(accountInfo: web3.AccountInfo<Buffer>, offset = 0): [PackConfig, number] {
    return PackConfig.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link PackConfig} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<PackConfig> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find PackConfig account at ${address}`);
    }
    return PackConfig.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey('packFeFNZzMfD9aVWL7QbGz1WcU7R9zpf6pvNsw2BLu'),
  ) {
    return beetMiraland.GpaBuilder.fromStruct(programId, packConfigBeet);
  }

  /**
   * Deserializes the {@link PackConfig} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [PackConfig, number] {
    return packConfigBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link PackConfig} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return packConfigBeet.serialize(this);
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link PackConfig} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: PackConfigArgs) {
    const instance = PackConfig.fromArgs(args);
    return packConfigBeet.toFixedFromValue(instance).byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link PackConfig} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: PackConfigArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(PackConfig.byteSize(args), commitment);
  }

  /**
   * Returns a readable version of {@link PackConfig} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      accountType: 'AccountType.' + AccountType[this.accountType],
      weights: this.weights,
      actionToDo: this.actionToDo.__kind,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const packConfigBeet = new beet.FixableBeetStruct<PackConfig, PackConfigArgs>(
  [
    ['accountType', accountTypeBeet],
    ['weights', beet.array(beet.fixedSizeTuple([beet.u32, beet.u32, beet.u32]))],
    ['actionToDo', cleanUpActionsBeet],
  ],
  PackConfig.fromArgs,
  'PackConfig',
);
