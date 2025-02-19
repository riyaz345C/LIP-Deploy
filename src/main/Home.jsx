import React, { useEffect, useState } from 'react'
import hero from './assets/hero.avif'
import './home.css'
import SliderOwn, { settings } from './component/SliderOwn'
import Tslider from './testimonial/Tslider'
import Modal from '../popup/Modal'
import Slider from 'react-slick'

const mapData =[{
  place:"ECR",
  img:"/c",
  path:require('./data/img/ecr.jpg')
},{
  place:"Kodaikanal",
  img:"/m",
  path:require('./data/img/kodaikanal.jpg')
},
{
  place:"Courtalam",
  img:"/b",
  path:require('./data/img/courtalam.jpg')
}
]
function Home() {
  const [map,setMap] = useState('/c')
  const[url,setUrl] = useState(require('./data/img/ecr.jpg'))

  const mapChng = async(e)=>{
    try{
      // console.log(e.target.children);
      setMap(e.img)
      setUrl(e.path)
    }
    catch(err){
      console.log(err);
    }
  }
  
  const [toggle,setToggle] = useState(false)
  useEffect(() => {
    popup()
  
    return () => {
    popup()
    }
  },[])

  function popup(){
    const x = setTimeout(() => {
      setToggle(!toggle)
      console.log(10);
    }, 1000);
    return x
    
  }   
  const [pause,setPause] = useState(false)
    setTimeout(()=> {setPause(true)} , 10000)
    settings.pauseOnHover = pause
  return (
    <>
    {toggle&&<Modal tog={setToggle}/>}
    <Slider {...settings} >
      <div className="hero-img-container">
      <img src={hero} alt="" className='hero-img' />
      <section  className='hero-content'>
        <h1 style={{textAlign:'center'}}>Trusted Real Estate Solution</h1>
        <h1>For Every Lifestyle</h1>
        {/* <button onClick={()=>setToggle(true)}>tog</button> */}
      </section>
      </div>
      <div className="hero-img-container">
      <img src={require('./assets/main.avif')} alt="" className='hero-img' />
      <section  className='hero-content'>
        <h1>Your Key to Real Estate </h1>
        <h1>Success</h1>
        {/* <button onClick={()=>setToggle(true)}>tog</button> */}
      </section>
      </div>
    </Slider>
    <section className='lip-section-1'>
      <h1><span>Featured</span> Project</h1>
      <SliderOwn/>
    </section>
    <section className='lip-section-2'>
    <h1><span>Explore Our </span> Project</h1>

    <div className="map">
    <img src={url} alt={map} style={{width:"50%",height:'300px',objectFit:'cover'}}/>
    <div className="map-btn">
      <b>Select Locality</b>
      {mapData.map((e,i)=>{
        return(
          <button onClick={()=>mapChng(e)} style={{color:map===e.img?'red':'#898989'}} key={i}>{e.place}</button>
        )
      })}
    </div>
    </div>

    </section>
    <section className='lip-section-3'>
    <Tslider/>
    </section>
    </>
  )
}

export default Home
