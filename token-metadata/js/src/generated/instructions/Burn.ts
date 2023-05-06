/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { BurnArgs, burnArgsBeet } from '../types/BurnArgs';

/**
 * @category Instructions
 * @category Burn
 * @category generated
 */
export type BurnInstructionArgs = {
  burnArgs: BurnArgs;
};
/**
 * @category Instructions
 * @category Burn
 * @category generated
 */
export const BurnStruct = new beet.FixableBeetArgsStruct<
  BurnInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['burnArgs', burnArgsBeet],
  ],
  'BurnInstructionArgs',
);
/**
 * Accounts required by the _Burn_ instruction
 *
 * @property [_writable_] metadata Metadata (pda of ['metadata', program id, mint id])
 * @property [_writable_, **signer**] owner Asset owner
 * @property [_writable_] mint Mint of token asset
 * @property [_writable_] tokenAccount Token account to close
 * @property [_writable_] masterEditionAccount MasterEdition of the asset
 * @property [] splTokenProgram SPL Token Program
 * @property [_writable_] collectionMetadata (optional) Metadata of the Collection
 * @property [] authorizationRules (optional) Token Authorization Rules account
 * @property [] authorizationRulesProgram (optional) Token Authorization Rules Program
 * @category Instructions
 * @category Burn
 * @category generated
 */
export type BurnInstructionAccounts = {
  metadata: web3.PublicKey;
  owner: web3.PublicKey;
  mint: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  masterEditionAccount: web3.PublicKey;
  splTokenProgram: web3.PublicKey;
  collectionMetadata?: web3.PublicKey;
  authorizationRules?: web3.PublicKey;
  authorizationRulesProgram?: web3.PublicKey;
};

export const burnInstructionDiscriminator = 41;

/**
 * Creates a _Burn_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Burn
 * @category generated
 */
export function createBurnInstruction(
  accounts: BurnInstructionAccounts,
  args: BurnInstructionArgs,
  programId = new web3.PublicKey('Meta88XpDHcSJZDFiHop6c9sXaufkZX5depkZyrYBWv'),
) {
  const [data] = BurnStruct.serialize({
    instructionDiscriminator: burnInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.owner,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.mint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEditionAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.splTokenProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.collectionMetadata ?? programId,
      isWritable: accounts.collectionMetadata != null,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRules ?? programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authorizationRulesProgram ?? programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
