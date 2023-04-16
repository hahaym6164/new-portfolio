import { configureStore,ThunkAction,Action } from "@reduxjs/toolkit";
import reducers from "./reducers/index";
import thunkMiddleware from 'redux-thunk'
export const store = configureStore({
  reducer: reducers,
  // middleware: [thunkMiddleware]
});
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;


