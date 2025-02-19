import {  HashRouter, Route, Routes,  } from 'react-router-dom';

import Main from './main/Main';
// import Project from './others/projects/Project';
import Home from './main/Home';
// import Product from './main/product/Product';
import ProductCopy from './main/product/ProductCopy';
import Contact from './sabana/contact/Contact';
import Login from './sabana/login/Login';
import Registration from './sabana/registration/Registration';
import About from './sabana/about/About';
import Infra from './sabana/infra/Infra';
import Vendorlogin from './sabana/vendorlogin/Vendorlogin';
import Gallery from './sabana/gallery/Gallery';
import {  useState } from 'react';
import ScrollTop from './ScrollTop';

// admin routes 
// import AdminLogin from './adminPanel/AdminLogin';
// import Account from './adminPanel/Account';
// import AdminRoutes from './adminPanel/admin-routes/AdminRoutes';
// import AddForm from './adminPanel/UI-componets/addProject/AddForm';
// import { UpdateForm } from './adminPanel/UI-componets/updateProject/UpdateForm';

// import Main from './slick/Main';

function App() {
  const [scrolltop]  = useState(true)
  return (
    <>
    
    <HashRouter>
      <ScrollTop bool={scrolltop}/>
    <Routes>
      <Route exact path='' element={<Main/>} >
          <Route  path='' element={<Home/>}/>
          {/* <Route path='product' element={<Product/>}/> */}
          <Route path='project/:id' element={<ProductCopy />}/>
          {/* <Route path='project/:id' element={<Project/>}/> */}
          <Route path='contact' element={<Contact/>}/> 
          <Route path='login' element={<Login/>}/> 
          <Route path='registration' element={<Registration/>}/> 
          <Route path='about' element={<About/>}/> 
          <Route path='infra' element={<Infra/>}/> 
          <Route path='vendorlogin' element={<Vendorlogin/>}/>  
          <Route path='gallery' element={<Gallery/>}/>
      </Route>
      {/* <Route path='admin' element={<AdminRoutes/>}>
          <Route path='' element={<AdminLogin/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='add' element={<AddForm/>} />
          <Route path='project/:id' element={<Project/>}/>
          <Route path='Update/:id' element={<UpdateForm/>}/>
      </Route> */}
    </Routes>
    </HashRouter>
    </>
  );
}

export default App;
