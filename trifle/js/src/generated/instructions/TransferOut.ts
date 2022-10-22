/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet';
import * as web3 from '@solana/web3.js';
import { TransferOutArgs, transferOutArgsBeet } from '../types/TransferOutArgs';

/**
 * @category Instructions
 * @category TransferOut
 * @category generated
 */
export type TransferOutInstructionArgs = {
  transferOutArgs: TransferOutArgs;
};
/**
 * @category Instructions
 * @category TransferOut
 * @category generated
 */
export const TransferOutStruct = new beet.FixableBeetArgsStruct<
  TransferOutInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    ['transferOutArgs', transferOutArgsBeet],
  ],
  'TransferOutInstructionArgs',
);
/**
 * Accounts required by the _TransferOut_ instruction
 *
 * @property [_writable_] trifleAccount The trifle account to use
 * @property [_writable_] constraintModel The constraint model to check against
 * @property [] escrowAccount The escrow account attached to the NFT
 * @property [_writable_] escrowTokenAccount The token account holding the NFT the escrow is attached to
 * @property [_writable_] escrowMint The mint of the NFT the escrow is attached to
 * @property [_writable_] escrowEdition (optional) The edition of the NFT the escrow is attached to
 * @property [_writable_, **signer**] payer Wallet paying for the transaction
 * @property [] trifleAuthority Trifle Authority - the account that can sign transactions for the trifle account
 * @property [] attributeMint The mint of the attribute
 * @property [_writable_] attributeSrcTokenAccount The token account the attribute is being transferred from
 * @property [_writable_] attributeDstTokenAccount The token account the attribute is being transferred to
 * @property [] attributeMetadata The metadata of the attribute
 * @property [] splAssociatedTokenAccount The associated token account program
 * @property [] splToken The spl token program
 * @property [] tokenMetadataProgram The token metadata program
 * @category Instructions
 * @category TransferOut
 * @category generated
 */
export type TransferOutInstructionAccounts = {
  trifleAccount: web3.PublicKey;
  constraintModel: web3.PublicKey;
  escrowAccount: web3.PublicKey;
  escrowTokenAccount: web3.PublicKey;
  escrowMint: web3.PublicKey;
  escrowEdition?: web3.PublicKey;
  payer: web3.PublicKey;
  trifleAuthority: web3.PublicKey;
  attributeMint: web3.PublicKey;
  attributeSrcTokenAccount: web3.PublicKey;
  attributeDstTokenAccount: web3.PublicKey;
  attributeMetadata: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  splAssociatedTokenAccount: web3.PublicKey;
  splToken: web3.PublicKey;
  rent?: web3.PublicKey;
  tokenMetadataProgram: web3.PublicKey;
};

export const transferOutInstructionDiscriminator = 3;

/**
 * Creates a _TransferOut_ instruction.
 *
 * Optional accounts that are not provided default to the program ID since
 * this was indicated in the IDL from which this instruction was generated.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category TransferOut
 * @category generated
 */
export function createTransferOutInstruction(
  accounts: TransferOutInstructionAccounts,
  args: TransferOutInstructionArgs,
  programId = new web3.PublicKey('6PLSD84fn6MVb3XdPYAiX33X8jgfCPXeqYUmfnYndU3X'),
) {
  const [data] = TransferOutStruct.serialize({
    instructionDiscriminator: transferOutInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.trifleAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.constraintModel,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowEdition ?? programId,
      isWritable: accounts.escrowEdition != null,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.trifleAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.attributeMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.attributeSrcTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.attributeDstTokenAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.attributeMetadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.splAssociatedTokenAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.splToken,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
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
