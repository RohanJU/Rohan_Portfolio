import React, { useState } from 'react'
import "./Testimonials.css"
import AVTR1 from "/Users/rohan/Documents/PortfolioRohan/my-app/src/Assets/WhatsApp Image 2023-11-14 at 5.37.38 PM.jpeg";



const data = [
    {
      id: 1,
      name: "Advan Hune",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
      image: AVTR1
    },
    {
      id: 2,
      name: "Advan Hune",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
      image: AVTR1
    },
    {
      id: 3,
      name: "Advan Hune",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
      image: AVTR1
    },
    {
      id: 4,
      name: "Advan Hune",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt enim ipsam debitis vel?",
      image: AVTR1
    }
  ];

export const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
      };
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        <div className="container testimonials__container">
        <button className="carousel-control left" onClick={handlePrev}>&#10094;</button>
        <div className="testimonial">
          <div className="client__avatar">
            <img src={data[currentIndex].image} alt="" />
          </div>
          <h5 className="client__name">{data[currentIndex].name}</h5>
          <small className="client__review">{data[currentIndex].review}</small>
        </div>
        <button className="carousel-control right" onClick={handleNext}>&#10095;</button>
      </div>


    </section>


    )
}
