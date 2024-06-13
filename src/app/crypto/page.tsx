'use client'
import { Cryptocard } from '@/Components/Cards/Cryptocard'
import { getAllCryptos } from '@/Service/crypto'
import { CryptoProps } from '@/Utils/types'
import React, { useEffect, useState } from 'react'

const page = () => {
  const [cryptosList, setCryptosList] = useState<CryptoProps[]>()

  useEffect(() => {
    getAllCryptos()
      .then((res) => setCryptosList(res.data))
      .catch((e) => {
        console.log(e)
      })
  }, [])

  return (
    <div className="flex flex-wrap items-center">
      {cryptosList &&
        cryptosList?.map((crypto) => {
          return (
            <div
              key={crypto.id}
              className="border-2 border-solid w-80 h-80 rounded-md m-8 p-4 "
            >
              <Cryptocard crypto={crypto} isBuyVisible={true} />
            </div>
          )
        })}
    </div>
  )
}

export default page
