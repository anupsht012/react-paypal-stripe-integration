import Cancel from "./Cancel";
import PayPal from "./PayPal";
import Stripes from "./Stripes";
import Success from "./Success";


export const ROUTES = [
    { path: '/', element: <PayPal /> },
    { path: '/paypal', element: <PayPal /> },
    { path: '/stripes', element: <Stripes /> },
    { path: '/success', element: <Success /> },
    { path: '/cancel', element: <Cancel /> },
]