import React from 'react'
import { Route, Routes } from 'react-router'
import Cancel from './Cancel'
import PayPal from './PayPal'
import { ROUTES } from './Routes'
import Stripes from './Stripes'
import Success from './Success'

export const AppRoutes = () => {
    return (
        <Routes>

            <Route path="/" element={<PayPal />} exact={true} />
            <Route path="/paypal" element={<PayPal />} exact={true} />
            <Route path="/stripes" element={<Stripes />} exact={true} />
            <Route path="/cancel" element={<Cancel />} exact={true} />
            <Route path="/success" element={<Success />} exact={true} />

        </Routes>
    )

}


