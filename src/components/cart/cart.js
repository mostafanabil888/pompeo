import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './cart.css';
import { NavLink } from 'react-router-dom';
function Cart() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='offcanves-component'>
      <div className='offcanves-btn d-flex  align-items-center' onClick={handleShow}>
        <div className='icon'><FaShoppingCart /></div>
        <span>cart</span>
      </div>
      <Offcanvas className='offcanves' show={show} onHide={handleClose}>
        <Offcanvas.Header className='offcanves-header px-4 py-3' closeButton>
                <h4>Your Cart</h4>
        </Offcanvas.Header>
        <div className='offcanves-body p-4'>
          <div className='product-detail d-flex justify-content-between'>
            <div className="img-box d-flex">
              <img src="assets/img/Red Ceramic.png"/>
              <div>
                <h6>Wine Pottery</h6>
                <h6>$ 95.00 USD</h6>
              </div>
            </div>
            <div>
                <input type="number"/>
            </div>
          </div>
        </div> 
        <div className='offcanves-footer p-4'>
            <div className='d-flex justify-content-between'>
                <span>Subtotal</span>
                <h5>$ 95.00 USD</h5>
            </div>
            <NavLink to='/checkout' className='btn w-100 text-center py-4 my-3 bg-danger'>check out</NavLink>
        </div>
      </Offcanvas>
    </div>
  );
}
export default Cart