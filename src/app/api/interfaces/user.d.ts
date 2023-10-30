import { PostInfo } from "./post"

export interface NewUser {
  name:string
}

export interface User {
  id:number
  name:string
}

export interface UpdateUser {
  id:string
  data:{
    name:string
  }
}

export interface ChangeUser {
  id:string
  data:{
    name:string
  }
}

export interface UserInfo {
  id:number
  name:string
  posts:PostInfo[]
}