import React from 'react'
import styled from 'styled-components'
import { Title, Text } from '../../styles/typography/style'
import { Flex } from '../../styles/styles-for-position/style'
import { convertDateInToString } from '../../utils/helpers/general'

const InnerPageContent = ({ nft }) => {
   return (
      <>
         <LeftContent>
            <Img src={nft?.image_url} />
         </LeftContent>
         <RightContent>
            <Flex direction="column">
               <Flex gap="14px">
                  <Tag>{nft?.name}</Tag>
                  <Tag>NFT</Tag>
               </Flex>
               <Flex direction="column" margin="8px 0 30px 0" gap="20px">
                  <Flex direction="column" gap="6px" margin="15px 0 20px 0">
                     <Title color="#000000" size="20px">
                        NFT TITLE : <b>{nft?.name}</b>
                     </Title>
                     <Text>
                        Created date :{' '}
                        <b>
                           {convertDateInToString(
                              nft?.asset_contract?.created_date
                           )}
                        </b>
                     </Text>
                     <Text>
                        Schema name : <b>{nft?.asset_contract?.schema_name}</b>
                     </Text>
                     <Text>
                        Opensea version :{' '}
                        <b>{nft?.asset_contract?.opensea_version}</b>
                     </Text>
                     <Text>
                        Symbol version : <b>{nft?.asset_contract?.symbol}</b>
                     </Text>
                  </Flex>
                  <Text color="#363636">
                     {' '}
                     Description : <b>{nft?.description}</b>
                  </Text>
               </Flex>
            </Flex>
         </RightContent>
      </>
   )
}
const Img = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`
const LeftContent = styled(Flex)`
   width: 50%;
   display: flex;
   flex-direction: column;

   @media (max-width: 1000px) {
      margin: 0 auto;
      width: 100%;
   }
`
const RightContent = styled(Flex)`
   width: 50%;
   display: flex;
   flex-direction: column;
   @media (max-width: 1000px) {
      width: 100%;
   }
`
const Tag = styled.span`
   background: #fff0f6;
   border: 1px solid #ffcbe0;
   padding: 6px 8px;
   text-transform: lowercase;
`
export default InnerPageContent
