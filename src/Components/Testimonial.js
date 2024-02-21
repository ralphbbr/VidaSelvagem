import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png";
import {AiFillStar} from "react-icons/ai";

const Testimonial = () => {
  return <div className='work-section-wrapper'>
<div className='work-section-top'>
<p className='primary-subheading'>Tertimonial </p>
<h1 className='primary-heading'> What They Are Saying </h1>
<p className='primary-text'>
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
</p>
</div>
<div className='testimonial-section-bottom'>
    <img src={ProfilePic} alt=""/>
    <p>
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
    </p>
    <div className='testimonials-stars-container'>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
        <AiFillStar/>
    </div>
    <h2>John Doe</h2>



</div>
  </div>
  
}

export default Testimonial