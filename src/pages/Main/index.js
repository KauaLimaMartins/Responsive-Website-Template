import React from "react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsapp,
} from "react-icons/fa";
import Slider from "infinite-react-carousel";

import {
  Container,
  Header,
  HeaderTop,
  HeaderCenter,
  Carousel,
  ThreeCirclesContainer,
  BlueBottom,
} from "./styles";

import { MdEmail, MdPerson, MdPhone } from "react-icons/md";

import headerImage from "../../utils/header.svg";

import carousel1 from "../../utils/carousel1.svg";
import carousel2 from "../../utils/carousel2.svg";
import carousel3 from "../../utils/carousel3.svg";
import carousel4 from "../../utils/carousel4.svg";
import carousel5 from "../../utils/carousel5.svg";

import circle1 from "../../utils/circle1.svg";
import circle2 from "../../utils/circle2.svg";
import circle3 from "../../utils/circle3.svg";

import blueBg from "../../utils/bluebg.svg";
import computerImage from "../../utils/computer.svg";

export default function Main() {
  const settings = {
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    centerMode: true,
    dots: true,
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <Container headerBg={headerImage}>
        <Header>
          <HeaderTop>
            <div className="left">
              <FaInstagram color="#FFF" />
              <FaFacebookSquare color="#FFF" />
              <FaLinkedin color="#FFF" />
              <FaTwitterSquare color="#FFF" />
            </div>
            <div className="right">
              <FaWhatsapp color="#FFF" />
              <p>55+ (11) 90909-0909</p>

              <MdEmail color="#FFF" />
              <p>medicon@clinic.com</p>
            </div>
          </HeaderTop>
          <HeaderCenter>
            <div>
              <p className="title">
                <span>MEDICON</span>CLINIC
              </p>

              <p className="text">
                HTML Template for <br /> Your Clinic
              </p>
            </div>
          </HeaderCenter>
        </Header>
      </Container>
      <Carousel>
        {/* Component */}
        <Slider {...settings} className="slider">
          <img src={carousel1} alt="Carousel1" />
          <img src={carousel2} alt="Carousel2" />
          <img src={carousel3} alt="Carousel3" />
          <img src={carousel4} alt="Carousel4" />
          <img src={carousel5} alt="Carousel5" />
        </Slider>
      </Carousel>
      <ThreeCirclesContainer>
        <div>
          <img src={circle1} alt="circle" />
          <p className="title">
            Lorem Ipsum
            <br /> Dolor
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div>
          <img src={circle2} alt="circle" />
          <p className="title">
            Lorem Ipsum
            <br /> Dolor
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor
          </p>
        </div>
        <div>
          <img src={circle3} alt="circle" />
          <p className="title">
            Lorem Ipsum
            <br /> Dolor
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex
          </p>
        </div>
      </ThreeCirclesContainer>
      <BlueBottom blueBg={blueBg}>
        <div className="left">
          <img src={computerImage} alt="Computer Black Coffe" />
          <p className="title">Online Service</p>
          <p className="text">
            For you to schedule your appointments
            <br /> without leaving the comfort of your
            <br /> home
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <p>Schedule an Appointment</p>
          <input placeholder="NAME" />
          <MdPerson color="#333" className="person" />
          <input placeholder="PHONE" />
          <MdPhone color="#333" className="phone" />
          <input placeholder="EMAIL" />
          <MdEmail color="#333" className="email" />
          <button type="submit">Schedule</button>
        </form>
      </BlueBottom>
    </>
  );
}
