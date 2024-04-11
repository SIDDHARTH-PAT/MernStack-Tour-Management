import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Calculate and be prepared for the weather at the place you are visiting."
    },    
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Best and verified tour guides available for you to explore more."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Plan as you want to travel as we believe in 'Your Life your Rules'"
    }
]

const ServiceList = () => {
   return( 
   <>
    {servicesData.map((item,index) => (
        <Col lg='3' key= {index}>
           <ServiceCard item= {item} />
        </Col>
    )) }
   </>
  )
} 

export default ServiceList