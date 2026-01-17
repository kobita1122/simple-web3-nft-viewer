async function getNetworkName() {
  const net = await provider.getNetwork();
  return net.name;
}
