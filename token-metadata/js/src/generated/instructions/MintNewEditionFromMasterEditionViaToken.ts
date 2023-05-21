/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as solartiToken from '@solarti/solarti-token';
import * as beet from '@miraplex/beet';
import * as web3 from '@solarti/web3.js';
import {
  MintNewEditionFromMasterEditionViaTokenArgs,
  mintNewEditionFromMasterEditionViaTokenArgsBeet,
} from '../types/MintNewEditionFromMasterEditionViaTokenArgs';

/**
 * @category Instructions
 * @category MintNewEditionFromMasterEditionViaToken
 * @category generated
 */
export type MintNewEditionFromMasterEditionViaTokenInstructionArgs = {
  mintNewEditionFromMasterEditionViaTokenArgs: MintNewEditionFromMasterEditionViaTokenArgs;
};
/**
 * @category Instructions
 * @category MintNewEditionFromMasterEditionViaToken
 * @category generated
 */
export const MintNewEditionFromMasterEditionViaTokenStruct = new beet.BeetArgsStruct<
  MintNewEditionFromMasterEditionViaTokenInstructionArgs & {
    instructionDiscriminator: number;
  }
>(
  [
    ['instructionDiscriminator', beet.u8],
    [
      'mintNewEditionFromMasterEditionViaTokenArgs',
      mintNewEditionFromMasterEditionViaTokenArgsBeet,
    ],
  ],
  'MintNewEditionFromMasterEditionViaTokenInstructionArgs',
);
/**
 * Accounts required by the _MintNewEditionFromMasterEditionViaToken_ instruction
 *
 * @property [_writable_] newMetadata New Metadata key (pda of ['metadata', program id, mint id])
 * @property [_writable_] newEdition New Edition (pda of ['metadata', program id, mint id, 'edition'])
 * @property [_writable_] masterEdition Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])
 * @property [_writable_] newMint Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY
 * @property [_writable_] editionMarkPda Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).
 * @property [**signer**] newMintAuthority Mint authority of new mint
 * @property [_writable_, **signer**] payer payer
 * @property [**signer**] tokenAccountOwner owner of token account containing master token (#8)
 * @property [] tokenAccount token account containing token from master metadata mint
 * @property [] newMetadataUpdateAuthority Update authority info for new metadata
 * @property [] metadata Master record metadata account
 * @category Instructions
 * @category MintNewEditionFromMasterEditionViaToken
 * @category generated
 */
export type MintNewEditionFromMasterEditionViaTokenInstructionAccounts = {
  newMetadata: web3.PublicKey;
  newEdition: web3.PublicKey;
  masterEdition: web3.PublicKey;
  newMint: web3.PublicKey;
  editionMarkPda: web3.PublicKey;
  newMintAuthority: web3.PublicKey;
  payer: web3.PublicKey;
  tokenAccountOwner: web3.PublicKey;
  tokenAccount: web3.PublicKey;
  newMetadataUpdateAuthority: web3.PublicKey;
  metadata: web3.PublicKey;
  tokenProgram?: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  rent?: web3.PublicKey;
};

export const mintNewEditionFromMasterEditionViaTokenInstructionDiscriminator = 11;

/**
 * Creates a _MintNewEditionFromMasterEditionViaToken_ instruction.
 *
 * Optional accounts that are not provided will be omitted from the accounts
 * array passed with the instruction.
 * An optional account that is set cannot follow an optional account that is unset.
 * Otherwise an Error is raised.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category MintNewEditionFromMasterEditionViaToken
 * @category generated
 */
export function createMintNewEditionFromMasterEditionViaTokenInstruction(
  accounts: MintNewEditionFromMasterEditionViaTokenInstructionAccounts,
  args: MintNewEditionFromMasterEditionViaTokenInstructionArgs,
  programId = new web3.PublicKey('Meta88XpDHcSJZDFiHop6c9sXaufkZX5depkZyrYBWv'),
) {
  const [data] = MintNewEditionFromMasterEditionViaTokenStruct.serialize({
    instructionDiscriminator: mintNewEditionFromMasterEditionViaTokenInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.newMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.newEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.masterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.newMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.editionMarkPda,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.newMintAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenAccountOwner,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.tokenAccount,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.newMetadataUpdateAuthority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.metadata,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? solartiToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.rent != null) {
    keys.push({
      pubkey: accounts.rent,
      isWritable: false,
      isSigner: false,
    });
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
