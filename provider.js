let provider;
let signer;

function setupProvider() {
  provider = new ethers.providers.Web3Provider(window.ethereum);
  signer = provider.getSigner();
}
