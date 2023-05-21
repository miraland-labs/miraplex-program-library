/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as solartiToken from '@solarti/solarti-token'
import * as beet from '@miraplex/beet'
import * as web3 from '@solarti/web3.js'
import * as beetMiraland from '@miraplex/beet-miraland'

/**
 * @category Instructions
 * @category ClaimCandy
 * @category generated
 */
export type ClaimCandyInstructionArgs = {
  walletBump: number
  claimBump: number
  index: beet.bignum
  amount: beet.bignum
  claimantSecret: web3.PublicKey
  proof: number[] /* size: 32 */[]
}
/**
 * @category Instructions
 * @category ClaimCandy
 * @category generated
 */
export const claimCandyStruct = new beet.FixableBeetArgsStruct<
  ClaimCandyInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['walletBump', beet.u8],
    ['claimBump', beet.u8],
    ['index', beet.u64],
    ['amount', beet.u64],
    ['claimantSecret', beetMiraland.publicKey],
    ['proof', beet.array(beet.uniformFixedSizeArray(beet.u8, 32))],
  ],
  'ClaimCandyInstructionArgs'
)
/**
 * Accounts required by the _claimCandy_ instruction
 *
 * @property [_writable_] distributor
 * @property [_writable_] distributorWallet
 * @property [_writable_] claimCount
 * @property [**signer**] temporal
 * @property [**signer**] payer
 * @property [] candyMachineConfig
 * @property [_writable_] candyMachine
 * @property [_writable_] candyMachineWallet
 * @property [_writable_] candyMachineMint
 * @property [_writable_] candyMachineMetadata
 * @property [_writable_] candyMachineMasterEdition
 * @property [] tokenMetadataProgram
 * @property [] candyMachineProgram
 * @property [] clock
 * @category Instructions
 * @category ClaimCandy
 * @category generated
 */
export type ClaimCandyInstructionAccounts = {
  distributor: web3.PublicKey
  distributorWallet: web3.PublicKey
  claimCount: web3.PublicKey
  temporal: web3.PublicKey
  payer: web3.PublicKey
  candyMachineConfig: web3.PublicKey
  candyMachine: web3.PublicKey
  candyMachineWallet: web3.PublicKey
  candyMachineMint: web3.PublicKey
  candyMachineMetadata: web3.PublicKey
  candyMachineMasterEdition: web3.PublicKey
  systemProgram?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  tokenMetadataProgram: web3.PublicKey
  candyMachineProgram: web3.PublicKey
  rent?: web3.PublicKey
  clock: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const claimCandyInstructionDiscriminator = [
  87, 176, 177, 90, 136, 95, 83, 242,
]

/**
 * Creates a _ClaimCandy_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ClaimCandy
 * @category generated
 */
export function createClaimCandyInstruction(
  accounts: ClaimCandyInstructionAccounts,
  args: ClaimCandyInstructionArgs,
  programId = new web3.PublicKey('rdrppvBxnXBwBXVLTsoGuBZiZfhJu3JtGLUfMaJpgjQ')
) {
  const [data] = claimCandyStruct.serialize({
    instructionDiscriminator: claimCandyInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.distributor,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.distributorWallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.claimCount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.temporal,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.payer,
      isWritable: false,
      isSigner: true,
    },
    {
      pubkey: accounts.candyMachineConfig,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.candyMachine,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.candyMachineWallet,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.candyMachineMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.candyMachineMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.candyMachineMasterEdition,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? solartiToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenMetadataProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.candyMachineProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.clock,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
