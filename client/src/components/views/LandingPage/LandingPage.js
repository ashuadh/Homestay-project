import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "antd";
import NavBarTransparent from "../NavBarTransparent/NavBarTransparent";
import yolo from "../../../assets/img/brainstorming - tourism V1.png";
import quote from "../../../assets/img/quote.png";
import "./LandingPage.css";
import { Row, Col, Carousel } from "antd";
import { urlencoded } from "body-parser";

const LandingPage = () => {
  // const [curr, setCurr] = useState(0);
  let curr = 0;

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    const slides = document.querySelectorAll(".slide");
    const current = document.querySelector(".current");
    current.classList.remove("current");
    slides[(curr + 1) % slides.length].classList.add("current");
    curr = (curr + 1) % slides.length;
  };

  const prevSlide = () => {
    const slides = document.querySelectorAll(".slide");
    const current = document.querySelector(".current");
    current.classList.remove("current");
    slides[(curr - 1 + slides.length) % slides.length].classList.add("current");
    curr = (curr - 1 + slides.length) % slides.length;
  };

  return (
    <div>
      <NavBarTransparent />
      <div
        style={{
          width: "100%",
          height: "100vh",
          opacity: "0.7",
          position: "absolute",
          boxShadow:
            "100px 150px 200px #000000 inset, -100px -100px 200px #000000 inset",
          zIndex: "2",
        }}
      ></div>
      {/* <img
        style={{ zIndex: "1", width: "100%", height: "100vh" }}
        src={image1}
        alt=""
      /> */}
      <div
        style={{
          position: "absolute",
          zIndex: "10",
          top: "250px",
          left: "11.5%",
        }}
      >
        <h1 style={{ color: "white" }}>Heart and soul</h1>
      </div>
      <div className="slider">
        <div className="slide current">
          <div className="heading">
            <h1>Our Mission</h1>
          </div>
          <div className="content">
            <p>
              <span style={{ fontSize: "3em" }}>
                <span style={{ fontWeight: "bold" }}>heart & soul,</span> a
                world outside the four walls <br />
              </span>
              <span>
                collaborating with simplest and the best to create an experience
                unfolding your nature and personality.
              </span>
            </p>
          </div>
        </div>

        <div className="slide">
          {/* <div className="content">
            <h1>ONE</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis soluta quibusdam cupiditate sapiente nemo veniam.
            </p>
          </div> */}
          <div className="heading">
            <h1> Our Goal </h1>
          </div>

          <div className="content">
            <ul>
              <li>Connecting people and places</li>
              <li>Leveraging natural and human resources</li>
              <li>Reviving cultural heritage with innovation</li>
              {/* <li>Enriching personalized experiences</li> */}
              <li>Developing a self sustainable business model</li>
            </ul>
          </div>
        </div>

        <div className="slide">
          <div className="heading">
            <h1>Our Vision</h1>
          </div>
          <div className="content">
            <p>
              <span style={{ fontSize: "3em" }}>
                <span style={{ fontWeight: "bold" }}>beyond</span> bed &
                breakfast ..{" "}
                <span style={{ fontWeight: "bold" }}>nature's window</span>{" "}
                <br />
              </span>
              <span>
                creating a reliable and sustainable ecosystem in remote areas
                with eco-tourism at the centerstage
              </span>
            </p>
          </div>
        </div>
        <div className="buttons">
          <button onClick={prevSlide} id="prev">
            <Icon type="arrow-left" />
          </button>
          <button onClick={nextSlide} id="next">
            <Icon type="arrow-right" />
          </button>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          height: "80vh",
          position: "relative",
          margin: "5vh 0",
        }}
      >
        <img
          style={{
            position: "absolute",
            left: "20%",
            width: "60%",
            height: "100%",
            margin: "auto",
          }}
          src={yolo}
          alt=""
        />
      </div>
      <div
        style={{
          width: "100%",
          height: "70vh",
          position: "relative",
          backgroundColor: "#2771C0",
        }}
      >
        <Row>
          <Col span={10}>
            <div
              style={{
                width: "65%",
                margin: "auto",
                paddingTop: "15%",
              }}
            >
              <h1
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: "2.75em",
                }}
              >
                Why <span style={{ color: "white" }}>Travel With Us?</span>
              </h1>
              <p
                style={{
                  paddingTop: "20px",
                  lineHeight: "2",
                  fontSize: "1.25em",
                  // color: "#575B5F",
                  color: "848484",
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
                reprehenderit tempora dolorem obcaecati nostrum, ipsam quae unde
                perferendis similique incidunt voluptatem sit velit, facere,
                ipsum inventore? Vitae dolor cupiditate natus quo laborum quam
                unde explicabo perferendis iusto id. Culpa, eos.
              </p>
            </div>
          </Col>
          <Col span={14}>
            <div>
              <Carousel autoplay>
                <div>
                  <img
                    style={{ height: "70vh" }}
                    src="https://cdn.theculturetrip.com/wp-content/uploads/2017/11/uttarakhand-villages.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    style={{ height: "70vh" }}
                    src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_1316/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1570484918%2Fvdqoa05uvrw3493v1uwr.jpg"
                    alt=""
                  />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          width: "100%",
          position: "relative",
          paddingTop: "10vh",
          paddingBottom: "5vh",
          backgroundColor: "#BFDCF9",
        }}
      >
        <Carousel autoplay>
          <div>
            <Row>
              <Col span={10}>
                <div>
                  <img
                    style={{ width: "90%", height: "80vh" }}
                    src="https://icdn1.digitaltrends.com/image/digitaltrends/iphone-xs-portrait-mode-selfie-1500x2000.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col span={14}>
                <div style={{ width: "60%" }}>
                  <img style={{ height: "10vh" }} src={quote} alt="" />
                  <p
                    style={{
                      lineHeight: "1.5",
                      fontSize: "1.5em",
                      color: "#575B5F",
                      marginTop: "100px",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quod consectetur nulla facilis incidunt nobis quasi
                    voluptatum, optio, distinctio tempora, sed numquam amet
                    dolor itaque ad est! Magnam odio laudantium, corporis
                    officiis nulla tempore? Veniam exercitationem eveniet alias
                    quae odio.
                  </p>
                  <h1
                    style={{ color: "#005CA9", fontWeight: "bold", margin: 0 }}
                  >
                    Lorem, ipsum dolor.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque, odio.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row>
              <Col span={10}>
                <div>
                  <img
                    style={{ width: "90%", height: "80vh" }}
                    src="https://www.communityhomestay.com/celinne-da-costa.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col span={14}>
                <div style={{ width: "60%" }}>
                  <img style={{ height: "10vh" }} src={quote} alt="" />
                  <p
                    style={{
                      lineHeight: "1.5",
                      fontSize: "1.5em",
                      color: "#575B5F",
                      marginTop: "100px",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quod consectetur nulla facilis incidunt nobis quasi
                    voluptatum, optio, distinctio tempora, sed numquam amet
                    dolor itaque ad est! Magnam odio laudantium, corporis
                    officiis nulla tempore? Veniam exercitationem eveniet alias
                    quae odio.
                  </p>
                  <h1
                    style={{ color: "#005CA9", fontWeight: "bold", margin: 0 }}
                  >
                    Lorem, ipsum dolor.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloremque, nostrum nulla!
                  </p>
                </div>
              </Col>
            </Row>
          </div>

          <div>
            <Row>
              <Col span={10}>
                <div>
                  <img
                    style={{ width: "90%", height: "80vh" }}
                    src="https://www.xda-developers.com/files/2018/01/6f826ZG-768x1024.jpg"
                    alt=""
                  />
                </div>
              </Col>
              <Col span={14}>
                <div style={{ width: "60%" }}>
                  <img style={{ height: "10vh" }} src={quote} alt="" />
                  <p
                    style={{
                      lineHeight: "1.5",
                      fontSize: "1.5em",
                      color: "#575B5F",
                      marginTop: "100px",
                    }}
                  >
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ullam quod consectetur nulla facilis incidunt nobis quasi
                    voluptatum, optio, distinctio tempora, sed numquam amet
                    dolor itaque ad est! Magnam odio laudantium, corporis
                    officiis nulla tempore? Veniam exercitationem eveniet alias
                    quae odio.
                  </p>
                  <h1
                    style={{ color: "#005CA9", fontWeight: "bold", margin: 0 }}
                  >
                    Lorem, ipsum dolor.
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Doloremque, nostrum nulla!
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default LandingPage;
