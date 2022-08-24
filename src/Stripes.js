import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51LZVDrDObUDvxchjLsdXizwQ6VTko5ojOWnxz9IlpajZqMSi4M2ZkreEU1NPWLVeDEvFyAWBwnuBTK7hK5upMwNt0000NGGJZV');
  }

  return stripePromise;
};

// price_1LZs3WDObUDvxchjxWJUZegK -Gold 
// price_1LZs9ZDObUDvxchjWXTHUO2I -platinium
// price_1LZsAQDObUDvxchjfOlr6Qpj - diamond
// price_1LZsBFDObUDvxchj1Hr955D8 -titanium

const Stripes=()=> {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const [priceValue, setPriceValue] = useState('');

  const item = {
    price:priceValue ,
    quantity: 1
  };
 
  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);
  return (

<div style={{display:"flex" , marginTop:'5rem'}}>
<div><button  onClick={()=>{setPriceValue('price_1LZs3WDObUDvxchjxWJUZegK'); redirectToCheckout() }  }>Gold</button></div>
<div><button  onClick={()=>{setPriceValue('price_1LZs9ZDObUDvxchjWXTHUO2I'); redirectToCheckout()}  }>platinium</button></div>
<div><button  onClick={()=>{setPriceValue('price_1LZsAQDObUDvxchjfOlr6Qpj'); redirectToCheckout()}  }>diamond</button></div>
<div><button  onClick={()=>{setPriceValue('price_1LZsBFDObUDvxchj1Hr955D8'); redirectToCheckout()}  }>titanium</button></div>

</div>
    // <button disabled={isLoading} onClick={redirectToCheckout}> 
    //   Checkout
    // </button>
  );
}

export default Stripes