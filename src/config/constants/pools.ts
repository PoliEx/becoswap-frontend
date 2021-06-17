import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.polex,
    earningToken: tokens.polex,
    contractAddress: {
      80001: '',
      137: '0xD510754Cce167D9C60d7f311F61e3e7073EEAB3E',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 1,
    isFinished: false,
  },
  {
    pid: 5,
    lpSymbol: 'USDC',
    lpAddresses: {
      80001: '',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
    },
    token: tokens.usdc,
    quoteToken: tokens.usdc,
  },
]

export default pools
