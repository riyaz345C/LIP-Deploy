import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { FaAngleRight } from 'react-icons/fa6'

import ProductInfo from '../../others/projects/components/ProductInfo'
import './product.css'
import Headline from './Headline'
import LocationAdvantage from './LocationAdvantage'
import ProductPlan from './ProductPlan'
import Faq from '../component/FAQ/Faq'
import projects from '../data/projectsData'
// import ProjectHighSliderv2 from '../../others/projects/components/ProjectHighSliderv2'
import { settings } from '../component/SliderOwn'
// import offers, { ammenities } from '../data/offers'
import Offers from './offer&ammenities/Offers'

let x = [ 'Location','Features', 'Amenities', 'Plans' ,'FAQ’s']

function ProductCopy() {
  const settingsCopy = {...settings,fade:false}
  
  const handleHashChange = (e) => {
    const hash = e
    console.log(e,'lop');
    if (hash) {
      const element = document.querySelector('#'+hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' ,block: 'center'});
      }
    }
  };

  const params = useParams();
  const paramId = params.id.split('%20').join(' ');
  let projectData = projects.filter(e=>e.projectName === paramId);


  if(!projectData.length){
    return <h1 style={{margin:'20vh 0',textAlign:'center'}}>404 Error Not Found</h1>
  }

  projectData = projectData[0]
  console.log(projectData);

  return (
      <>
        <section className='product-section-1'>
          <Slider {...settingsCopy}>
            {projectData.projectPlanSlider.map((e,i) =><div className="img" key={i}>
                <img src={e} alt="" />
            </div>)}
          </Slider> 
            <div className="product-info">
                <ProductInfo projectName={projectData.projectName} 
                subtitle={projectData.subTitle}
                boxArray={projectData.box} click={()=>handleHashChange('Overview')}/>  
            </div>
            <div className="nav">
              {x.map((value,i)=>{
                return(
                  <Link to={`#${value}`} onClick={()=>handleHashChange(value)}
                  style={{cursor:'pointer'}} key={i}>{value}</Link>
                )
              })}
            </div>
        </section>

        <section className='product-section-2'>
            <div className="path">
                <span>Home</span> 
                <FaAngleRight color='#000'/>
                <span>Projects</span> 
                <FaAngleRight color='#000'/>
                <span>{projectData.projectName}</span>
            </div>
            {/* <h1>{projectData.projectName}</h1> */}
            <Headline span={'Project'} div={'Overview'} id={`Overview`}/> {/*Overview */}
            <p>{projectData.projectOverview}</p>
        </section>

        <section className='product-section-3'>
            <Headline span={'Location'} div={'Advantage'} id={`Location`}/> {/* Location */}
            <iframe title='siteLocation'
            src={ projectData.location?.startsWith('http')?projectData.location: `https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d124419.90613910851!2d80.0711615434066!3d12.964040045692853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3a525e37fcf81ea3%3A0xfd16fdb72e898775!2s2nd%20Floor%2C%2059%2C%20Dharga%20Rd%2C%20Zamin%20Pallavaram%2C%20Rajaji%20Nagar%2C%20Pallavaram%2C%20Chennai%2C%20Tamil%20Nadu%20600043!3m2!1d12.964053!2d80.1535634!5e0!3m2!1sen!2sin!4v1714219410750!5m2!1sen!2sin`} 
            style={{border:0,width:'100%',height:'400px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className="location-cards">
                {/* Features */}
              <Headline span={'Project'} div={'Feature'} id={`Location`}/> {/* features*/}
                {projectData.nearByAttraction.map(e => {
                  return <LocationAdvantage title={e?.title} data={e?.points.map(e=>e.point)}/>
                })}
            </div>
        </section>


           {/*Highlights */}
        {/* <section className='section project-highlights' id='Highlights' >
            <Headline span={`Project`} div={`Highlights`}/>
            <ProjectHighSliderv2 ammArray={projectData.projectsAmmenities}/>
        </section> */}
        <Offers projectData={projectData} click={handleHashChange}/>
            

        <ProductPlan img={projectData.sitemap}/> {/*Plans */}

        <section className='section faq' id='FAQ’s'> {/*Faq*/}
            <Headline span={'Frequently Asked'} div={`Question`}/>
            {projectData.faq.map((e,i)=>{
              return(
                <Faq key={i} question={e.question} answer={e.answer}/>
              )
            })}
        </section>
        
      </>
    )
}

export default ProductCopy;
