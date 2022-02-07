import React, { useState } from "react";
import "./Testimonials.css";
import Carousel from "react-bootstrap/Carousel";

const Testimonials = () => {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./images/hero1.png"
            alt="First slide"
            width={900}
            height={500}
          />
          <Carousel.Caption className="caption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./images/hero2.jpg"
            alt="Second slide"
            width={900}
            height={500}
          />
          <Carousel.Caption className="caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src="./images/hero3.jpg"
            alt="Third slide"
            width={900}
            height={500}
          />
          <Carousel.Caption className="caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Testimonials;
