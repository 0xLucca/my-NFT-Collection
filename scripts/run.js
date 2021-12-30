const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  // Call the function.
  let txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();

  // Mint another NFT for fun.
  txn = await nftContract.makeAnEpicNFT();
  // Wait for it to be mined.
  await txn.wait();

  // Check how many NFTs have been minted.
  let mintedNFTs = await nftContract.getTotalNFTsMintedSoFar();
  console.log("There have been minted " + mintedNFTs + " NFTs");

  // Check max amount of NFTs that can be minted.
  let maxNFTs = await nftContract.getMaxNFTs();
  console.log("Max amount that can be minted is " + maxNFTs);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
