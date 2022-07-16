import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Aboutpage from './pages/aboutpage';
import Contactpage from './pages/contactpage';
import Homepage from './pages/homepage';
import Mugpage from './pages/mugpage';
import Platepage from './pages/platepage';
import Productpage from './pages/productpage';
import Shoppage from './pages/shoppage';
import Vasepage from './pages/vasespage';
import Checkoutpage from './pages/checkoutpage';
import Shop from './components/shop/shop';

function App() {

  return (
    <BrowserRouter>
    
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<Shoppage />} />
          <Route exact path='/about' element={<Aboutpage />} />
          <Route exact path='/contact' element={<Contactpage />} />
          <Route exact path='/vases' element={<Vasepage />} />
          <Route exact path='/mugs' element={<Mugpage />} />   
          <Route exact path='/plates' element={<Platepage />} />
          <Route exact path='/shop' element={<Shop />} />
          <Route exact path='/product/:title/' element={<Productpage />} />
          <Route exact path='/checkout' element={<Checkoutpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
