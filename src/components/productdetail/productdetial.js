import { useState,useEffect } from 'react';
import { useParams,NavLink } from 'react-router-dom'
import './productdetail.css'
import {getProductbytitle} from '../../utils/products'
function Productdetail() {
    const [quantity,setquantity] = useState(0)
    const {title} = useParams();
    const [product,setproduct] = useState([])
    useEffect(()=>{
        setproduct(getProductbytitle(title));     
    },[])
    const handlequqntity = (event) => {
        const value = event.target.value
        if(value < 0){
            return
        }
        setquantity(event.target.value)
    }
    return(
        <section className='productdetail'>
            <div className='container'>
                <div className='row'>
                    <div className='img-box col-12 col-md-6'>
                        <img src={'/'+product.src} alt={product.title} />
                    </div>
                    <div className='content-box col-12 col-md-6'>
                        <h4>PRODUCT DETAIL</h4>
                        <h2>{product.title}</h2>
                        <h5>$ {product.price} USD</h5>
                        <NavLink className='link text-decoration-none' to={`${product.catogryurl}`} >Category:<span>{product.catogrey}</span></NavLink>
                        <p>The attractions of ceramics lie partly in its contradictions. It is both difficult and easy, with an element beyond our control. It is both extremely fragile and durable. Like 'Sumi' ink painting, it does not lend itself to erasures and indecision.</p>
                        <h5>Track Number:<span>{product.id}</span></h5>
                        <h5>Quantity</h5>
                        <input  type='number' value={quantity} onChange={handlequqntity} />
                        <button>add to cart</button>
                        <h5>total :{quantity * product.price}</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Productdetail;