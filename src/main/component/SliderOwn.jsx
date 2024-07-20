import React from 'react'
import Card from './Card'
import useFetch from '../../others/customHook/useFetch';
import { api } from '../../others/api/api';
import './slider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Example from '../assets/Loader';
import projects from '../data/projectsData';
const title=['qwer','123','asdf','zxcv','cftg'] //demo 
function SliderOwn() {
  // const [width,setWidth]=useState()
  // ======================
  // let [x,y,dataFetched] = useFetch(api.info) //old
  // new
  // console.log(x,y,dataFetched[0]);
  let dataFetched = [projects,[]]
  // ======================
  // useEffect(() => {
    // const handleResize = () => {
    //   setWidth(window.innerWidth);
    // };
    // window.addEventListener('resize', handleResize);
  // }, []);

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

export default SliderOwn