import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'PoliEx Finance',
  description:
    'The most popular AMM on Polygon by user count! Earn POLEX through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PoliExSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://becoswap.com/images/hero.jpg',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | PoliEx',
  },
  '/competition': {
    title: 'Trading Battle | PoliEx',
  },
  '/prediction': {
    title: 'Prediction | PoliEx',
  },
  '/farms': {
    title: 'Farms | PoliEx',
  },
  '/pools': {
    title: 'Pools | PoliEx',
  },
  '/lottery': {
    title: 'Lottery | PoliEx',
  },
  '/collectibles': {
    title: 'Collectibles | PoliEx',
  },
  '/ifo': {
    title: 'Initial Farm Offering | PoliEx',
  },
  '/teams': {
    title: 'Leaderboard | PoliEx',
  },
  '/profile/tasks': {
    title: 'Task Center | PoliEx',
  },
  '/profile': {
    title: 'Your Profile | PoliEx',
  },
}
