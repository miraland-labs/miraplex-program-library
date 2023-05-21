/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solarti/web3.js'
import * as beetMiraland from '@miraplex/beet-miraland'
import * as beet from '@miraplex/beet'
import { ConfigData, configDataBeet } from '../types/ConfigData'

/**
 * Arguments used to create {@link Config}
 * @category Accounts
 * @category generated
 */
export type ConfigArgs = {
  authority: web3.PublicKey
  data: ConfigData
}

export const configDiscriminator = [155, 12, 170, 224, 30, 250, 204, 130]
/**
 * Holds the data for the {@link Config} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class Config implements ConfigArgs {
  private constructor(
    readonly authority: web3.PublicKey,
    readonly data: ConfigData
  ) {}

  /**
   * Creates a {@link Config} instance from the provided args.
   */
  static fromArgs(args: ConfigArgs) {
    return new Config(args.authority, args.data)
  }

  /**
   * Deserializes the {@link Config} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0
  ): [Config, number] {
    return Config.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link Config} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig
  ): Promise<Config> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find Config account at ${address}`)
    }
    return Config.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'rdrppvBxnXBwBXVLTsoGuBZiZfhJu3JtGLUfMaJpgjQ'
    )
  ) {
    return beetMiraland.GpaBuilder.fromStruct(programId, configBeet)
  }

  /**
   * Deserializes the {@link Config} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [Config, number] {
    return configBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link Config} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return configBeet.serialize({
      accountDiscriminator: configDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link Config} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: ConfigArgs) {
    const instance = Config.fromArgs(args)
    return configBeet.toFixedFromValue({
      accountDiscriminator: configDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link Config} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: ConfigArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      Config.byteSize(args),
      commitment
    )
  }

  /**
   * Returns a readable version of {@link Config} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      authority: this.authority.toBase58(),
      data: this.data,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const configBeet = new beet.FixableBeetStruct<
  Config,
  ConfigArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['authority', beetMiraland.publicKey],
    ['data', configDataBeet],
  ],
  Config.fromArgs,
  'Config'
)
