import { AnimalProps } from '@/Utils/types'
import React from 'react'
import { ModalComponent } from '../Modals/Modal'

type ModalUpdateProps = {
  animalProps: AnimalProps
  setIsReloadNeeded: any
}
export const Card = ({ animalProps, setIsReloadNeeded }: ModalUpdateProps) => {
  return (
    <div className="my-4">
      <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-4">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none  h-96 object-contain w-full">
          <img
            src={animalProps.image}
            alt="ui/ux review check rounded-t-md"
            className="rounded-t-xl object-cover w-full h-96"
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {animalProps.name}
          </h4>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Owner: {animalProps.user.name}
          </p>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Box: {animalProps.box.name}
          </p>{' '}
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Category: {animalProps.category.name}
          </p>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Arrival :{new Date(animalProps.arrival).toLocaleDateString('FR')}
          </p>
          <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
            Départure {new Date(animalProps.departure).toLocaleDateString('FR')}
          </p>
        </div>
        <div className="flex items-center justify-between p-6">
          <div className="flex items-center -space-x-3">
            <img
              alt={animalProps.name}
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1061&amp;q=80"
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10 rounded-t-md"
              data-tooltip-target="author-1"
            />
            <img
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
              className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
              data-tooltip-target="author-2"
            />
          </div>
          <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased">
            January 10
          </p>
          <ModalComponent
            animalProps={animalProps}
            setIsReloadNeeded={setIsReloadNeeded}
          />
        </div>
      </div>
    </div>
  )
}
