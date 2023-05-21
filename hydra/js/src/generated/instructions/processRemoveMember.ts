/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@miraplex/beet';
import * as web3 from '@solarti/web3.js';

/**
 * @category Instructions
 * @category ProcessRemoveMember
 * @category generated
 */
export const processRemoveMemberStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */;
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ProcessRemoveMemberInstructionArgs',
);
/**
 * Accounts required by the _processRemoveMember_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [] member
 * @property [_writable_] fanout
 * @property [_writable_] membershipAccount
 * @property [_writable_] destination
 * @category Instructions
 * @category ProcessRemoveMember
 * @category generated
 */
export type ProcessRemoveMemberInstructionAccounts = {
  authority: web3.PublicKey;
  member: web3.PublicKey;
  fanout: web3.PublicKey;
  membershipAccount: web3.PublicKey;
  destination: web3.PublicKey;
};

export const processRemoveMemberInstructionDiscriminator = [9, 45, 36, 163, 245, 40, 150, 85];

/**
 * Creates a _ProcessRemoveMember_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ProcessRemoveMember
 * @category generated
 */
export function createProcessRemoveMemberInstruction(
  accounts: ProcessRemoveMemberInstructionAccounts,
) {
  const { authority, member, fanout, membershipAccount, destination } = accounts;

  const [data] = processRemoveMemberStruct.serialize({
    instructionDiscriminator: processRemoveMemberInstructionDiscriminator,
  });
  const keys: web3.AccountMeta[] = [
    {
      pubkey: authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: member,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: fanout,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: membershipAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: destination,
      isWritable: true,
      isSigner: false,
    },
  ];

  const ix = new web3.TransactionInstruction({
    programId: new web3.PublicKey('hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg'),
    keys,
    data,
  });
  return ix;
}
