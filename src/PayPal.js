import React from 'react'
import { useState, useEffect } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './App.css';
const PayPal = () => {
    const [show, setShow] = useState(false)
    const [success, setSuccess] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [orderId, setOrderId] = useState(false)

    const CreateOrder = (data, actions) => {
        return actions.order.create({
            intent: 'CAPTURE',
            purchase_units: [{
                description: 'cool looking glass',
                amount: {
                    currency_code: 'USD',
                    value: 20.00
                }
            }],
            application_context: {
                shipping_preference: 'NO_SHIPPING'
            }
        })
            .then((orderId) => {
                setOrderId(orderId)
                return orderId
            })
    }
    const OnApprove = async (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true)
        })
    }

    const onError = (data, actions) => {
        setErrorMessage('Error aayo')
    }

    useEffect(() => {
        {success && (
            alert('Payment Successful')
        )}
    }, [success])
    
console.log(1,orderId);
console.log(2,success);
console.log(3,errorMessage);
    return (
        <div className="App">
        <div className="">
            <PayPalScriptProvider options={{ "client-id": "Ae5lWRD0_5U6IH71Nsd358b5QVXVPl1ryXPJdYSLQHRaQT9y9sRioSYDgtyOS9UW2XRva07YayZtshYH" }}>
               <div> <button onClick={() => setShow(true)}>Buy</button></div>
                <div className='paypalButton'>
                {show ? 
                <PayPalButtons
                    createOrder={CreateOrder}
                    onApprove={OnApprove}
                    onError={onError}
                    style={{
                        layout: 'vertical',
                        color: 'blue',
                        shape: 'pill',
                        label: 'paypal'
                    }}
                />
                 : null}

                </div>
             

            </PayPalScriptProvider>
            </div>
        </div>
    );
}


export default PayPal