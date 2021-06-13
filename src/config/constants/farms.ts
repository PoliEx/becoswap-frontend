import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [
  {
    pid: 1,
    lpSymbol: 'POLEX-BNB LP',
    lpAddresses: {
      80001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0x93bA7cA08fcB20d0a3381052B8c24bdFb0a9fec7',
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
    lpSymbol: 'BNB-USDT LP',
    lpAddresses: {
      80001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0x587d26D8235C24DBA51CF4E6629d5327CF43Ae4C',
    },
    token: tokens.usdt,
    quoteToken: tokens.wmatic,
  },
  {
    pid: 6,
    lpSymbol: 'ETH-USDT LP',
    lpAddresses: {
      80001: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      137: '0x4C601D261710deA5703F48854AeA2788CE58b9B3',
    },
    token: tokens.usdt,
    quoteToken: tokens.eth,
  },
  
]

export default farms
