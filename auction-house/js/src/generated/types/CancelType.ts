/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@miraplex/beet';
/**
 * @category enums
 * @category generated
 */
export enum CancelType {
  Cancel,
  AuctioneerCancel,
}

/**
 * @category userTypes
 * @category generated
 */
export const cancelTypeBeet = beet.fixedScalarEnum(CancelType) as beet.FixedSizeBeet<
  CancelType,
  CancelType
>;
