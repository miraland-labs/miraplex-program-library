/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@miraplex/beet';
export type SeedsVec = {
  seeds: Uint8Array[];
};

/**
 * @category userTypes
 * @category generated
 */
export const seedsVecBeet = new beet.FixableBeetArgsStruct<SeedsVec>(
  [['seeds', beet.array(beet.bytes)]],
  'SeedsVec',
);
