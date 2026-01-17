async function fetchNFTs(address) {
  const url = NFT_API + "?owner=" + address;
  const response = await fetch(url);
  const data = await response.json();
  return data.assets || [];
}
