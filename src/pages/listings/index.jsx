import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Card from '../../components/card/Card'
import LoaderCard from '../../components/loader/LoaderCard'
import { getNfts } from '../../store/nft-slice'
import { Grid } from '../../styles/styles-for-position/style'

const Listings = () => {
   const dispatch = useDispatch()
   const { cards, isLoading } = useSelector((state) => state.nft)

   const renderCards = () => cards.map((el) => <Card key={el.id} nft={el} />)

   useEffect(() => {
      dispatch(getNfts())
   }, [])

   return (
      <Container>
         <GridContainer>
            {(isLoading && <LoaderCard />) || renderCards()}
         </GridContainer>
      </Container>
   )
}
const Container = styled.div`
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 7rem 0.5rem 0 0.5rem;
`
const GridContainer = styled(Grid)`
   width: 100%;
   max-width: 1440px;
   grid-gap: 15px;
   @media (min-width: 160px) {
      grid-template-columns: repeat(1, 1fr);
   }
   @media (min-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
   }
   @media (min-width: 960px) {
      grid-template-columns: repeat(3, 1fr);
   }
   @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
   }
`

export default Listings
