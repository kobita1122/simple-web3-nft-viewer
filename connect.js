async function connectWallet() {
  if (!window.ethereum) {
    alert("MetaMask not found");
    return;
  }

  await window.ethereum.request({ method: "eth_requestAccounts" });
  setupProvider();
}
