import React from "react";
import './infra.css'; 
import about from './scheme.jpg'; 
import { FaAngleDoubleRight, FaAngleRight } from "react-icons/fa";

import SliderOwn from "../../main/component/SliderOwn";
import kodaikanal from './kodaikanal.jpeg';
import ecr from './ecrr.jpg';


// const navItems = ['Kodaikanal', 'Ecr'];

const Infra = () => {

    
    // const handleHashChange = (hash) => {
    //     console.log(hash, 'lop'); 
    //     if (hash) {
    //         const element = document.querySelector('#' + hash);
    //         if (element) {
    //             element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    //         }
    //     }
    // };

    return (
        <>
         
            <img src={about} alt="contact-bg" className="contact-bg" />

        
            <div className="semi-circle">
                <div className="element">
                    <div className="home">Home</div>
                    <FaAngleDoubleRight className='doubearrow' />
                </div>
                <div className="contact">LIP Scheme</div>
            </div>        
            <div className="infrabox">
                <div className="container-contact">
                    <div className="topp">
                        <a href="#" className='homec'>
                            <p>Home</p>
                        </a>
                        <FaAngleRight className='singlearrow' />
                        <p>Scheme</p>
                    </div>
                </div>           
                {/* LIP Scheme Introduction */}
                <h2 className="infra-title">
                    <span>LIP </span> Scheme
                </h2>
                <p className="about-whovr">
                    LIP's innovative scheme offers unparalleled opportunities for investors, providing access to prime real estate with flexible financing options and attractive returns. Join LIP today and unlock the potential for secure and rewarding investments in the property market.
                </p>
                <br />
            </div>



              {/*************************** Section Navigation Links ************/}
              {/* <div className="rectangle-box">
                    {navItems.map((item, index) => (
                        <a 
                            href={`#${item.toLowerCase()}`} 
                            className={`v${index + 1}`} 
                            key={index}
                            onClick={(e) => {
                                e.preventDefault(); 
                                handleHashChange(item.toLowerCase());
                            }}
                        >
                            {item}
                        </a>
                    ))}
                 
                </div> */}

                {/************************** Section Navigation Links End ************/}


            {/************************** Kodaikanal Projects Section ************/}
            <div className="road-project ecr-emi ">
    <h2 className="infra-title form">
        <span>Kodaikanal </span> Projects
    </h2>
    <p className="about-whovr">
    Premium plots for sale at Kodaikanal-Pannaikadu: 50% cash and 50% interest-free EMI, DTCP & RERA approved, with top amenities 
    </p>
    <br />
    <div class="card-container-new">

    <img src={kodaikanal} alt="kodaikanal" className="img-card" />
    <div class="card-row">
        <div class="card-column">
            <h2 className="card-title-1">Features</h2>
            <ul class="location-list">
        <li>   50% Cash & 50% Emi Plots for Sale" @Kodaikanal - Pannaikadu</li>
        {/* <li> Price @: Rs.999/- Per Sqft</li> */}
        <li>Area @: Start from 1500sqft</li>
        <li>Offer : Pay 50% Cash Get Registration After Pay 50% Interest Free EMI
        </li>
        <li>EMI Duration : 24 month
        </li>
        <li>Interest : 0%
        </li>
    </ul>
        </div>
        <div class="card-column">
            <h2 className="card-title-1">Amenities</h2>
            <ul class="location-list">
        <li>
        DTCP & REARA Approved</li>
        <li>Gated Community with Security </li>
        <li>Black Top Road</li>
        <li>Concrete Road </li>
        <li> EB available</li>
        <li>Kidz Play Area</li>
        <li>Park available</li>
    </ul>
        </div>
       <div class="card-column">
    <h2 className="card-title-1">Location</h2>
    <ul class="location-list">
        <li>Vathalagundu to kodaikanal on road sight</li>
        <li>Easy access to Moolaiyar River</li>
        <li>Easy access to palani</li>
        <li>Easy access to Vathalagundu</li>
        
    </ul>
</div>
    </div>
</div>
</div>





<div className="road-project ecr-emi ">
    <h2 className="infra-title form">
        <span>ECR </span> Projects
    </h2>
    <p className="about-whovr">
    Premium plots for sale at ECR-Pudhupattinam: 50% cash and 50% interest-free EMI, DTCP & RERA approved, with top amenities and prime location near New ECR-4 Way Track
    </p>
    <br />
    <div class="card-container-new">

    <img src={ecr} alt="ecr" className="img-card" />
    <div class="card-row">
        <div class="card-column">
            <h2 className="card-title-1">Features</h2>
            <ul class="location-list">
        <li>   50% Cash & 50% Emi Plots for Sale" @ECR - Pudhupattinam</li>
        <li> Price @: Rs.999/- Per Sqft</li>
        <li>Area @: Start from 1200sqft</li>
        <li>Offer : Pay 50% Cash Get Registration After Pay 50% Interest Free EMI
        </li>
        <li>EMI Duration : 24 month
        </li>
        <li>Interest : 0%
        </li>
    </ul>
        </div>
        <div class="card-column">
            <h2 className="card-title-1">Amenities</h2>
            <ul class="location-list">
        <li>
        DTCP & REARA Approved</li>
        <li>Gated Community with Arch </li>
        <li>Black Top Road</li>
        <li>Trees Avenue </li>
        <li>Swimming Pool</li>
        <li>Garden</li>
        <li>Kidz Play Area</li>
    </ul>
        </div>
       <div class="card-column">
    <h2 className="card-title-1">Location</h2>
    <ul class="location-list">
        <li>Very Close to New ECR-4 Way Track @ Just 200mtrs</li>
        <li>Mahabalipuram 15km</li>
        <li>Kovalam 30km</li>
        <li>Kelambakkam 35km</li>
        <li>Thiruvanmiyur 50km</li>
        <li>Adyar 60km</li>
    </ul>
</div>
    </div>
</div>
</div>


        

            {/************************** Featured Projects Slider ************/}
            <div className="infra">
                <h2 className="infra-title">
                    <span>Featured </span> Projects
                </h2>
                <SliderOwn />
            </div>
        </>
    );
};

export default Infra;







