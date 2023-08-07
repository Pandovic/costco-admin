import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard'
import Users from './components/pages/Users'
import CreateUsers from './components/pages/CreateUsers'
import UpdateUsers from './components/pages/UpdateUsers';
import CreateProduct from './components/pages/CreateProduct';
import Products from './components/pages/Products';
import UpdateProduct from './components/pages/UpdateProduct';

function App() {

  return (
    <div className="App">
         <BrowserRouter>
          <Routes>
               <Route path='/' element={<Dashboard/>}/>
               <Route path='/products' element={<Products/>}/>
               <Route path='/users' element={<Users/>}/>
               <Route path='/createUsers' element={<CreateUsers/>}/>
               <Route path='/createProduct' element={<CreateProduct/>}/>
               <Route path='/updateUsers/:_id' element={<UpdateUsers/>}/>
               <Route path='/updateProduct/:_id' element={<UpdateProduct/>}/>
          </Routes>
      </BrowserRouter>
         
    </div>
  );
}

export default App;
