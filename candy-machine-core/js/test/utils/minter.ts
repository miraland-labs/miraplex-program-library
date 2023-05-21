import { Connection, Keypair, PublicKey } from '@solarti/web3.js';
import { Test } from 'tape';
import { PayerTransactionHandler } from '@miraplex/amman-client';
import { CandyMachine } from '../../src';
import { BN } from 'bn.js';
import { keypairIdentity, Metaplex } from '@metaplex-solarti/js';
import { InitTransactions } from '../setup';

export async function drain(
  t: Test,
  candyMachine: PublicKey,
  payer: Keypair,
  handler: PayerTransactionHandler,
  connection: Connection,
): Promise<number[]> {
  const API = new InitTransactions();
  const candyMachineObject = await CandyMachine.fromAccountAddress(connection, candyMachine);
  const available =
    new BN(candyMachineObject.data.itemsAvailable).toNumber() -
    new BN(candyMachineObject.itemsRedeemed).toNumber();
  const indices: number[] = [];

  for (let i = 0; i < available; i++) {
    // minting
    const { tx: mintTransaction, mintAddress } = await API.mint(
      t,
      candyMachine,
      payer,
      handler,
      connection,
    );
    await mintTransaction.assertNone();

    const metaplex = Metaplex.make(connection).use(keypairIdentity(payer));
    const nft = await metaplex.nfts().findByMint({ mintAddress }).run();
    indices.push(parseInt(nft.name));
  }

  return indices;
}
