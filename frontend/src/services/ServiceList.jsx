import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Get up-to-date weather information for your travel destination with our 'Calculate Weather' feature. Our component provides you with all the important details you need to plan your day, including the current temperature, chance of precipitation, wind speed and direction, UV index, and sunrise/sunset times. With our easy-to-read format and customizable design, you can quickly and easily check the weather conditions and plan your activities accordingly. Don't let the weather spoil your travel plans - use our 'Calculate Weather' feature to stay informed and prepared."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Make the most of your travel experience with our 'Best Tour Guide' feature. Our team of expert guides have years of experience and in-depth knowledge of the local culture, history, and attractions. With their personalized approach, they'll ensure that you get the most out of your tour, whether you're interested in history, food, art, or adventure. Our guides are passionate about sharing their knowledge and creating unforgettable experiences for our travelers. With our 'Best Tour Guide' feature, you can rest assured that you're in good hands and that your travel experience will be one of a kind."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Travel your way with our 'Customization' feature. We understand that every traveler has unique needs and preferences, which is why we offer a range of customizable options for your tour. Whether you want to add or remove activities, adjust the itinerary, or upgrade your accommodations, our team is here to help. Our expert travel planners will work with you to create a personalized itinerary that meets your specific needs and budget. With our 'Customization' feature, you can enjoy the flexibility and freedom to design your ideal travel experience. Let us help you create memories that will last a lifetime."
    },
]

const ServiceList = () => {
  return (
    <>
    {
        servicesData.map((item, index) => (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item} />
        </Col>
        ))
    }
    </>
  );
};

export default ServiceList;