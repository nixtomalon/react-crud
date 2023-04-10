import './App.css';
import { AddOrder } from './components/AddOrder';
import { OrderDetail } from './components/OrderDetail';
import { Orders } from './components/Orders'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import { UpdateOrder } from './components/UpdateOrder';

function App() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 m-16 border border-gray-200 flex-1 shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
      <div className='mt-3'></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Orders />}></Route>
          <Route path='/orders/create' element={<AddOrder />}></Route>
          <Route path='/orders/detail/:orderId' element={<OrderDetail />}></Route>
          <Route path='/orders/update/:orderId' element={<UpdateOrder />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
