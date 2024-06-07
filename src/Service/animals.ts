import { AnimalProps, AnimalUpdateOrInsertProps } from '@/Utils/types'
import axios from 'axios'

export async function getAllAnimals() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}animal/all`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export async function getAllBoxes() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}box/all`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}
export async function getAllCategories() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}category/all`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}
export async function getAllUsers() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}user/all`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export async function updateAnimal(animal: AnimalUpdateOrInsertProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}animal/update/${animal.id}`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .patch(
      url,
      {
        name: animal.name,
        image: animal.image,
        boxId: animal.boxId,
        categoryId: animal.categoryId,
        ownerId: animal.ownerId,
        arrival: new Date(animal.arrival).toISOString(),
        departure: new Date(animal.departure).toISOString(),
      },

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export async function insertAnimal(animal: AnimalUpdateOrInsertProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}animal/create`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  }
  return axios
    .post(
      url,
      {
        name: animal.name,
        image: animal.image,
        boxId: animal.boxId,
        categoryId: animal.categoryId,
        ownerId: animal.ownerId,
        arrival: new Date(animal.arrival).toISOString(),
        departure: new Date(animal.departure).toISOString(),
      },

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}
