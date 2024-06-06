'use client'
import {
  getAllBoxes,
  getAllCategories,
  getAllUsers,
  updateAnimal,
} from '@/Service/animals'
import { register } from '@/Service/auth'
import {
  AnimalProps,
  AnimalUpdateOrInsertProps,
  BoxProps,
  CategoryProps,
  UserProps,
} from '@/Utils/types'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type UpdateAnimalProps = {
  animalProps: AnimalProps
  setIsReloadNeeded: any
  handleClose: any
}
export const UpdateAnimalForm = ({
  animalProps,
  setIsReloadNeeded,
  handleClose,
}: UpdateAnimalProps) => {
  const [name, setName] = useState('')
  const [boxId, setBoxId] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [userId, setUserId] = useState('')
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [image, setImage] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const [animalData, setAnimalData] = useState<AnimalProps>()

  const [boxesList, setBoxesList] = useState<BoxProps[]>()
  const [categoriesList, setcategoriesList] = useState<CategoryProps[]>()
  const [usersList, setUsersList] = useState<UserProps[]>()

  useEffect(() => {
    getAllBoxes().then((res) => {
      setBoxesList(res.data)
    })

    getAllCategories().then((res) => {
      setcategoriesList(res.data)
    })

    getAllUsers().then((res) => {
      setUsersList(res.data)
    })
  }, [])

  useEffect(() => {
    if (!isLoaded && animalData) {
      setName(animalData.name)
      setImage(animalData.image)
      setArrival(animalData?.arrival)
      setDeparture(animalData?.departure)
      setBoxId(animalData?.box.id)
      setCategoryId(animalData?.category.id)
      setUserId(animalData?.user.id)
      setIsLoaded(true)
    }
  }, [])

  const [error, setError] = useState('')
  const { push } = useRouter()

  function handleSubmit() {
    if (
      !name ||
      !image ||
      !arrival ||
      !departure ||
      !boxId ||
      !categoryId ||
      !userId
    ) {
      setError('Tu fais des bêtises Maurice')
    } else {
      let animalUpdateData = {
        id: animalProps.id,
        name: name,
        image: image,
        arrival: arrival,
        departure: departure,
        boxId: boxId,
        categoryId: categoryId,
        ownerId: userId,
        created_at: animalProps.created_at,
      }

      updateAnimal(animalUpdateData)
        .then((res) => {
          console.log(res)
          setIsReloadNeeded(true)
          handleClose()
        })
        .catch((e) => console.log(e))
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Update animal
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Animal name
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                onChange={(e) => setName(e.target.value)}
                defaultValue={animalProps?.name}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Animal image
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                onChange={(e) => setImage(e.target.value)}
                defaultValue={animalProps?.image}
              />
              <div>
                <p>Preview</p>
                <img
                  src={image || animalProps?.image}
                  className="w-32 h-32 object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Animal arrival
            </label>
            <div className="mt-2">
              <input
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                onChange={(e) => setArrival(e.target.value)}
                defaultValue={new Date(animalProps.arrival).toLocaleDateString(
                  'FR'
                )}
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Animal departure
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  onChange={(e) => setDeparture(e.target.value)}
                  defaultValue={new Date(
                    animalProps.departure
                  ).toLocaleDateString('FR')}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Category
                </label>
              </div>
              <div className="mt-2">
                <select
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  onChange={(e) => setCategoryId(e.target.value)}
                >
                  {categoriesList &&
                    categoriesList.map((category) => {
                      return (
                        <option
                          selected={animalProps.category.id === category.id}
                          key={category.id}
                          value={category.id}
                        >
                          {category.name}
                        </option>
                      )
                    })}
                </select>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Box
                </label>
              </div>
              <div className="mt-2">
                <select
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  onChange={(e) => setBoxId(e.target.value)}
                  defaultValue={animalProps.box.id}
                >
                  {boxesList &&
                    boxesList.map((boxData) => {
                      return (
                        <option
                          selected={animalProps.box.id === boxData.id}
                          value={boxData.id}
                          key={boxData.id}
                        >
                          {boxData.name}
                        </option>
                      )
                    })}
                </select>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  User
                </label>
              </div>
              <div className="mt-2">
                <select
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  onChange={(e) => setUserId(e.target.value)}
                >
                  {usersList &&
                    usersList.map((user) => {
                      return (
                        <option
                          selected={animalProps.user.id === user.id}
                          key={user.id}
                          value={user.id}
                        >
                          {user.name}
                        </option>
                      )
                    })}
                </select>
              </div>
            </div>

            <div>
              <p className="text-red-600 text-italic">{error}</p>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  handleSubmit()
                }}
              >
                Edit animal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
