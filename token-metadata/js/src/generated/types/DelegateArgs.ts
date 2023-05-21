/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@miraplex/beet';
import { AuthorizationData, authorizationDataBeet } from './AuthorizationData';
/**
 * This type is used to derive the {@link DelegateArgs} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link DelegateArgs} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type DelegateArgsRecord = {
  CollectionV1: { authorizationData: beet.COption<AuthorizationData> };
  SaleV1: { amount: beet.bignum; authorizationData: beet.COption<AuthorizationData> };
  TransferV1: { amount: beet.bignum; authorizationData: beet.COption<AuthorizationData> };
  UpdateV1: { authorizationData: beet.COption<AuthorizationData> };
  UtilityV1: { amount: beet.bignum; authorizationData: beet.COption<AuthorizationData> };
  StakingV1: { amount: beet.bignum; authorizationData: beet.COption<AuthorizationData> };
  StandardV1: { amount: beet.bignum };
};

/**
 * Union type respresenting the DelegateArgs data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isDelegateArgs*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type DelegateArgs = beet.DataEnumKeyAsKind<DelegateArgsRecord>;

export const isDelegateArgsCollectionV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'CollectionV1' } => x.__kind === 'CollectionV1';
export const isDelegateArgsSaleV1 = (x: DelegateArgs): x is DelegateArgs & { __kind: 'SaleV1' } =>
  x.__kind === 'SaleV1';
export const isDelegateArgsTransferV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'TransferV1' } => x.__kind === 'TransferV1';
export const isDelegateArgsUpdateV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'UpdateV1' } => x.__kind === 'UpdateV1';
export const isDelegateArgsUtilityV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'UtilityV1' } => x.__kind === 'UtilityV1';
export const isDelegateArgsStakingV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'StakingV1' } => x.__kind === 'StakingV1';
export const isDelegateArgsStandardV1 = (
  x: DelegateArgs,
): x is DelegateArgs & { __kind: 'StandardV1' } => x.__kind === 'StandardV1';

/**
 * @category userTypes
 * @category generated
 */
export const delegateArgsBeet = beet.dataEnum<DelegateArgsRecord>([
  [
    'CollectionV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['CollectionV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["CollectionV1"]',
    ),
  ],

  [
    'SaleV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['SaleV1']>(
      [
        ['amount', beet.u64],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["SaleV1"]',
    ),
  ],

  [
    'TransferV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['TransferV1']>(
      [
        ['amount', beet.u64],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["TransferV1"]',
    ),
  ],

  [
    'UpdateV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['UpdateV1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'DelegateArgsRecord["UpdateV1"]',
    ),
  ],

  [
    'UtilityV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['UtilityV1']>(
      [
        ['amount', beet.u64],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["UtilityV1"]',
    ),
  ],

  [
    'StakingV1',
    new beet.FixableBeetArgsStruct<DelegateArgsRecord['StakingV1']>(
      [
        ['amount', beet.u64],
        ['authorizationData', beet.coption(authorizationDataBeet)],
      ],
      'DelegateArgsRecord["StakingV1"]',
    ),
  ],

  [
    'StandardV1',
    new beet.BeetArgsStruct<DelegateArgsRecord['StandardV1']>(
      [['amount', beet.u64]],
      'DelegateArgsRecord["StandardV1"]',
    ),
  ],
]) as beet.FixableBeet<DelegateArgs, DelegateArgs>;
