import React from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Header from './header'

const Layout = () => {
   return (
      <>
         <Header />
         <Main>
            <Outlet />
         </Main>
      </>
   )
}
const Main = styled.main`
   min-height: 100vh;
`

export default Layout
