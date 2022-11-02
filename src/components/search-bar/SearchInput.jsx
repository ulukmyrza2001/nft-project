import React, { useRef } from 'react'
import styled from 'styled-components'
import { CgSearch } from 'react-icons/cg'
import FoundData from './FoundData'

const SearchInput = ({ value, onChange }) => {
   const inputRef = useRef()

   return (
      <InputWrapper>
         <CgSearch
            onClick={() => inputRef.current.focus()}
            color="gray"
            fontSize={20}
            cursor="pointer"
         />
         <InputStyled
            onChange={(e) => onChange(e.target.value)}
            isValid={!!value}
            ref={inputRef}
            placeholder="Search..."
            type="text"
         />
         <FoundData isVisible={value} />
      </InputWrapper>
   )
}
const InputWrapper = styled.div`
   position: relative;
   background-color: #f3f3f3;
   max-width: 40%;
   display: flex;
   align-items: center;
   padding: 0 1rem;
   border-radius: 6px;
`
const InputStyled = styled.input`
   padding: ${({ isValid }) => (isValid ? '1rem' : '1rem 0')};
   font-size: 15px;
   letter-spacing: 0.7px;
   width: ${({ isValid }) => (isValid ? '500px' : '0px')};
   background-color: transparent;
   ::placeholder {
      color: gray;
   }
   :focus {
      width: 500px;
      padding: 1rem;
   }
`
export default SearchInput
