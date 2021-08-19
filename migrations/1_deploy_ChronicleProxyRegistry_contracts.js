const ChronicleProxyRegistry = artifacts.require("./ChronicleProxyRegistry.sol");

module.exports = async function (deployer, _network, _addresses) {
  await deployer.deploy(ChronicleProxyRegistry, {gas: 5000000});
};
