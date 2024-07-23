import React from 'react'
import Card from './Card'

import './slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Example from '../assets/Loader';
import projects from '../data/projectsData';

function SliderOwn() {
  
  let dataFetched = [projects,[]]
  

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        // slidesToShow: ((width<800)? 1 : ((width<888)? 2 : 3) ),  
        slidesToShow: 2,  
        slidesToScroll: 1,
        // autoplay:true, 
        autoplaySpeed:2000,
        pauseOnHover:true,
        responsive:[
          {
            breakpoint:890,
            settings:{
              slidesToShow:1
            }
          },
          {
          breakpoint:800,
          settings:{
            slidesToShow:1
          }
        },
      ]
      };
    
  return (
    <>
    <Slider {...settings}>
      {/* {dataFetched?dataFetched[0].projects.map((e,i)=>{ */}{/*old */}
      {dataFetched?dataFetched[0].map((e,i)=>{ //new
        return(
            <Card title={e.projectName} img={e.projectPlan} 
            projectOverview={e.projectOverview} path={e.projectName} key={i}/>
            /*1.project name 2.img
              3.projectoverview 3path */
          )
        }):<><Example/></>
      }
    </Slider>
    </>
  )
}
export const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  // slidesToShow: ((width<800)? 1 : ((width<888)? 2 : 3) ),  
  slidesToShow: 1,  
  slidesToScroll: 1,
  autoplay:true, 
  autoplaySpeed:2000,
  pauseOnHover:false,
  arrows:false,
  fade:true
};
export default SliderOwn