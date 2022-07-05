import React from 'react'
import { ItemStore } from '../components/ItemStore'
import itemStore from '../data/items.json'

export const Store = () => {
  return (
    <>
      <h1 className="text-slate-100 font-bold text-3xl mb-2">Store</h1>
      <div className="p-4">
        {
          itemStore.map(item => (
            <ItemStore key={item.id} {...item} />
          ))
        }
      </div>
    </>
  )
}
