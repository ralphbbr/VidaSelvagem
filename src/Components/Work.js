import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";


const Work = () => {
const workInfoData = [
{
    image :PickMeals,
    title: "Pick Meals",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

},
{
    image :ChooseMeals,
    title: "Choose How Often",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    
},
{
    image :DeliveryMeals,
    title: "Fast Deliveries",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    
}
]

  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
        <p className='primary-subheading'> Work </p>
        <h1 className='primary-heading'>How It Works </h1>
        <p className='primary-text'>
        Duis aute irure dolor in reprehenderit in voluptate velit
         esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, 
          sunt in culpa qui officia deserunt mollit anim id est 
          laborum.
        </p>
        </div>
        <div className='work-section-bottom'>   
            {workInfoData.map((data) =>(
                <div className='work-section-info'>
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt=""/>
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                        </div>
                        ))}
        </div>
    </div>
  )
}

export default Work