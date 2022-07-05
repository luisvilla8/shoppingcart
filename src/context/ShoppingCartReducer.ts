import { ItemCart } from '../types'

type ItemState = Array<ItemCart>

type ShopingCartReducerAction = {
  type: 'increaseItemQuantity',
  payload: number
} | {
  type: 'decreaseItemQuantity',
  payload: number
} | {
  type: 'removeItem',
  payload: number
} | {
  type: 'getItemQuantity',
  payload: number
}

export const ShoppingCartReducer = (state : ItemState, action : ShopingCartReducerAction) => {
  const item = state.find(item => item.id === action.payload)
  
  switch (action.type) {
    case 'increaseItemQuantity':
      if(!item) return [...state,{id: action.payload, quantity: 1}]
      return state.map( item => item.id === action.payload 
                  ? { ...item, quantity: item.quantity + 1} 
                  : item)
    case 'decreaseItemQuantity':
      if(item?.quantity === 1) return state.filter( item => item.id !== action.payload)
      return state.map(item => item.id === action.payload 
                  ? { ...item, quantity: item.quantity - 1} 
                  : item)
    case 'removeItem':
      return state.filter( item => item.id !== action.payload)
    default:
      return state
  }
}
