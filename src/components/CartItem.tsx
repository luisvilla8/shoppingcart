import { ItemCart } from '../types'
import itemStore from '../data/items.json'
import { formatCurrency } from '../utils/formatCurrency'

type CartItemProp = {
  id: number
  quantity: number
  handleRemoveItem: (id: number) => void
}

export const CartItem = ({ id, quantity, handleRemoveItem } : CartItemProp ) => {

  const item = itemStore.find( item => item.id === id)

  return (
    <div className="flex mb-4 relative">
      <img src={item?.imgUrl} alt={item?.imgUrl} className="object-cover w-1/3 rounded-lg" style={{ height: "100px"}} />
      <div className="flex items-center justify-between w-2/3 p-3">
        <p className="text-slate-300">{item?.name} (x{quantity})</p>
        <p className="text-slate-100 font-medium">{formatCurrency(quantity * (item?.price || 0))}</p>
      </div>
      <button
        onClick={ () => handleRemoveItem(id) }
      >
        <svg viewBox="0 0 20 20" className="w-6 absolute right-0 top-0 fill-red-500">
          <path d="M10.185,1.417c-4.741,0-8.583,3.842-8.583,8.583c0,4.74,3.842,8.582,8.583,8.582S18.768,14.74,18.768,10C18.768,5.259,14.926,1.417,10.185,1.417 M10.185,17.68c-4.235,0-7.679-3.445-7.679-7.68c0-4.235,3.444-7.679,7.679-7.679S17.864,5.765,17.864,10C17.864,14.234,14.42,17.68,10.185,17.68 M10.824,10l2.842-2.844c0.178-0.176,0.178-0.46,0-0.637c-0.177-0.178-0.461-0.178-0.637,0l-2.844,2.841L7.341,6.52c-0.176-0.178-0.46-0.178-0.637,0c-0.178,0.176-0.178,0.461,0,0.637L9.546,10l-2.841,2.844c-0.178,0.176-0.178,0.461,0,0.637c0.178,0.178,0.459,0.178,0.637,0l2.844-2.841l2.844,2.841c0.178,0.178,0.459,0.178,0.637,0c0.178-0.176,0.178-0.461,0-0.637L10.824,10z"></path>
        </svg>
      </button>
    </div>
  )
}
