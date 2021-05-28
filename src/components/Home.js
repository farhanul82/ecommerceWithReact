import { Button } from "bootstrap";
import React from "react";
import Wobble from "react-reveal/Wobble";
import { Carousel } from "react-bootstrap";
import Flash from "react-reveal/Flash";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container-fluid ">
      <div className="row carouselSec" style={{ height: "100vh" }}>
        <Carousel>
          <Carousel.Item>
            <div className="sec1Tittle">
              <h1 className="S1"> Shopping</h1>
              <h2>
                <span className="S2">Always</span>{" "}
                <span className="S3">A good</span>
              </h2>

              <Wobble>
                <h1>
                  <span className="S4">Idea</span>
                </h1>
              </Wobble>
              <div>
                <Link to="/products" className="crslsec1btn btn">
                  SHOPPING
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src="/images/Slider/7.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Wobble>
                <h1 className="slidertitle">Exquisite</h1>
              </Wobble>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src="/images/frontslides/2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Wobble>
                <h1 className="slidertitle">Exquisite</h1>
              </Wobble>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src="/images/Slider/1.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Wobble>
                <h1 className="slidertitle">Exquisite</h1>
              </Wobble>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src="/images/Slider/4.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Wobble>
                <h1 className="slidertitle">Exquisite</h1>
              </Wobble>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{ height: "100vh" }}
              className="d-block w-100"
              src="/images/Slider/5.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <Wobble>
                <h1 className="slidertitle">Exquisite</h1>
              </Wobble>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="frontSec2 row">
        <div className=" sec2 container-fluid">
          <div className="row">
            <div className=" col-6">
              <Fade left big>
                <img
                  className=" sec2img animate__zoomInDown"
                  src="/images/front/4.png"
                ></img>
              </Fade>
            </div>

            <div className="Sec2text col6">
              <h1>
                <span className="T1"> Lots Of</span>
                <span className="T2">Categories</span>
                <br></br>
                <span className="T3">to</span>
                <br></br>{" "}
                <Flash>
                  {" "}
                  <span className="T4">Enamor</span>
                </Flash>
              </h1>

              <Link to="/category" className="sec2btn btn">
                Categories
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="frontsec3 row">
        <div className="container-fluid">
          <div className="row"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
