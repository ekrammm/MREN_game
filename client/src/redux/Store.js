import { configureStore } from '@reduxjs/toolkit'
import GameSlice from './gameslice/GameSlice'

export const store = configureStore({
  reducer: {
    game:GameSlice,
  },
})