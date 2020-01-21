const networks = {
  local: {
    name: 'local',
    contract: 'ordersbook',

    chainId: 'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f',
    host: 'http://localhost:8888',
    port: 8888,
    protocol: 'http',
    monitor: 'https://jungle.eosx.io',
    lightapi: 'https://lightapi.eosgeneva.io',
  },

  jungle: {
    name: 'europechain',
    contract: 'nordicenergyscryptolions',

    chainId: 'f778f7d2f124b110e0a71245b310c1d0ac1a0edd21f131c5ecb2e2bc03e8fe2e',
    host: 'api.xec.cryptolions.io',
    port: 443,
    protocol: 'https',
    monitor: 'https://eos-testapi.block.io',
    lightapi: 'https://eos-testapi.block.io',
  },

  eos: {
    name: 'eos',
    contract: 'wwwswapnordicenergyioeos',

    chainId: 'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',

    host: 'https://nodes.get-scatter.com:443',
    port: 443,
    protocol: 'https',
    monitor: 'https://eosx.io',
    lightapi: 'https://api.light.xeos.me',
  }
};


export default networks[process.env.NETWORK] || networks.local
