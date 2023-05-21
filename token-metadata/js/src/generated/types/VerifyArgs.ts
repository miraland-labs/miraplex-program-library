/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@miraplex/beet';
import { AuthorizationData, authorizationDataBeet } from './AuthorizationData';
/**
 * This type is used to derive the {@link VerifyArgs} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link VerifyArgs} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type VerifyArgsRecord = {
  V1: { authorizationData: beet.COption<AuthorizationData> };
};

/**
 * Union type respresenting the VerifyArgs data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isVerifyArgs*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type VerifyArgs = beet.DataEnumKeyAsKind<VerifyArgsRecord>;

export const isVerifyArgsV1 = (x: VerifyArgs): x is VerifyArgs & { __kind: 'V1' } =>
  x.__kind === 'V1';

/**
 * @category userTypes
 * @category generated
 */
export const verifyArgsBeet = beet.dataEnum<VerifyArgsRecord>([
  [
    'V1',
    new beet.FixableBeetArgsStruct<VerifyArgsRecord['V1']>(
      [['authorizationData', beet.coption(authorizationDataBeet)]],
      'VerifyArgsRecord["V1"]',
    ),
  ],
]) as beet.FixableBeet<VerifyArgs, VerifyArgs>;
