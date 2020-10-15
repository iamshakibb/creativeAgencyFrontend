import React from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import "./WorkSection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function WorkSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="workBackground" id="workBackground">
      <Container className="my-5 py-5 text-center">
        <Row>
          <div className="col-sm-12 my-5 Heading">
            <h1>
              Here are some of <span>our works</span>
            </h1>
          </div>
          <div className="col-sm-12 py-5">
            <Slider {...settings}>
              <div className="img col-sm-12">
                <img src="https://i.ibb.co/Jptp27W/carousel-1.png" alt="carousel-1" />
              </div>
              <div className="img col-sm-12">
                <img src="https://i.ibb.co/hZQG5hy/carousel-2.png" alt="carousel-2" />
              </div>
              <div className="img col-sm-12">
                <img src="https://i.ibb.co/J74jhRL/carousel-3.png" alt="carousel-3" />
              </div>
              <div className="img col-sm-12">
                <img src="https://i.ibb.co/2MKGz7c/carousel-4.png" alt="carousel-4" />
              </div>
              <div className="img col-sm-12">
                <img src="https://i.ibb.co/nC5TXtv/carousel-5.png" alt="carousel-5" />
              </div>
            </Slider>
          </div>
        </Row>
      </Container>
    </div>
  );
}
