import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from '../layout'
import ROUTES from '../utils/constants/routes'

const Listings = React.lazy(() => import('../pages/listings'))
const DetailListings = React.lazy(() => import('../pages/detail-listing'))

const AppRoutes = () => {
   const { LISTINGS, DETAIL_LISTINGS } = ROUTES
   return (
      <Routes>
         <Route element={<Layout />}>
            <Route path={LISTINGS.path} element={<Listings />} />
            <Route path={DETAIL_LISTINGS.path} element={<DetailListings />} />
         </Route>
      </Routes>
   )
}

export default AppRoutes
