import tokens from './tokens'
import { PoolConfig, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    sousId: 0,
    stakingToken: tokens.polex,
    earningToken: tokens.polex,
    contractAddress: {
      80001: '',
      137: '0x0f733c81ff79be10e722eaabf98d55230fed7504',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '20',
    sortOrder: 1,
    isFinished: false,
  },
]

export default pools
