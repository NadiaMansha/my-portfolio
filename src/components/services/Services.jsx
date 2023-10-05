import React from 'react'
import './Services.css'

export const Services = () => {
  return (
    <div className="services" id='services'>
    <div
    className='services_content'
    >
         <div
         style={
          { height:'4px', width:'100px',  backgroundColor:'white' ,marginLeft:'50px'} } >
         </div>
        <h1>Services!</h1>
        <h1>OFFER</h1>
        <p>
        I design and develop services for customers of all sizes, <br />
         specializing in creating stylish, modern websites, <br />
          web services and online stores.
        </p>
        <button>
        <a  
        style={{color:'black'}}
        href="mailto:nadia.mansha.dev@gmail.com">
            LET'S TALK
            </a>
        </button>
        </div>
        <div className="services__cards">
            <div className="services__cards__card">
                <div className="services__cards__card__icon">
                 
                    </div>
                    <h2>Web Development</h2>
                    <p>
                    I design and develop services for customers of all sizes, <br />
                        specializing in creating stylish, modern websites<br />
                         web services and online stores.
                    </p>
                    </div>
                    <div className="services__cards__card">
                <div className="services__cards__card__icon">

                    </div>
                    <h2>App Develpment</h2>
                    <p>
                    I design and develop services for customers of all sizes, <br />
                        specializing in creating stylish, modern websites, <br />
                         web services and online stores.
                    </p>
                    </div>
                    </div>





    </div>
   
  )
}
