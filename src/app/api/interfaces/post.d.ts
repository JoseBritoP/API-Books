import { Category } from "./category"

export interface NewPost {
    title:string
    content:string
    userId:string
}

export interface NewPostV2 {
    title:string
    content:string
    userId:string
    categories: number[]
}

export interface PostInfo {
  id:number
  title:string
  content:string
  user:{
    name:string
  },
  category: Category[]
}

export interface UpdatePost {
  postId:string,
  data:{
    title:string
    content:string
    userId:string
  }
};

export interface UpdatePostV2 {
  postId:string,
  data:{
    title:string
    content:string
    userId:string,
    categories:number[]
  }
};

export interface ChangeAuthorPost {
  postId:string,
  userId:string
}


