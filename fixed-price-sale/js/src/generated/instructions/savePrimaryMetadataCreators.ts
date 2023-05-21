/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@miraplex/beet';
import * as web3 from '@solarti/web3.js';
import { Creator, creatorBeet } from '../types/Creator';

/**
 * @category Instructions
 * @category SavePrimaryMetadataCreators
 * @category generated
 */
export type SavePrimaryMetadataCreatorsInstructionArgs = {
  primaryMetadataCreatorsBump: number;
  creators: Creator[];
};
/**
 * @category Instructions
 * @category SavePrimaryMetadataCreators
 * @category generated
 */
export const savePrimaryMetadataCreatorsStruct = new beet.FixableBeetArgsStruct<
  SavePrimaryMetadataCreatorsInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['primaryMetadataCreatorsBump', beet.u8],
    ['creators', beet.array(creatorBeet)],
  ],
  'SavePrimaryMetadataCreatorsInstructionArgs',
);
/**
 * Accounts required by the _savePrimaryMetadataCreators_ instruction
 *
 * @property [_writable_, **signer**] admin
 * @property [_writable_] metadata
 * @property [_writable_] primaryMetadataCreators
 * @category Instructions
 * @category SavePrimaryMetadataCreators
 * @category generated
 */
export type SavePrimaryMetadataCreatorsInstructionAccounts = {
  admin: web3.PublicKey;
  metadata: web3.PublicKey;
  primaryMetadataCreators: web3.PublicKey;
  systemProgram?: web3.PublicKey;
  anchorRemainingAccounts?: web3.AccountMeta[];
};

export const savePrimaryMetadataCreatorsInstructionDiscriminator = [
  66, 240, 213, 46, 185, 60, 192, 254,
];

/**
 * Creates a _SavePrimaryMetadataCreators_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category SavePrimaryMetadataCreators
 * @category generated
 */
export function createSavePrimaryMetadataCreatorsInstruction(
  accounts: SavePrimaryMetadataCreatorsInstructionAccounts,
  args: SavePrimaryMetadataCreatorsInstructionArgs,
  programId = new web3.PublicKey('SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo'),
) {
  const [data] = savePrimaryMetadataCreatorsStruct.serialize({
    instructionDiscriminator: savePrimaryMetadataCreatorsInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.admin,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.metadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.primaryMetadataCreators,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ];

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc);
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  });
  return ix;
}
