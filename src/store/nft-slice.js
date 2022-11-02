/* eslint-disable consistent-return */
const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit')

export const getNfts = createAsyncThunk(
   'nft/getNfts',
   async (_, { rejectWithValue }) => {
      try {
         const response = await fetch('https://api.opensea.io/api/v1/assets')
         const result = await response.json()
         if (!response.ok) {
            let errorMessage = 'Some thing went wrong'
            if (result && result.message) {
               errorMessage = result.message
            }
            throw new Error(errorMessage)
         }
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)
export const getOneNft = createAsyncThunk(
   'nft/getOneNft',
   async (_, { rejectWithValue }) => {
      try {
         const response = await fetch(
            'https://api.opensea.io/api/v1/asset/0x495f947276749ce646f68ac8c248420045cb7b5e/50237171711830975693577941629445627378898528513277833034196857903714817540097'
         )
         const result = await response.json()
         if (!response.ok) {
            let errorMessage = 'Some thing went wrong'
            if (result && result.message) {
               errorMessage = result.message
            }
            throw new Error(errorMessage)
         }
         return result
      } catch (error) {
         return rejectWithValue(error.message)
      }
   }
)

const initialState = {
   cards: [],
   foundData: [],
   isLoading: false,
}

const nftSlice = createSlice({
   name: 'nft',
   initialState,
   reducers: {
      search(state, { payload }) {
         if (!payload) {
            state.foundData = []
         } else {
            state.foundData = state.cards.filter((el) =>
               el?.name?.toLowerCase().includes(payload.toLowerCase())
            )
         }
      },
   },
   extraReducers: {
      [getNfts.pending]: (state) => {
         state.isLoading = true
      },
      [getNfts.fulfilled]: (state, action) => {
         state.isLoading = false
         state.cards = action.payload?.assets
      },
      [getNfts.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const nftActions = nftSlice.actions
export default nftSlice
