// @ts-check
'use strict';
const path = require('path');

const localDeployDir = path.join(__dirname, 'test-programs');
const { LOCALHOST, tmpLedgerDir } = require('@miraplex/amman');

function localDeployPath(programName) {
  return path.join(localDeployDir, `${programName}.so`);
}

const programs = {
  metadata: {
    label: 'Metadata',
    programId: 'Meta88XpDHcSJZDFiHop6c9sXaufkZX5depkZyrYBWv',
    deployPath: localDeployPath('mpl_token_metadata'),
  },
  token_sale: {
    label: 'Fixed Price Token Sale',
    programId: 'SaLeTjyUa5wXHnGuewUSyJ5JWZaHwz3TxqUntCE9czo',
    deployPath: localDeployPath('mpl_fixed_price_sale'),
  },
  candy_machine: {
    label: 'Candy Machine',
    programId: 'CandyREq6quLbyaDQ3z8aHp5yTFHoinYMaG2QuPD3333',
    deployPath: localDeployPath('mpl_candy_machine'),
  },
  hydra: {
    label: 'Hydra',
    programId: 'hyDQ4Nz1eYyegS6JfenyKwKzYxRsCWCriYSAjtzP4Vg',
    deployPath: localDeployPath('mpl_hydra'),
  },
  candy_machine_core: {
    label: 'Candy Machine Core',
    programId: 'CMv3YQQ7nbhFUjArAcGuRcDa6avoYN1a72HRZMvJ6WnU',
    deployPath: localDeployPath('mpl_candy_machine_core'),
  },
  token_auth_rules: {
    label: 'Token Auth Rules',
    programId: 'AuthxYNhPnnrGBo1wdzeUdukrsFpHvR42wghx8ZPNEo4',
    deployPath: localDeployPath('mpl_token_auth_rules'),
  },
};

const validator = {
  killRunningValidators: true,
  programs,
  commitment: 'singleGossip',
  resetLedger: true,
  verifyFees: false,
  jsonRpcUrl: LOCALHOST,
  websocketUrl: '',
  ledgerDir: tmpLedgerDir(),
};

module.exports = {
  programs,
  validator,
  relay: {
    enabled: true,
    killRunningRelay: true,
  },
};
