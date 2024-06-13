import React from 'react'
import { BuyCryptoModal } from '../BuyCryptoModal'
import { CryptoProps } from '@/Utils/types'

export const Cryptocard = ({
  crypto,
  isBuyVisible,
}: {
  crypto: CryptoProps
  isBuyVisible: boolean
}) => {
  return (
    <div>
      <div className="flex flex-row flex-end"></div>
      <img
        src={crypto.image}
        alt={crypto.name}
        className="w-full h-48 object-cover"
      />
      <p>{crypto.name}</p>

      <p className="text-sm">Value: {crypto.value}</p>
      <p className="text-sm">Remaining Quantity on server: {crypto.quantity}</p>
      <BuyCryptoModal crypto={crypto} isBuyVisible={isBuyVisible} />
    </div>
  )
}
