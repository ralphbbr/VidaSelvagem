import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from 'react-icons/bs';

const About = () => {
  return ( <div className='about-section-container'>
        <div className='about-background-image-container'>
        <img src={AboutBackground} alt=""/>
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt=""/>
        </div>
        <div className='about-section-text-container'>
        <p className='primary-subheading'>  About </p>
        <h1 className='primary-heading'>
        Food Is An Important Part Of A Balanced Diet
        </h1>
        <p className='primary-text'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p className='primary-text'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <div className='about-buttons-container'>
        <button className='secondary-button'>Learn More </button>
        <button className='watch-videos-button'>
            {""}
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3fy0qSQUTHk?si=VOtWBP90641nKD8R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <BsFillPlayCircleFill/> Watch Video 
            
        </button>
        </div>
        </div>
    </div>
  )
}

export default About