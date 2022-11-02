import React from 'react'
import styled from 'styled-components'
import { MdImageNotSupported } from 'react-icons/md'
import { Flex } from '../../styles/styles-for-position/style'

const Card = ({ nft, onClick }) => {
   return (
      <CardStyled>
         {(nft?.image_url && <Img src={nft?.image_url} alt="IMG..." />) || (
            <Flex width="100%" justify="center">
               <MdImageNotSupported size={70} color="lightgray" />
            </Flex>
         )}
         <Flex direction="column" gap="10px" p="0.4rem">
            <Title>{nft?.name}</Title>
            <Button onClick={() => onClick(nft.id, nft?.creator?.address)}>
               View Details
            </Button>
         </Flex>
      </CardStyled>
   )
}
const Img = styled.div`
   width: 100%;
   aspect-ratio: 15/10;
   object-fit: cover;
   border-radius: 3px;
   overflow: hidden;
   transition: all 0.8s;
   :hover img {
      transition: all 0.8s;
      transform: scale(1.1);
   }
`

const Title = styled.span`
   width: 70%;
   padding-top: 2px;
   text-overflow: ellipsis;
   display: -webkit-box;
   -webkit-line-clamp: 1;
   overflow: hidden;
   -webkit-box-orient: vertical;
   color: #030a1b;
`

const CardStyled = styled.div`
   align-self: start;
   cursor: pointer;
   background: #ffffff;
   box-shadow: 4px 8px 70px rgba(0, 0, 0, 0.07);
   border-radius: 6px;
   animation: yes ease-in-out 0.2s;
   @keyframes yes {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
      }
   }
`
const Button = styled.button`
   padding: 0.3em 0.5em;
   width: 100%;
   background: #2e6eff;
   border-radius: 5px;
   font-size: 16px;
   line-height: 24px;
   color: #ffffff;
   cursor: pointer;
   :hover {
      background-color: #2361f0;
   }
   :active {
      opacity: 0.7;
   }
`
export default Card
