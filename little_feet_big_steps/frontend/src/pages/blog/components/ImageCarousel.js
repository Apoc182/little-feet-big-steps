import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ImageCarousel({ images }) {
  const renderedImages = images.map((image, index) => (
    <div key={index}>
      <img src={image.url} />
      {console.log(index, image.url)}
      <p className="legend">{image.caption}</p>
    </div>
  ));

  return (
    <Carousel autoPlay={true} dynamicHeight={true}>
      {renderedImages}
    </Carousel>
  );
}
