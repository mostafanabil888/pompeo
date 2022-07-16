import Coppyright from '../components/copyright/copyright';
import Footer from '../components/footer/footer';
import Heading from '../components/heading/heading';
import NAVBAR from '../components/navbar/navbar'
import Vasecollection from '../components/vasecollection/vasecollection';
function Vasepage(){
    return(
        <>
            <NAVBAR />
            <Heading brand='vases' />
            <Vasecollection/>
            <Footer />
            <Coppyright />
        </>
    )
}
export default Vasepage;