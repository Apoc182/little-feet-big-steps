import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-bootstrap/Carousel";
import "../styles/blogpost.css";

export default function ImageCarousel({ images }) {
  return (
    <>
      <Carousel className="carousel-container">
        {images.map((image, index) => (
          <Carousel.Item key={index}>
            <img className="carousel-img" src={image.url} alt="test image" />
            <Carousel.Caption>
              <h3></h3>
              <p>image caption from API goes here</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
