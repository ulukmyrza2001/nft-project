import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import InnerPageContent from '../../components/inner-page-content'
import Loader from '../../components/loader/Loader'
import { getOneNft } from '../../store/nft-slice'

const DetailListing = () => {
   const dispatch = useDispatch()
   const { address, id } = useParams()
   const { oneNft, isLoading } = useSelector((state) => state.nft)

   useEffect(() => {
      dispatch(getOneNft({ address, id }))
   }, [])

   return (
      <Container>
         {isLoading && <Loader />}
         {!isLoading && <InnerPageContent nft={oneNft} />}
      </Container>
   )
}
const Container = styled.div`
   max-width: 1200px;
   width: 100%;
   margin: 0 auto;
   display: flex;
   align-items: flex-start;
   gap: 40px;
   padding: 7rem 0.5rem 0 0.5rem;
   @media screen and (max-width: 700px) {
      flex-direction: column;
   }
`

export default DetailListing
