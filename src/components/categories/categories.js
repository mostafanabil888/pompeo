import { useState } from "react";
import { NavLink } from "react-router-dom";
import './categories.css'
function CATEGORIES() {
    const [data] = useState([
        {   
            "id" : 1,
            "url" : "/vases",
            "title" : "vases",
            "src" : 'assets/img/vases.png',
            "alt" : 'vase',
            "class" : "parent-one"
        },
        {
            "id" : 2,
            "url" : "/mugs",
            "title" : "mugs",
            "src" : 'assets/img/mugs.png',
            "alt" : 'mug',
            "class" : "parent-two"
        },
        {
            "id" : 3,
            "url" : "/plates",
            "title" : "plates",
            "src" : 'assets/img/plates.png',
            "alt" : 'plate',
            "class" : "parent-three"
        }
    ]);
    const categories = data.map((el)=>{   
        return (
                <div key={el.id} className="parent col-md-3 col-12">
                    <NavLink  to={el.url} className={el.class}>
                        <div className="child text-center">
                            <img src={el.src} alt={el.alt} />
                            <h3 className="title">{el.title}</h3>
                        </div>
                    </NavLink>
                </div>   
        );   
    });  
    return (
        <section className="categories">
            <div className="container">
                <div className="text-center categories-header">
                    <h3>PRODUCT CATEGORIES</h3>
                    <h2>Porcelain <span>&</span> Pottery</h2>
                </div>
                <div  className="categories-body  d-flex flex-wrap justify-content-between align-items-center">
                    {categories}
                </div>
                 
                <div className="categories-footer row my-sm-5">
                    <div className=" col-md-6 col-12 my-sm-5">
                        <h2>Hand GraftedPottery since 1990</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                    </div>
                    <div className=" col-md-6 col-12 my-sm-5">
                        <h2>We Provide PremiumPottery Produts</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus posuere.</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
  
  export default CATEGORIES;