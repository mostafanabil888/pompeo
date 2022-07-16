import react from 'react'
import Coppyright from '../components/copyright/copyright';
import Footer from '../components/footer/footer';
import Heading from '../components/heading/heading';
import NAVBAR from '../components/navbar/navbar';
import Checkout from '../components/checkout/checkout';
function Checkoutpage () {
    return(
        <>
            <NAVBAR />
            <Heading brand='check-out' />
            <Checkout />
            <Footer />
            <Coppyright />
        </>
    )
}
export default Checkoutpage