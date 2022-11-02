import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Nft from '../../assets/icons/nft.svg'
import SearchBar from '../../components/search-bar'

const Header = () => {
   const navigate = useNavigate()
   const { pathname } = useLocation()
   return (
      <HeaderStyled>
         <Container>
            <LogoNft onClick={() => navigate('/')} />
            {pathname === '/' && <SearchBar />}
         </Container>
      </HeaderStyled>
   )
}
const HeaderStyled = styled.header`
   width: 100%;
   background-color: white;
   height: 80px;
   box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
   position: fixed;
   z-index: 2;
`
const Container = styled.div`
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   padding: 1rem 0.5rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
`
const LogoNft = styled.div`
   background: url(${Nft});
   background-repeat: no-repeat;
   background-size: cover;
   background-position: center;
   width: 40px;
   height: 40px;
   cursor: pointer;
`

export default Header
