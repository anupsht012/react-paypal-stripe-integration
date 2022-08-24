import React from 'react'
import Cancel from './Cancel'
import PayPal from './PayPal'
import { ROUTES } from './routes'
import Stripes from './Stripes'
import Success from './Success'
import {Routes,Route} from 'react-router-dom';
export const AppRoutes = () => {
    return (

        <Routes>
    {/* {ROUTES.map((route,key)=>{
        <Route path={route.path} element={route.element}/>
    })} */}
            <Route path="/" element={<PayPal />} exact={true} />
            <Route path="/paypal" element={<PayPal />} exact={true} />
            <Route path="/stripes" element={<Stripes />} exact={true} />
            <Route path="/cancel" element={<Cancel />} exact={true} />
            <Route path="/success" element={<Success />} exact={true} />

        </Routes>
    )

}


