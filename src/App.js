import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Cart from "./Cart";
import CartThank from './CartThank';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/cart-finish' element={<CartThank />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
