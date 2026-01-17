document.getElementById("connectBtn").addEventListener("click", async () => {
  await connectWallet();
  await updateInfo();
});

document.getElementById("loadBtn").addEventListener("click", async () => {
  await loadNFTs();
});
