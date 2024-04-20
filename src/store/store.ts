import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slice/cardsSlice'
import oneProductSlice from '../slice/oneProductSlice'
import authUserReducer from '../slice/authUsersSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    onePost: oneProductSlice,
    authUser: authUserReducer
  },
})