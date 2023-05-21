/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solarti/solarti-token';
import * as beet from '@miraplex/beet';
import * as web3 from '@solarti/web3.js';

/**
 * @category Instructions
 * @category CreateEntangledPair
 * @category generated
 */
export type CreateEntangledPairInstructionArgs = {
  bump: number;
  reverseBump: number;
  tokenAEscrowBump: number;
  tokenBEscrowBump: number;
  price: beet.bignum;
  paysEveryTime: boolean;
};
/**
 * @category Instructions
 * @category CreateEntangledPair
 * @category generated
 */
const createEntangledPairStruct = new beet.BeetArgsStruct<
  CreateEntangledPairInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */;
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['bump', beet.u8],
    ['reverseBump', beet.u8],
    ['tokenAEscrowBump', beet.u8],
    ['tokenBEscrowBump', beet.u8],
    ['price', beet.u64],
    ['paysEveryTime', beet.bool],
  ],
  'CreateEntangledPairInstructionArgs',
);
/**
 * Accounts required by the _createEntangledPair_ instruction
 *
 * @property [] treasuryMint
 * @property [_writable_, **signer**] payer
 * @property [**signer**] transferAuthority
 * @property [] authority
 * @property [] mintA
 * @property [] metadataA
 * @property [] editionA
 * @property [] mintB
 * @property [] metadataB
 * @property [] editionB
 * @property [_writable_] tokenB
 * @property [_writable_] tokenAEscrow
 * @property [_writable_] tokenBEscrow
 * @property [_writable_] entangledPair
 * @property [_writable_] reverseEntangledPair
 * @category Instructions
 * @category CreateEntangledPair
 * @category generated
 */
export type CreateEntangledPairInstructionAccounts = {
  treasuryMint: web3.PublicKey;
  payer: web3.PublicKey;
  transferAuthority: web3.PublicKey;
  authority: web3.PublicKey;
  mintA: web3.PublicKey;
  metadataA: web3.PublicKey;
  editionA: web3.PublicKey;
  mintB: web3.PublicKey;
  metadataB: web3.PublicKey;
  editionB: web3.PublicKey;
  tokenB: web3.PublicKey;
  tokenAEscrow: web3.PublicKey;
  tokenBEscrow: web3.PublicKey;
  entangledPair: web3.PublicKey;
  reverseEntangledPair: web3.PublicKey;
};

const createEntangledPairInstructionDiscriminator = [166, 106, 32, 45, 156, 210, 209, 240];

/**
 * Creates a _CreateEntangledPair_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateEntangledPair
 * @category generated
 */
export function createCreateEntangledPairInstruction(
  accounts: CreateEntangledPairInstructionAccounts,
  args: CreateEntangledPairInstructionArgs,
) {
  const {
    treasuryMint,
    payer,
    transferAuthority,
    authority,
    mintA,
    metadataA,
    editionA,
    mintB,
    metadataB,
    editionB,
    tokenB,
    tokenAEscrow,
    tokenBEscrow,
    entangledPair,
    reverseEntangledPair,
  } = accounts;

  const [data] = createEntangledPairStruct.serialize({
    instructionDiscriminator: createEntangledPairInstructionDiscriminator,
    ...args,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: treasuryMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: transferAuthority,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: authority,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: mintA,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadataA,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: editionA,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: mintB,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: metadataB,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: editionB,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: tokenB,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenAEscrow,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: tokenBEscrow,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: entangledPair,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: reverseEntangledPair,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('qntmGodpGkrM42mN68VCZHXnKqDCT8rdY23wFcXCLPd'),
    keys,
    data,
  });
  return ix;
}
