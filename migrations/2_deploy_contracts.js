//var Auction = artifacts.require("Auction");

var abAuction = artifacts.require("abAuction");

module.exports = function(deployer){
//    deployer.deploy(Auction, 300,200,'0x35dc609b8d67667a4ff75a1c8d4f87069a83c9e2');
    deployer.deploy(abAuction, 300,200,'0x35dc609b8d67667a4ff75a1c8d4f87069a83c9e2', 2000000, 1000000); //this one has usercost, and minDeposit

};