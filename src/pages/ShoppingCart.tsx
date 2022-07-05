import { CartItem } from "../components/CartItem"
import itemStore from '../data/items.json'
import { useShoppingCartContext } from "../context/ShoppingCartState"
import { formatCurrency } from "../utils/formatCurrency"

export const ShoppingCart = () => {

  const { cartItems, handleRemoveItem } = useShoppingCartContext()

  let total = cartItems.reduce((accPrice, item) =>{
    const product = itemStore.find(storeItem => storeItem.id === item.id)
    return accPrice + (item.quantity) * (product?.price || 0)
  },0)

  return (
    <>
      <h1 className="text-slate-100 text-2xl font-bold my-4">Cart</h1>
      <div>
        {
          cartItems.map( item => {
            return (
              <CartItem 
                key={item.id} 
                {...item} 
                handleRemoveItem= { handleRemoveItem }
              />
            )
          })
        }
      </div>
      <p className="text-slate-100 text-lg min-w-full mt-10">
        Total: <span className="font-medium float-right">{ formatCurrency(total) }</span>
      </p>
    </>
  )
}
