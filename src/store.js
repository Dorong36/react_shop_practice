// js ver.
import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
  name : 'user',
  initialState : 'kim',
  // state 수정해보기
  reducers : {
    setName(state){
      return 'Yu and ' + state;
    }
  }
})
export let {setName} = user.actions;

let stock = createSlice({
  name : 'stock',
  initialState : [10,11,12]
})

let cart = createSlice({
  name : 'cart',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers : {
    setCount(cart){
      let udtCart = {...cart};
      udtCart.count++;
      return udtCart;
    }
  }
})
export let {setCount} = cart.actions;


export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
})


// ts ver.
// import { configureStore } from '@reduxjs/toolkit'

// // let user = createSlice({
// //   name : 'user',
// //   initialState : 'kim'
// // })

// export const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//     comments: commentsReducer,
//     users: usersReducer
//   }
// })

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch