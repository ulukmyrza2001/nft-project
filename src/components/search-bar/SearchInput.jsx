import React, { useRef } from 'react'
import styled from 'styled-components'
import { CgSearch } from 'react-icons/cg'
import FoundData from './FoundData'
import { Flex } from '../../styles/styles-for-position/style'

const SearchInput = ({ value, onChange, setValue }) => {
   const inputRef = useRef()

   return (
      <InputWrapper>
         <Flex width="25px">
            <CgSearch
               onClick={() => inputRef.current.focus()}
               color="gray"
               fontSize={20}
               cursor="pointer"
            />
         </Flex>

         <InputStyled
            onChange={(e) => onChange(e.target.value)}
            isValid={!!value}
            ref={inputRef}
            placeholder="Search..."
            type="text"
         />
         <FoundData setValue={setValue} isVisible={value} />
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
   @media (max-width: 500px) {
      max-width: 100%;
   }
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
