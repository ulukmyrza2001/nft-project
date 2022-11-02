import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { Grid } from '../../styles/styles-for-position/style'
import Card from './Card'

const FoundData = ({ isVisible }) => {
   const { foundData } = useSelector((state) => state.nft)

   const renderFoundData = () =>
      foundData.map((el) => <Card nft={el} key={el.id} />)

   return isVisible ? (
      <Container>
         {(!!foundData.length && (
            <GridContainer>{renderFoundData()}</GridContainer>
         )) || (
            <p>
               not found <b>{`'${isVisible}'`}</b>
            </p>
         )}
      </Container>
   ) : null
}

const Container = styled.div`
   position: absolute;
   top: 120%;
   left: 50%;
   transform: translateX(-50%);
   z-index: 5;
   width: 100%;
   padding: 1rem;
   background: white;
   box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.3);
   border-radius: 6px;
   @media (max-width: 700px) {
      width: 100vw;
      left: 0;
      transform: translateX(-60%);
      max-height: 80vh;
      overflow-y: auto;
   }
`
const GridContainer = styled(Grid)`
   width: 100%;
   grid-gap: 5px;
   @media (min-width: 160px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (min-width: 460px) {
      grid-template-columns: repeat(3, 1fr);
   }
   @media (min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (min-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
   }
`

export default FoundData
