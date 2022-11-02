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
   async ({ address, id }, { rejectWithValue }) => {
      try {
         const response = await fetch(
            `https://api.opensea.io/api/v1/asset/${address}/${id}`
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
   oneNft: null,
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
      [getOneNft.pending]: (state) => {
         state.isLoading = true
      },
      [getOneNft.fulfilled]: (state, action) => {
         state.isLoading = false
         state.oneNft = action.payload
      },
      [getOneNft.rejected]: (state) => {
         state.isLoading = false
      },
   },
})
export const nftActions = nftSlice.actions
export default nftSlice
