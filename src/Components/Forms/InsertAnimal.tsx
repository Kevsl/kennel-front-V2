'use client'
import {
  getAllBoxes,
  getAllCategories,
  getAllUsers,
  insertAnimal,
} from '@/Service/animals'
import {
  AnimalProps,
  AnimalUpdateOrInsertProps,
  BoxProps,
  CategoryProps,
  UserProps,
} from '@/Utils/types'
import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ErrorMsg } from '../Error'
import { InputTest } from '../InputTest'

type InsertAnimalProps = {
  animalProps?: AnimalProps
  setIsReloadNeeded: any
  handleClose: any
}

export const InsertAnimalForm = ({
  animalProps,
  setIsReloadNeeded,
  handleClose,
}: InsertAnimalProps) => {
  const [boxesList, setBoxesList] = useState<BoxProps[]>([])
  const [categoriesList, setcategoriesList] = useState<CategoryProps[]>()
  const [usersList, setUsersList] = useState<UserProps[]>()

  const [myName, setMyName] = useState('Kev')

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

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<AnimalUpdateOrInsertProps>()

  const onSubmit: SubmitHandler<AnimalUpdateOrInsertProps> = (data) =>
    insertAnimal(data)
      .then((res) => {
        setIsReloadNeeded(true)
        handleClose()
      })
      .catch((e) => console.log(e))

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white w-1/2 mx-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Insert new animal
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Animal name
            </label>
            <div className="mt-2">
              <InputTest
                register={register}
                inputType="text"
                inputName="name"
                errorName={errors.name ? errors.name : null}
              />
              {errors.name && <ErrorMsg error={'name'} />}
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
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('image', { required: true })}
              />
              {errors.image && <ErrorMsg error={'image'} />}

              <div>
                <p>Preview</p>
                <img
                  src={
                    watch('image') ||
                    'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D'
                  }
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
                type="date"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                {...register('arrival', { required: true })}
              />
              {errors.arrival && <ErrorMsg error={'arrival'} />}
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
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  {...register('departure', { required: true })}
                />
                {errors.departure && <ErrorMsg error={'departure'} />}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  {...register('categoryId', { required: true })}
                >
                  <option></option>
                  {categoriesList &&
                    categoriesList.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      )
                    })}
                </select>
                {errors.categoryId && <ErrorMsg error={'category'} />}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  {...register('boxId', { required: true })}
                >
                  {boxesList &&
                    boxesList.map((boxData) => {
                      return (
                        <option value={boxData.id} key={boxData.id}>
                          {boxData.name}
                        </option>
                      )
                    })}
                </select>
                {errors.boxId && <ErrorMsg error={'box'} />}
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 indent-3"
                  {...register('ownerId', { required: true })}
                >
                  {usersList &&
                    usersList.map((user) => {
                      return (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      )
                    })}
                </select>
                {errors.ownerId && <ErrorMsg error={'user'} />}
              </div>
            </div>

            <div>
              <input
                type="submit"
                className="my-8 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                value="Insert animal"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
