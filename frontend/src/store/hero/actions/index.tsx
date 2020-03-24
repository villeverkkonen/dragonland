import { EquipmentType } from '../../equipment/types'

export const CREATE_HERO = 'CREATE_HERO'
export const BUY_EQUIPMENT = 'BUY_EQUIPMENT'
export const WIN_GOLD = 'WIN_GOLD'
export const LOSE_GOLD = 'LOSE_GOLD'
export const GAME_OVER = 'GAME_OVER'
export const GAIN_LIFE = 'GAIN_LIFE'
export const LOSE_LIFE = 'LOSE_LIFE'
export const EVERY_EQUIPMENT_COLLECTED = 'EVERY_EQUIPMENT_COLLECTED'
export const INCREMENT_ROUNDS_FOUGHT = 'INCREMENT_ROUNDS_FOUGHT'
export const INCREMENT_HITS = 'INCREMENT_HITS'

export const createHero = (name: string) => ({
  type: CREATE_HERO,
  name,
})

export const buyEquipment = (equipment: EquipmentType) => ({
  type: BUY_EQUIPMENT,
  equipment,
})

export const winGold = (amount: number) => ({
  type: WIN_GOLD,
  goldAmount: amount,
})

export const loseGold = (amount: number) => ({
  type: LOSE_GOLD,
  goldAmount: amount,
})

export const gainLife = (amount: number) => ({
  type: GAIN_LIFE,
  lifeAmount: amount,
})

export const loseLife = (amount: number) => ({
  type: LOSE_LIFE,
  lifeAmount: amount,
})

export const gameOver = () => ({
  type: GAME_OVER,
})

export const everyEquipmentCollected = () => ({
  type: EVERY_EQUIPMENT_COLLECTED,
})

export const incrementRoundsFought = () => ({
  type: INCREMENT_ROUNDS_FOUGHT,
})

export const incrementHits = () => ({
  type: INCREMENT_HITS,
})
