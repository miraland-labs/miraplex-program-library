/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import {
  UpdateMetadataAccountArgs,
  updateMetadataAccountArgsBeet,
} from '../types/UpdateMetadataAccountArgs';

/**
 * @category Instructions
 * @category UpdateMetadataAccount
 * @category generated
 */
export type UpdateMetadataAccountInstructionArgs = {
  updateMetadataAccountArgs: UpdateMetadataAccountArgs;
};
/**
 * @category Instructions
 * @category UpdateMetadataAccount
 * @category generated
 */
export const UpdateMetadataAccountStruct = new beet.FixableBeetArgsStruct<
  UpdateMetadataAccountInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['updateMetadataAccountArgs', updateMetadataAccountArgsBeet],
  ],
  'UpdateMetadataAccountInstructionArgs',
);
/**
 * Accounts required by the _UpdateMetadataAccount_ instruction
 *
 * @property [_writable_] metadata Metadata account
 * @property [**signer**] updateAuthority Update authority key
 * @category Instructions
 * @category UpdateMetadataAccount
 * @category generated
 */
export type UpdateMetadataAccountInstructionAccounts = {
  metadata: web3.PublicKey;
  updateAuthority: web3.PublicKey;
};

export const updateMetadataAccountInstructionDiscriminator = 1;

/**
 * Creates a _UpdateMetadataAccount_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateMetadataAccount
 * @category generated
 */
export function createUpdateMetadataAccountInstruction(
  accounts: UpdateMetadataAccountInstructionAccounts,
  args: UpdateMetadataAccountInstructionArgs,
  programId = new web3.PublicKey('Meta88XpDHcSJZDFiHop6c9sXaufkZX5depkZyrYBWv'),
) {
  const [data] = UpdateMetadataAccountStruct.serialize({
    instructionDiscriminator: updateMetadataAccountInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.updateAuthority,
      isWritable: false,
      isSigner: true,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
