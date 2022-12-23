/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js';
import * as beet from '@metaplex-foundation/beet';
import * as beetSolana from '@metaplex-foundation/beet-solana';
/**
 * This type is used to derive the {@link DelegateState} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link DelegateState} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type DelegateStateRecord = {
  Transfer: { fields: [web3.PublicKey] };
};

/**
 * Union type respresenting the DelegateState data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isDelegateState*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type DelegateState = beet.DataEnumKeyAsKind<DelegateStateRecord>;

export const isDelegateStateTransfer = (
  x: DelegateState,
): x is DelegateState & { __kind: 'Transfer' } => x.__kind === 'Transfer';

/**
 * @category userTypes
 * @category generated
 */
export const delegateStateBeet = beet.dataEnum<DelegateStateRecord>([
  [
    'Transfer',
    new beet.BeetArgsStruct<DelegateStateRecord['Transfer']>(
      [['fields', beet.fixedSizeTuple([beetSolana.publicKey])]],
      'DelegateStateRecord["Transfer"]',
    ),
  ],
]) as beet.FixableBeet<DelegateState, DelegateState>;
