import { createPost,createPostWithCategories } from "./01 - createPost";
import { getPosts,getPost,getPostsByTitle,getPostByPage } from "./02 - getPosts";
import { updatePost,updatePostInfo } from "./03 - updatePost";
import { changeAuthorPost,insertCategoriesInPost } from "./04 - changeAuthorPost";
import { deletePost } from "./05 - deletePost";

export {
  createPost,getPosts,
  updatePost,changeAuthorPost,deletePost,createPostWithCategories,updatePostInfo,getPost,getPostsByTitle,insertCategoriesInPost,getPostByPage
}