// store.ts ou redux/store.ts

import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/favoritosSlice'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritosReducer
  }
})

// O tipo RootState é derivado da store
export type RootState = ReturnType<typeof store.getState>

// Tipo AppDispatch para facilitar o uso do dispatch em componentes
export type AppDispatch = typeof store.dispatch
