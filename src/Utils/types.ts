export type AuthProps = {
  email: string
  password: string
  name?: string
}
export type BoxProps = {
  id: string
  name: string
}

export type CategoryProps = {
  id: string
  name: string
}
export type UserProps = {
  id: string
  name: string
  created_at: string
  updatedAt: string
}

export type AnimalProps = {
  id: string
  name: string
  created_at: string
  arrival: string
  departure: string
  image: string
  boxId: string
  ownerId: string
  categoryId: string
  category: CategoryProps
  user: UserProps
  box: BoxProps
}
export type AnimalUpdateOrInsertProps = {
  id: string
  name: string
  created_at: string
  arrival: string
  departure: string
  image: string
  boxId: string
  ownerId: string
  categoryId: string
}

export enum Roles {
  admin = 'ADMIN',
  user = 'USER',
  moderator = 'MODERATOR',
}
export enum Status {
  active = 'ACTIVE',
  inactive = 'INACTIVE',
  pending = 'PENDING',
}
