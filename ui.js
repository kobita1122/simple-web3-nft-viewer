async function updateInfo() {
  const address = await getWalletAddress();
  const network = await getNetworkName();

  document.getElementById("address").innerText = address;
  document.getElementById("network").innerText = network;
}

async function loadNFTs() {
  const address = await getWalletAddress();
  const list = document.getElementById("nftList");
  list.innerHTML = "";

  const nfts = await fetchNFTs(address);

  nfts.forEach(nft => {
    const item = document.createElement("li");
    item.innerText = "Token ID: " + nft.token_id;
    list.appendChild(item);
  });
}
