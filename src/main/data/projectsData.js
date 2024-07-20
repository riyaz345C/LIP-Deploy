// const projects = [
//     {
//         id:"1",
//         projectName:"projectName",
//         img:"",
//         projectOverview:"loremlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  "
//     },
//     {
//         id:"2",
//         projectName:"project",
//         img:"",
//         projectOverview:"pwoqpowwwwwwwwwwwwwww qooooooooooooooooooooooo qooooooooooooooooooooooo qooooooooooooooooooooooo qooooooooooooooooooooooo qooooooooooooooooooooooo qooooooooooooooooooooooo qooooooooooooooooooooooo  qooooooooooooooooooooooo qooooooooooooooooooooooo "
//     },
// ]
// title	Plot in ECR				
// sub-title	21 lakhs onwatrds				
// type	Plot 				
// cent	22				
// sqft	9600				
// furnished	furnished				
// features	Teak wood, Coconut, Mango Trees, Gova Trees, Chapotta Trees, Amla Trees.				
// nearby	HIRUMALAI KUMARASAMY KOVIL				
let projects =  [
    {
            projectName: "Plot in ECR",
            subTitle: "22 lakhs onwatrds",
            box: [
                {id: {numberInt: "1"}, head: "Type", content: "Plot/Cottage",},
                {id: {numberInt: "2"}, head: "Location", content: "ECR(Pudupattinam)",},
                {id: {numberInt: "3"}, head: "Sqft", content: "1200",},
                {id: {numberInt: "4"}, head: "Furnished", content: "furnished",},
                // {id: {numberInt: "5"}, head: "Marah Doyle", content: "Noelani Roberts", _id: {oid: "66473f5a63fd348af9a91a63"}},
                // {id: {numberInt: "6"}, head: "Tanisha Cain", content: "Alika Daugherty", _id: {oid: "66473f5a63fd348af9a91a64"}}
            ],
            projectOverview: "  The Income Cottage Sale project, located in the prime area of East Coast Road (ECR), Chennai, offers an attractive investment opportunity with a guaranteed 12% annual return. Priced at 22 lakhs, the project includes a 1200 sqft plot with a 400 sqft built-up area. This development boasts comprehensive facilities such as 24/7 service, a swimming pool, a fitness center, a restaurant, a conference hall, a kids' play park, and a spa & wellness center. These amenities ensure a luxurious and comfortable living experience for residents and a high potential for rental income. The strategic location in ECR provides excellent connectivity, serene surroundings, and proximity to major attractions and commercial hubs, making it an ideal choice for both vacationers and long-term residents. The combination of affordable pricing, lucrative returns, and extensive facilities makes this project a highly appealing option for investors looking to diversify their portfolio and secure a steady income stream. With its well-planned infrastructure and premium amenities, the Income Cottage Sale project stands out as a promising investment in Chennai's real estate market.  ",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.373369871729!2d79.5753025!3d10.4712041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53616f4c9ea6dd%3A0xc50f0832755a9625!2sEast%20Coast%20Rd!5e0!3m2!1sen!2sin!4v1721471055183!5m2!1sen!2sin",

            nearByAttraction: [{
                title: "Mahabalipuram (Mamallapuram)",
                points: [
                    { point: "Shore Temple",},
                    { point: "Pancha Rathas",},
                    { point: "Crocodile Bank (North)",},
                    { point: "Kovalam (Covelong) Beach",},
                    { point: "Muttukadu Backwaters",},
                    { point: "Bay of Bengal",},
                ]
            }],

            projectsAmmenities: [
                {id: {numberInt: "1"}, img: require('./img/swimming-poo.jpg'), content: "Swimming Pool", },
                {id: {numberInt: "2"}, img: require('./img/fitness-center.jpg'), content: "Fitness Center", },
                {id: {numberInt: "2"}, img: require('./img/kidsplay-park.jpg'), content: "Kidys Play", },
       
                {id: {numberInt: "2"}, img: require('./img/resturant.jpg'), content: "Resturant", },
                {id: {numberInt: "2"}, img: require('./img/spa-wellness.jpg'), content: "Spa & Wellness", },
                {id: {numberInt: "2"}, img: require('./img/meeting-hall.jpg'), content: "Meeting Hall", }

            ],

            projectPlan: require('./img/ecr.jpg'),
            sitemap : require('./img/sitemap.jpg'),

            faq: [
                {id: "1", question: "What is the Income Cottage Sale project?",
                 answer: "The Income Cottage Sale project is a real estate investment opportunity located on East Coast Road (ECR) in Chennai. It features a 1200 sqft plot with a 400 sqft built-up area, offering a guaranteed 12% annual return on investment. The project is designed to provide luxurious and comfortable living with extensive amenities.",
                },
                {id: "1", question: "What amenities are included in the Income Cottage Sale project?",
                answer: "The project includes a range of comprehensive facilities such as 24/7 service, a swimming pool, a fitness center, a restaurant, a conference hall, a kids' play park, and a spa & wellness center. These amenities are aimed at providing a luxurious and comfortable living experience for residents.",
               },
               {id: "1", question: "What is the cost and size of the plot in the Income Cottage Sale project?",
               answer: "The cost of the plot in the Income Cottage Sale project is priced at 22 lakhs. The plot size is 1200 sqft, and it includes a 400 sqft built-up area.",
              },
              {id: "1", question: "What makes the location of the Income Cottage Sale project ideal?",
               answer: "The Income Cottage Sale project is strategically located on East Coast Road (ECR) in Chennai, which provides excellent connectivity, serene surroundings, and proximity to major attractions and commercial hubs. This makes it an ideal choice for both vacationers and long-term residents.",
              },
              {id: "1", question: "Why is the Income Cottage Sale project a good investment opportunity?",
               answer: "The Income Cottage Sale project offers an attractive investment opportunity due to its affordable pricing, guaranteed 12% annual return, and extensive premium amenities. The combination of these factors, along with the well-planned infrastructure and strategic location, makes it a highly appealing option for investors looking to diversify their portfolio and secure a steady income stream.",
              },
            ],
            
        },
        {
            projectName: "Plot in Kodaikanal",
            subTitle: "36 lakhs onwatrds",
            box: [
                {id: {numberInt: "1"}, head: "Type", content: "Plot/Cottage",},
                {id: {numberInt: "2"}, head: "Location", content: "Pannaikadu",},
                {id: {numberInt: "3"}, head: "Sqft", content: "1500",},
                {id: {numberInt: "4"}, head: "Furnished", content: "furnished",},
                // {id: {numberInt: "5"}, head: "Marah Doyle", content: "Noelani Roberts", _id: {oid: "66473f5a63fd348af9a91a63"}},
                // {id: {numberInt: "6"}, head: "Tanisha Cain", content: "Alika Daugherty", _id: {oid: "66473f5a63fd348af9a91a64"}}
            ],
            projectOverview: "The Kodaikanal to Pannaikadu DTCP EMI Plots project offers prime 1500 sqft plots for sale at 36 lakhs. Located on the Vathalagundu to Kodaikanal road, this gated community features 24/7 security, kids' play area, and park, with easy access to Moolaiyar River, Kodaikanal, Palani, and Vathalagundu. Buyers benefit from a one-time investment with a 10-year monthly rental return of 1%, maintenance-free ownership, and four free stay days per month. The property is DTCP approved, ensuring safety and security, with concrete roads and electricity available. Pay 50% upfront to register and the balance with interest-free EMI.",
            location: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125631.75064004274!2d77.52610365629593!3d10.262210842565889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b075c3cdfe1c0bb%3A0x176e79923f7a8f21!2sPannaikadu%2C%20Tamil%20Nadu%20624210!5e0!3m2!1sen!2sin!4v1721471118270!5m2!1sen!2sin",

            nearByAttraction: [
                {
                title: "Kodaikanal",
                points: [
                    { point: "Silver Cascade Falls (Near Kodaikanal)",},
                    { point: "Dolphin's Nose (Near Vattakanal)",},
                    { point: "Pine Forest (On the Way to Kodaikanal)",},
                    { point: "Poombarai Village View",},
                ]
            },
                {
                title: "Batalagundu",
                points: [
                    { point: "Palani Hills Wildlife Sanctuary",},
                    { point: "Muthu Mari Amman Temple",},
                    { point: "Kamarajar Dam",},
                    
                ]
            },
        ],

            projectsAmmenities: [
               {id: {numberInt: "1"}, img: require('./img/swimming-poo.jpg'), content: "Swimming Pool", },
                {id: {numberInt: "2"}, img: require('./img/fitness-center.jpg'), content: "Fitness Center", },
                {id: {numberInt: "2"}, img: require('./img/kidsplay-park.jpg'), content: "Kidys Play", },
         
                {id: {numberInt: "2"}, img: require('./img/resturant.jpg'), content: "Resturant", },
                {id: {numberInt: "2"}, img: require('./img/spa-wellness.jpg'), content: "Spa & Wellness", },
                {id: {numberInt: "2"}, img: require('./img/meeting-hall.jpg'), content: "Meeting Hall", }
            ],//imgae

            projectPlan: require('./img/kodaikanal.jpg'),//image
            sitemap : require('./img/sitemap.jpg'),

            faq: [
                {id: "1", question: "What is the Kodaikanal to Pannaikadu DTCP EMI Plots project?",
                 answer: "The Kodaikanal to Pannaikadu DTCP EMI Plots project offers 1500 sqft plots for sale at 36 lakhs. Located on the Vathalagundu to Kodaikanal road, this gated community includes amenities like security, a kids' play area, and park, with easy access to the Moolaiyar River, Kodaikanal, Palani, and Vathalagundu. Buyers can pay 50% upfront and the balance through interest-free EMI.",
                },
                {id: "1", question: "What are the payment terms for purchasing a plot?",
                 answer: "The payment terms for purchasing a plot in this project include paying 50% upfront to register and the remaining 50% through interest-free EMI.",
                },
                {id: "1", question: "What benefits do buyers receive with this investment?",
                 answer: "Buyers receive a monthly rental return of 1% for 10 years, maintenance-free ownership, and four free stay days per month reserved for the owner.",
                },
                {id: "1", question: "What amenities are provided within the community?",
                 answer: " The community features 24/7 security, a kids' play area, a park, concrete roads, and electricity (EB) availability. It is a DTCP-approved, gated community ensuring safety and security.",
                },
                {id: "1", question: "What makes the location of these plots desirable?",
                 answer: "The plots are desirably located with easy access to Vathalagundu, Kodaikanal, Palani, and the Moolaiyar River, offering serene surroundings and proximity to essential services and tourist attractions.",
                }
            ],
            
        },
        {
            projectName: "Plot in Courtallam",
            subTitle: "34 lakhs onwatrds",
            box: [
                {id: {numberInt: "1"}, head: "Type", content: "Polt/Cottage",},
                {id: {numberInt: "2"}, head: "Location", content: "Courtallam(Panpoli)",},
                {id: {numberInt: "3"}, head: "Sqft", content: "9600",},
                {id: {numberInt: "4"}, head: "Furnished", content: "furnished",},
                // {id: {numberInt: "5"}, head: "Marah Doyle", content: "Noelani Roberts", _id: {oid: "66473f5a63fd348af9a91a63"}},
                // {id: {numberInt: "6"}, head: "Tanisha Cain", content: "Alika Daugherty", _id: {oid: "66473f5a63fd348af9a91a64"}}
            ],
            projectOverview: "The Income Property for Sale in Coutrallam offers a highly profitable investment opportunity with a 34 lakh price tag for a cottage villa. This property guarantees a monthly rental income of ₹34,000 or more for the next 12 years, ensuring a steady and attractive return on investment. The villa is nestled in a lush garden featuring 52 varieties of trees and an herbal farm, adding to the property's charm and value. Coutrallam, known for its serene environment and natural beauty, enhances the appeal of this investment. With its combination of reliable rental income and rich natural surroundings, this property stands out as a lucrative investment option.",
            location: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356778.47788598423!2d77.10484780957812!3d8.88965879958944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06811adea8d775%3A0x2c535132cebbf5a!2sPanboli%2C%20Tamil%20Nadu%20627807!5e0!3m2!1sen!2sin!4v1721471177328!5m2!1sen!2sin',
            nearByAttraction: [{
                title: "Near By Attraction",
                points: [
                    { point: "Tenkasi",},
                    { point: "Vettaiyaadu Village",},
                    { point: "Courtallam Waterfalls",},
                    { point: "Papanasam (Tirunelveli)",},
                    { point: "Nellaiappar Temple (Tirunelveli)",},
                    { point: "Kalakad Mundanthurai Tiger Reserve",},
                ]
            }],

            projectsAmmenities: [
               {id: {numberInt: "1"}, img: require('./img/swimming-poo.jpg'), content: "Swimming Pool", },
                {id: {numberInt: "2"}, img: require('./img/fitness-center.jpg'), content: "Fitness Center", },
                {id: {numberInt: "2"}, img: require('./img/kidsplay-park.jpg'), content: "Kidys Play", },
         
                {id: {numberInt: "2"}, img: require('./img/resturant.jpg'), content: "Resturant", },
                {id: {numberInt: "2"}, img: require('./img/spa-wellness.jpg'), content: "Spa & Wellness", },
                {id: {numberInt: "2"}, img: require('./img/meeting-hall.jpg'), content: "Meeting Hall", }
            ],//imgae

            projectPlan: require('./img/courtalam.jpg'),//image
            sitemap : require('./img/courtlam-sitemap.jpg'),

            faq: [
                {id: "1", question: "What is included in the Income Property for Sale in Coutrallam?",
                 answer: "The property includes a cottage villa priced at 34 lakhs, with a garden featuring 52 varieties of trees and an herbal farm. The investment guarantees a monthly rental income of ₹34,000 or more for 12 years.",
                },
                {id: "1", question: "What is the guaranteed rental income for this property?",
                answer: "The property guarantees a monthly rental income of ₹34,000 or above for the next 12 years.",
               },
               {id: "1", question: "What is the price of the property?",
               answer: "The price of the Income Property for Sale in Coutrallam is 34 lakhs.",
              },
              {id: "1", question: "What features enhance the value of this property?",
              answer: "The property's value is enhanced by its lush garden with 52 varieties of trees, an herbal farm, and its location in Coutrallam, known for its serene environment and natural beauty.",
             },
             {id: "1", question: "How long is the rental income guaranteed?",
             answer: "The rental income is guaranteed for 12 years, providing a consistent and attractive return on investment.",
            }
            ],
            
        },
        {
            projectName: "Plot in Ulundurpet",
            subTitle: "4 lakhs onwards",
            box: [
                {id: {numberInt: "1"}, head: "Type", content: "Plot",},
                {id: {numberInt: "2"}, head: "Location", content: "Uluthurpet(NH)",},
                {id: {numberInt: "3"}, head: "Sqft", content: "9600",},
                {id: {numberInt: "4"}, head: "Furnished", content: "furnished",},
                // {id: {numberInt: "5"}, head: "Marah Doyle", content: "Noelani Roberts", _id: {oid: "66473f5a63fd348af9a91a63"}},
                // {id: {numberInt: "6"}, head: "Tanisha Cain", content: "Alika Daugherty", _id: {oid: "66473f5a63fd348af9a91a64"}}
            ],
            projectOverview: "This Buy 1 Get 1 Free plot sale in Ulundurpettai, near Veppur, offers a unique opportunity to acquire two 1200 sqft plots for the price of one at just 4 lakhs. Conveniently located just 1.5 km from the Chennai to Trichy Highway and 2 km from Nallur, with additional access to the Kadalur to Oshur Highway, the plots are well-connected for ease of travel. An EB line is available, enhancing the property's utility. This offer provides exceptional value, combining strategic location with the benefit of acquiring two plots for the price of one.",
            location: "Damian Dalton",

            nearByAttraction: [{
                title: "Features",
                points: [
                    { point: "Teak wood, Coconut",},
                    { point: "Mango Trees",},
                    { point: "Gova Trees",},
                    { point: "Chapotta Trees",},
                    { point: "Amla Trees",},
                ]
            }],

            projectsAmmenities: [
               {id: {numberInt: "1"}, img: require('./img/swimming-poo.jpg'), content: "Swimming Pool", },
                {id: {numberInt: "2"}, img: require('./img/fitness-center.jpg'), content: "Fitness Center", },
                {id: {numberInt: "2"}, img: require('./img/kidsplay-park.jpg'), content: "Kidys Play", },
         
                {id: {numberInt: "2"}, img: require('./img/resturant.jpg'), content: "Resturant", },
                {id: {numberInt: "2"}, img: require('./img/spa-wellness.jpg'), content: "Spa & Wellness", },
                {id: {numberInt: "2"}, img: require('./img/meeting-hall.jpg'), content: "Meeting Hall", }
            ],//imgae

            projectPlan: require('./img/resturant.jpg'),//image
            sitemap : require('./img/sitemap.jpg'),
            faq: [
                {id: "1", question: "What is the offer for the plots in Ulundurpettai?",
                 answer: "The offer is Buy 1 Get 1 Free, where you purchase one 1200 sqft plot for 4 lakhs and receive an additional 1200 sqft plot for free.",
                },
                {id: "1", question: "What is the total area of the plots available?",
                answer: "The offer includes two plots, each 1200 sqft, totaling 2400 sqft.",
               },
               {id: "1", question: " What are the key location details for the plots?",
               answer: "The plots are situated 1.5 km from the Chennai to Trichy Highway, 2 km from Nallur, and 1.5 km from the Kadalur to Oshur Highway.",
              },
              {id: "1", question: "Is there access to utilities on the property?",
              answer: "Yes, the plots have access to an EB line, providing electricity to the property.",
             },
             {id: "1", question: "What is the price for the plots?",
             answer: "The price for the two plots is 4 lakhs, following the Buy 1 Get 1 Free offer.",
            }
            ],
            
        },
    ]

export default projects