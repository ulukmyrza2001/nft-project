/* eslint-disable react/no-array-index-key */
import React from 'react'
import styled from 'styled-components'

const LoaderCard = () => {
   return Array.from({ length: 12 }).map((el, i) => <CardLoader key={i} />)
}

const CardLoader = styled.div`
   margin-bottom: 20px;
   height: 270px;
   background: lightgray;
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

export default LoaderCard
