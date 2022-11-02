import nftSlice from './nft-slice'

const { configureStore } = require('@reduxjs/toolkit')

const store = configureStore({
   reducer: {
      nft: nftSlice.reducer,
   },
})
export default store
