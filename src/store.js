// js ver.
import { configureStore, createSlice } from '@reduxjs/toolkit'

// ✅ user Slice 다른 파일로 분리해서 사용해보기
/*
let user = createSlice({
  name : 'user',
  initialState : {name : 'kim', age : 27},
  // state 수정해보기
  reducers : {
    // 단일값 변경
    // setName(state){
    //   return 'Yu and ' + state;
    // }
    
    // object 변경
    setName(state){
      // array, object는 
      // return문 없이 직접 수정해도 state 변경됨
      state.name = 'Yu';
    },
    setAge(state){
      state.age++;
    },

    // 변경함수에 파라미터 받기
    agePlus(state, action){
      state.age += action.payload;
    }
  }
})
export let {setName, setAge, agePlus} = user.actions;
*/
import user from "./store/userSlice"
// import 해서 사용할 jsx 파일에서도 경로 수정 필요!!



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