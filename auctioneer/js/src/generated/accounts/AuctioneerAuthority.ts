/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@miraplex/beet';
import * as web3 from '@solarti/web3.js';

/**
 * Arguments used to create {@link AuctioneerAuthority}
 * @category Accounts
 * @category generated
 */
export type AuctioneerAuthorityArgs = {
  bump: number;
};

const auctioneerAuthorityDiscriminator = [228, 74, 255, 245, 96, 83, 197, 12];
/**
 * Holds the data for the {@link AuctioneerAuthority} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class AuctioneerAuthority implements AuctioneerAuthorityArgs {
  private constructor(readonly bump: number) {}

  /**
   * Creates a {@link AuctioneerAuthority} instance from the provided args.
   */
  static fromArgs(args: AuctioneerAuthorityArgs) {
    return new AuctioneerAuthority(args.bump);
  }

  /**
   * Deserializes the {@link AuctioneerAuthority} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [AuctioneerAuthority, number] {
    return AuctioneerAuthority.deserialize(accountInfo.data, offset);
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link AuctioneerAuthority} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
  ): Promise<AuctioneerAuthority> {
    const accountInfo = await connection.getAccountInfo(address);
    if (accountInfo == null) {
      throw new Error(`Unable to find AuctioneerAuthority account at ${address}`);
    }
    return AuctioneerAuthority.fromAccountInfo(accountInfo, 0)[0];
  }

  /**
   * Deserializes the {@link AuctioneerAuthority} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [AuctioneerAuthority, number] {
    return auctioneerAuthorityBeet.deserialize(buf, offset);
  }

  /**
   * Serializes the {@link AuctioneerAuthority} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return auctioneerAuthorityBeet.serialize({
      accountDiscriminator: auctioneerAuthorityDiscriminator,
      ...this,
    });
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link AuctioneerAuthority}
   */
  static get byteSize() {
    return auctioneerAuthorityBeet.byteSize;
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link AuctioneerAuthority} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(AuctioneerAuthority.byteSize, commitment);
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link AuctioneerAuthority} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === AuctioneerAuthority.byteSize;
  }

  /**
   * Returns a readable version of {@link AuctioneerAuthority} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      bump: this.bump,
    };
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const auctioneerAuthorityBeet = new beet.BeetStruct<
  AuctioneerAuthority,
  AuctioneerAuthorityArgs & {
    accountDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
  ],
  AuctioneerAuthority.fromArgs,
  'AuctioneerAuthority',
);
