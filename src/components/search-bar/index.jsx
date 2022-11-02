import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SearchInput from './SearchInput'
import useDebounce from '../../hooks/useDebaunce'
import { nftActions } from '../../store/nft-slice'

let blockedUseEffect = true

const SearchBar = () => {
   const dispatch = useDispatch()
   const [value, setValue] = useState('')
   const debouncedCallback = useDebounce(sendDataToStore, 600)
   function sendDataToStore() {
      return dispatch(nftActions.search(value))
   }

   const handleChangeInput = (value) => setValue(value)

   useEffect(() => {
      if (blockedUseEffect) {
         blockedUseEffect = false
      }
      debouncedCallback()
   }, [debouncedCallback])

   return (
      <SearchInput
         setValue={setValue}
         onChange={handleChangeInput}
         value={value}
      />
   )
}

export default SearchBar
