import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'POLEX-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0xe7eaCF28b036cA3DF50ccC38de35FB69373Ae15B',
    },
    token: tokens.polex,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'POLEX-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x73d59b065bb3465c232f266cd91e8226a1f2c834',
    },
    token: tokens.polex,
    quoteToken: tokens.usdc,
  },
  {
    pid: 3,
    lpSymbol: 'MATIC-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    token: tokens.usdc,
    quoteToken: tokens.wbnb,
  },
   {
    pid: 4,
    lpSymbol: 'WETH-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d',
    },
    token: tokens.usdc,
    quoteToken: tokens.weth,
  },
  
]

export default farms
