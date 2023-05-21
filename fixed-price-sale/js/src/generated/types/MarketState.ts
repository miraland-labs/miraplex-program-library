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
export enum MarketState {
  Uninitialized,
  Created,
  Suspended,
  Active,
  Ended,
}

/**
 * @category userTypes
 * @category generated
 */
export const marketStateBeet = beet.fixedScalarEnum(MarketState) as beet.FixedSizeBeet<
  MarketState,
  MarketState
>;
