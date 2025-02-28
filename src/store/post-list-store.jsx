import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if(action.type === 'DELETE_POST'){
    newPostList = currPostList.filter((post) => post.id !== action.Payload.postId);
  } else if (action.type === 'ADD_POST'){
    newPostList = [action.Payload, ...currPostList]
  } else if (action.type === 'ADD_INITIAL_POSTS'){
    newPostList = action.Payload.posts
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {
  const [postList, dispatchpostList] = useReducer(postListReducer, []);

  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchpostList({
      type: "ADD_POST",
      Payload:{
        id:Date.now(),
        title: postTitle,
        body: postBody,
        reaction: reactions,
        userId: userId,
        tags: tags,
      }
    })
  };


  const addInitialPosts = (posts) => {
    dispatchpostList({
      type: "ADD_INITIAL_POSTS",
      Payload:{
        posts
      }
    })
  };

  const deletePost = (postId) => {
    dispatchpostList({
      type: "DELETE_POST",
      Payload:{
        postId
      }
    })
  };

  return (
    <PostList.Provider value={{ postList, addPost,addInitialPosts, deletePost }}>
      {children}
    </PostList.Provider>
  );
};




export default PostListProvider;
