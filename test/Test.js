const ContractA = artifacts.require('ContractA');
const ContractB = artifacts.require('ContractB');

contract('', function (accounts) {
  let contractB;
  let contractA;

  before('', async function () {
    contractA = await ContractA.new();
    contractB = await ContractB.new();
  });

  it('', async function () {
    await contractA.emitEventAFromContractB(contractB.address);
  });
});
