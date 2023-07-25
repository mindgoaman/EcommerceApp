import logo from './logo.svg';
import './res/styles/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './webpages/HomePage';
import About from './webpages/AboutPage';
import Contact from './webpages/ContactPage';
import Products from './webpages/ProductsPage';
import SingleProduct from './webpages/SingleProductPage';
import Cart from './webpages/CartPage';
import ErrorPage from './webpages/ErrorPage';

function App() {
  return (
      <Router>
           <Routes>
               <Route path='/' element={<Home/>}/>
               <Route path='/about' element={<About/>}/>
               <Route path='/contact' element={<Contact/>}/>
               <Route path='/products' element={<Products/>}/>
               <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
               <Route path='/cart' element={<Cart/>}/>
               <Route path='*' element={<ErrorPage/>}/>
           </Routes>
      </Router>
  );
}

export default App;
