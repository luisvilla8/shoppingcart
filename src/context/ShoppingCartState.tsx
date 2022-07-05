import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { ItemCart } from '../types'
import { ShoppingCartReducer } from './ShoppingCartReducer'

type ItemState = Array<ItemCart>

type ShoppingCartStateProps = {children: ReactNode}

type ShoppingCartContext = {
  handleIncreaseItemQuantity: (id: number) => void
  handleDecreaseItemQuantity: (id: number) => void
  cartItems: ItemState
  cartQuantity: number
  handleRemoveItem: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext);

const INITIAL_STATE : ItemState = []

export const useShoppingCartContext = () => useContext(ShoppingCartContext)

export const ShoppingCartState = ({ children } : ShoppingCartStateProps) => {

  const [cartItems, dispatch] = useReducer(ShoppingCartReducer, INITIAL_STATE)

  const cartQuantity = cartItems.reduce(( quantity, cartItem ) => quantity + cartItem.quantity, 0)

  const handleIncreaseItemQuantity = (id: number) =>  {
    dispatch({ type: 'increaseItemQuantity', payload: id })
  }

  const handleDecreaseItemQuantity = (id: number) => {
    dispatch({ type: 'decreaseItemQuantity', payload: id })
  }

  const handleRemoveItem = (id: number) => {
    dispatch({ type: 'removeItem', payload: id })
  }

  return (
    <ShoppingCartContext.Provider 
      value={{
        handleIncreaseItemQuantity,
        handleDecreaseItemQuantity,
        cartItems,
        cartQuantity,
        handleRemoveItem
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
