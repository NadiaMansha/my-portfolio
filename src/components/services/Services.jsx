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
          web services and apps.
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
                    As a web and app developer,I excel in a variety of programming languages, including but not limited to HTML, CSS, JavaScript,
                     and a wide range of front-end and back-end technologies. This expertise enables the creation of responsive, user-friendly
                      and visually appealing websites and applications that meet both client and end-user requirements.


                    </p>
                    </div>
                    <div className="services__cards__card">
                <div className="services__cards__card__icon">

                    </div>
                    <h2>App Develpment</h2>
                    <p>
                    I am well-versed in developing mobile applications for various platforms, including iOS and Android
                     and has a strong command of app development frameworks,
                     such as Flutter.This proficiency allows for the seamless transition of ideas into functional 
                     and engaging mobile apps.
                    </p>
                    </div>
                    </div>





    </div>
   
  )
}
