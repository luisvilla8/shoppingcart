import { Item } from '../types'
import { formatCurrency } from '../utils/formatCurrency'
import { useShoppingCartContext } from '../context/ShoppingCartState'

export const ItemStore = ({ id, imgUrl, name, price } : Item) => {

  const { handleIncreaseItemQuantity } = useShoppingCartContext()

  return (
    <div className="flex flex-col mb-4">
      <img src={imgUrl} alt={imgUrl} className="object-cover" style={{height: "200px"}}/>
      <div className="flex justify-between">
        <p>{name}</p>
        <p>{formatCurrency(price)}</p>
      </div>
      <button 
        className="bg-indigo-600 w-fit mx-auto py-1 px-4 rounded-md"
        onClick={ () => handleIncreaseItemQuantity(id) }
      >
        + Add to Cart
      </button>
    </div>
  )
}
