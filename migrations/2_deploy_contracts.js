const ConvertLib = artifacts.require("./ConvertLib.sol");
const MetaCoin = artifacts.require("./MetaCoin.sol");
const ProofOfExistence1 = artifacts.require('./ProofOfExistence1');

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(ProofOfExistence1);
};
