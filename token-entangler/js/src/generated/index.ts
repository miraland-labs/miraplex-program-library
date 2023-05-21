import { PublicKey } from '@solarti/web3.js';
export * from './accounts';
export * from './errors';
export * from './instructions';

/**
 * Program address
 *
 * @category constants
 * @category generated
 */
export const PROGRAM_ADDRESS = 'qntmGodpGkrM42mN68VCZHXnKqDCT8rdY23wFcXCLPd';

/**
 * Program public key
 *
 * @category constants
 * @category generated
 */
export const PROGRAM_ID = new PublicKey(PROGRAM_ADDRESS);
