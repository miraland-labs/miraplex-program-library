// @ts-check
const path = require('path');
const programDir = path.join(__dirname, '..', 'program');
const idlDir = path.join(__dirname, 'idl');
const sdkDir = path.join(__dirname, 'src', 'generated');
const binaryInstallDir = path.join(__dirname, '.crates');

const idlHook = (idl) => {
    const setCollectionDuringMintIx = idl.instructions.find(ix => ix.name === 'setCollectionDuringMint');
    const collectionMetadataAcc = setCollectionDuringMintIx.accounts.find(acc => acc.name === 'collectionMetadata');
    collectionMetadataAcc.isMut = true;
    return idl;
}

module.exports = {
    idlGenerator: 'anchor',
    programName: 'candy_machine',
    programId: 'CandyREq6quLbyaDQ3z8aHp5yTFHoinYMaG2QuPD3333',
    idlDir,
    idlHook,
    sdkDir,
    binaryInstallDir,
    programDir,
};
