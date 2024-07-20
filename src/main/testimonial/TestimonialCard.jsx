import React from 'react'
import './tCard.css'
function TestimonialCard({style,name,content,img}) {
  return (
    <>
    <div className="test-card" style={style}>
        <img src={img} alt="" />
        <div className="customer-info">
            <h2>{name}</h2>
            {/* <p>something down</p> */}
        </div>
        <div className="customer-message">
            {content}
            {/* some mesg over here  */}
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique temporibus tempora, quam, quasi iusto quisquam illo quia et incidunt error, inventore voluptates repellat. Temporibus quo velit minus aperiam porro. Quasi. */}
        </div>
    </div>
    </>
    )
}
export const testimonialData = [
    {
        name : `Nancy(tech park)`,
        img: require('../data/img/t1.jpg'),
        content: `I Buy The ECR Coral County Project Best Place In Affordable Price ,
         Black Top Road , Near To ECR Beach , My favorite is Tasty Groundwater `
    },
    {
        name : `Inayathullah  (NRI)`,
        img: require('../data/img/tm1.jpg'),
        content: `குற்றாலத்தில் நான் நிலம் வாங்கியுள்ளேன் எனக்கு மாதம் மாதம் 30000  வாடகை வருமானம் வந்துகொண்டிருக்கிறது.`
    },
    {
        name : `Meenakshi P.`,
        img: require('../data/img/t2.jpg'),
        content: `We were impressed by the gated community with an arch and black top roads. It offers a perfect blend of luxury and convenience.`    },
    {
        name : `Karthik N`,
        img: require('../data/img/tm2.jpg'),
        content: `The new ECR-4 way track is just 200 meters away, making it extremely accessible. The kids play area and garden are great additions for families.`
    },
    {
        name : `John D.`,
        img: require('../data/img/tm3.jpg'),
        content: `The Pannaikadu property is an absolute gem! The black top roads and street lights ensure a comfortable and secure living environment. Plus, being just 25 km from Kodaikanal, it\`s the perfect retreat away from city life.`
    },
    {
        name : `Priya S.`,
        img: require('../data/img/t3.jpg'),
        content: `We loved the gated community and the abundance of amenities, especially the garden and kid\`s play area. It\`s a fantastic place for families.`
    },
    {
        name : `Vikram L.`,
        img: require('../data/img/tm2.jpg'),
        content: `The location is fantastic, just 15 km from Mahabalipuram and close to other key areas. The amenities, especially the swimming pool and garden, are top-notch.`
    },


]
export default TestimonialCard