import React, {useState } from 'react'
import { Outlet} from "react-router-dom";
// import Home from './Home';
// import Slider from './Slider';
// import Product from './product/Product';
import Navbar from './component/Navbar';
import Footer from '../sabana/footer/Footer';

import projects from './data/projectsData';

function Main() {

  // const [foot,setFoot] = useState(false)

  let projectData = projects

  return (
    
    <>
    <Navbar projectData={projectData}/>
    <Outlet/>
    <Footer/>


    </>
  )
}

export default Main
