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
    quoteToken: tokens.wmatic,
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
    quoteToken: tokens.wmatic,
  },
  
  
]

export default farms
