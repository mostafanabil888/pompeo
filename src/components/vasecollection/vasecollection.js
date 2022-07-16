import './vasecollection.css';
import datavase from '../../data/datavase.json'
import { NavLink } from 'react-router-dom';
function Vasecollection(){
    const item = datavase.map((ele) => {
        return(
            <div key={ele.id} className="parent col-md-4 col-12">
                <NavLink to={ele.url} className="child col-12">
                    <img src={ele.src} alt={ele.title} />
                    <div className="content">
                    <h6>{ele.title}</h6>
                    <span>{ele.price}</span>
                    </div>
                </NavLink>
            </div>
        )
    })
    return(
        <section className='productcollection'>
            <div className='container'>
                <div className='d-flex flex-wrap'>
                    {item}
                </div>
                <div className='btn'>
                <NavLink className='link' to='/shop'>BACK TO SHOP</NavLink>
                </div>
            </div>
        </section>
    )
}
export default Vasecollection;