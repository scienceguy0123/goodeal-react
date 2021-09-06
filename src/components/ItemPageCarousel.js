import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import './ItemPageCarousel.css';



export const ItemPageCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  
  const images = props.item.Images.map((url) => (
    {
      src:url
    }
  ));
  
  const next = () => {
    // if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    // if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = images.map((item) => {
    return (
      // <h3>{item.src}</h3>
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src} className="carousel-border"
      >
        <img src={item.src}  className="carousel-img"/>
      </CarouselItem>
    );
  });

  return (
    <Carousel dark
      interval={null}
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" className="text-dark fs-4 " onClickHandler={previous} />
      <CarouselControl direction="next"  directionText="Next"   className="text-dark fs-4" onClickHandler={next} />
     
    </Carousel>

  );
}

