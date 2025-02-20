import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utils/bigNumber'

BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

export const BSC_BLOCK_TIME = 3

// POLEX_PER_BLOCK details
// 50 POLEX is minted per block

export const POLEX_PER_BLOCK = new BigNumber(50)
export const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
export const BASE_URL = 'https://polyswap.netlify.app/'
export const BASE_EXCHANGE_URL = 'https://quickswap.exchange/'
export const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
export const BASE_LIQUIDITY_POOL_URL = `${BASE_EXCHANGE_URL}/#/pool`
export const BASE_BSC_SCAN_URL = 'https://polygonscan.com/'
export const LOTTERY_MAX_NUMBER_OF_TICKETS = 50
export const LOTTERY_TICKET_PRICE = 100
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const TRANSFER_TAX = 0
