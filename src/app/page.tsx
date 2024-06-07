'use client'
import { Card } from '@/Components/Cards/Card'
import { CardContainer } from '@/Components/Cards/CardContainer'
import { AddAnimalModal } from '@/Components/Modals/AddAnimalModal'
import { getAllAnimals } from '@/Service/animals'
import { AnimalProps } from '@/Utils/types'
import { useEffect, useState } from 'react'

export default function Home() {
  const [animalsList, setAnimalsList] = useState<AnimalProps[]>()
  const [isReloadNeeded, setIsReloadNeeded] = useState(false)

  useEffect(() => {
    getAllAnimals().then((res) => {
      setAnimalsList(res.data)
      console.log(res.data)
    })
  }, [isReloadNeeded])

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddAnimalModal setIsReloadNeeded={setIsReloadNeeded} />
      <CardContainer>
        {animalsList &&
          animalsList.map((animal) => {
            return (
              <div key={animal.id} className="w-72">
                <Card
                  animalProps={animal}
                  setIsReloadNeeded={setIsReloadNeeded}
                />
              </div>
            )
          })}
      </CardContainer>
    </main>
  )
}
