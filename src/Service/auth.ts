import { AuthProps } from '@/Utils/types'
import axios from 'axios'
export async function register(authProps: AuthProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  return axios
    .post(
      url,
      {
        email: authProps.email,
        password: authProps.password,
        name: authProps.name,
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
export async function login(authProps: AuthProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  return axios
    .post(
      url,
      {
        email: authProps.email,
        password: authProps.password,
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
