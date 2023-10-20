import image1 from '../image1.jpeg'
import image2 from '../image2.jpeg'
import image3 from '../image3.jpeg'
import sociahub from '../sociahub.png'
import eventhub from '../eventhub.png'
import bookstore from '../bookstore.png'



export default[

    {
        id:1,
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
        id:2,
        type:"mobile",
        name:"Event Hub",
        description:"An app to join and create events",
        "images":[
            eventhub
        ],
        technologies:["Flutter","Firebase","Node.js","MongoDB"],
        github:"https://github.com/NadiaMansha/event_hub",
        backend:"https://github.com/NadiaMansha/event_hub_backend",
       

        
    },
    {
        id:3,
        type:"web",
        name:"SociaHub",
        description:"A social media app where people can share their thoughts and ideas.",
        "images":[
            sociahub
        ],
        technologies:["React","Html","Css"],
        github:"https://github.com/NadiaMansha/sociahub",
        link:"https://sociahub.com"
    },
    {
        id:4,
        type:"web",
        name:"BookStore",
        description:"An Ecommerce website for buying books",
        "images":[
            bookstore
        ],
        technologies:["React","Html","Css","Node.js","MongoDB","Express","Redux"],
        github:"https://github.com/NadiaMansha/bookstore",
        backend:"https://github.com/NadiaMansha/bookstore_backend",
        link:"https://stellar-genie-69ef3c.netlify.app/"

    }    
]