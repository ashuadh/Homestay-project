import React from "react";
import { useState, useEffect } from "react";
import { Icon } from "antd";
import NavBarTransparent from "../NavBarTransparent/NavBarTransparent";
import "./LandingPage.css";

const LandingPage = () => {
  // const [curr, setCurr] = useState(0);
  let curr = 0;

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 5000);
  //   return () => clearInterval(interval);
  // }, []);

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
      <div className="slider">
        <div className="slide current">
          {/* <div className="content">
            <h1>ONE</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis soluta quibusdam cupiditate sapiente nemo veniam.
            </p>
          </div> */}
          <div className="heading">
            <h1> Common Themes.... </h1>
          </div>

          <div className="content">
            <ul>
              <li>Connecting people and places</li>
              <li>Leveraging natural and human resources</li>
              <li>Reviving cultural heritage with innovation</li>
              <li>Enriching personalized experiences</li>
              <li>Developing a self sustainable business model</li>
            </ul>
          </div>
        </div>

        <div className="slide">
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
    </div>
  );
};

export default LandingPage;
