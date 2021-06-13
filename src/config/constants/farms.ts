import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'POLEX-MATIC LP',
    lpAddresses: {
      80001: '',
      137: '0xeAdbf646bAbca32a2E2a669Cd168f9559fDb0B36',
    },
    token: tokens.polex,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 2,
    lpSymbol: 'POLEX-USDT LP',
    lpAddresses: {
      80001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0xA3Aa99b50946358b22523cd4A1fC8A29ce6Bee98',
    },
    token: tokens.polex,
    quoteToken: tokens.usdt,
  },
  {
    pid: 4,
    lpSymbol: 'MATIC-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
    token: tokens.usdc,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 6,
    lpSymbol: 'ETH-USDC LP',
    lpAddresses: {
      80001: '',
      137: '0x853Ee4b2A13f8a742d64C8F088bE7bA2131f670d',
    },
    token: tokens.usdc,
    quoteToken: tokens.eth,
  },
  
]

export default farms
