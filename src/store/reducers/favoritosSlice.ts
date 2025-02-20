import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FavoritosState {
  itens: string[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<string>) => {
      const itemIndex = state.itens.indexOf(action.payload)

      if (itemIndex === -1) {
        state.itens.push(action.payload) // Adiciona se não estiver na lista
      } else {
        state.itens.splice(itemIndex, 1) // Remove se já estiver na lista
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
