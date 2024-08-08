import { Link } from "react-router-dom"
import offers, { ammenities } from "../../data/offers"
import Headline from "../Headline"
import './offer.css'
const Offers = ({projectData,click}) => {
    const amenetiesLength = projectData.amenitiesPoints.length-1
    const halfLen = Math.floor(amenetiesLength/2)
    return (
        <section className="offers-section" id="Amenities">
                {/* Features */}
                <Headline span={'Project'} div={'Amenities'} id={`Location`}/> {/* features*/}
                {amenetiesLength === -1 ?
                (<h1 style={{margin:'30px auto',gridColumn:'1/3'}}>Not Available</h1>):(<>
                <div>
                <div className='offer-box'>
                  <ul id="amenities-points1">
                    {projectData.amenitiesPoints.slice(0,halfLen+1).map((e,i) => {
                        return (
                            <li key={i}>{e}</li>
                            )
                    })}
                  </ul>
                </div>
              </div>
              <div>
                  <div className='offer-box'>
                    <ul id="amenities-points2">
                        {projectData.amenitiesPoints.slice(halfLen+1,amenetiesLength).map((e,i) => {
                            return (
                                    <li key={i}>{e}</li>
                                    )
                            })}   
                    </ul>
                  </div>
              </div></>)}
              <Link className="offer-link" to={`/infra#${projectData.projectName.split(' ')[0].toLowerCase()}`} onClick={()=>click(projectData.projectName)}>Ongoing Offers</Link>
            </section>
    )
}

export default Offers