import image1 from '../image1.jpeg'
import image2 from '../image2.jpeg'
import image3 from '../image3.jpeg'
import sociahub from '../sociahub.png'
import bookstore from '../bookstore.png'
import tastebite from '../tastebite.png'
import sociahub1 from '../sociahub1.jpeg'
import sociahub2 from '../sociahub2.jpeg'
import sociahub3 from '../sociahub3.jpeg'
import sociahub4 from '../sociahub4.jpeg'
import fyp1 from '../img1.jpeg'
import fyp2 from '../img2.jpeg'
import fyp3 from '../img3.jpeg'
import fyp4 from '../img4.jpeg'



export default[
    {
        id:1,
        type:"web",
        name:"SociaHub",
        description:"A social media app where people can share their thoughts and ideas.",
        "images":[
            sociahub
        ],
        technologies:["React","Html","Css"],
        github:"https://github.com/NadiaMansha/BusinessLandingPage",
        link:"https://sociahub.com"
    },
    {
        id:2,
        type:"web",
        name:"BookStore",
        description:"An Ecommerce website for buying books",
        "images":[
            bookstore
        ],
        technologies:["React","Html","Css","Node.js","MongoDB","Express","Redux"],
        github:"https://github.com/NadiaMansha/bookstore",
        backend:"https://github.com/NadiaMansha/Ecommercebackend",
        link:"https://stellar-genie-69ef3c.netlify.app/"

    },
    {
        id:3,
        type:"web",
        name:"Tastebite",
        description:"A food recipe app where people can search for recipes .",
        "images":[
            tastebite
        ],
        technologies:["React","Html","Css","Spoonacular API"],
        github:"https://github.com/NadiaMansha/tastebite",

        link:"https://unrivaled-torte-8859f1.netlify.app/"
    },  

    {
        id:4,
        type:"mobile",
        name:"Study Bazar",
        description:"An app to help people to buy and sell books and other study materials.",
        "images":[
            image1,
            image2,
            image3
        ],
        technologies:["Flutter","Firebase"],
        github:"https://github.com/NadiaMansha/studybazar",
        backend:"",
       

        
    },
    {
        id:5,
        type:"mobile",
        name:"Socia Hub",
        description:"An app to join and create events",
        "images":[
          
            sociahub1,
            sociahub2,
            sociahub3,
            sociahub4,
          
        ],
        
        technologies:["Flutter","Firebase","Node.js","MongoDB"],
        github:"https://github.com/NadiaMansha/event_hub",
        backend:"https://github.com/NadiaMansha/EventhubBackend",
        
    },
    {
        id:6,
        type:"mobile",
        name:"Doctor Hunt",
        description:"An app  to find doctors,pathologists and book appointments with them.",
        "images":[
            fyp1,
            fyp2,
            fyp3,
            fyp4
          
        ],
        
        technologies:["Flutter","Firebase","Node.js","MongoDB"],
        github:"https://github.com/NadiaMansha/doctors_hunt",
        backend:"https://github.com/NadiaMansha/doc_hunt_backend",
        
    },
     
]