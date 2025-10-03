import TyperComponent from "@/components/common/TyperComponent";
import React from "react";

export default function Hero() {
  return (
    <div
      className="slider-area scrollSpySection slider-style-1 variation-default bg_image bg_image--23 height-950 d-flex align-items-center"
      id="home"
      data-black-overlay={7}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="inner text-center">
              <h1 className="title display-one">
                Hashwise <br />
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent
                     strings={["Blockchain Solutions.", "Smart Contracts.", "Secure DApps."]}
                    />
                  </span>
                </span>
              </h1>
              <p className="description">
              Empowering businesses with cutting-edge blockchain technology. 

              </p>
              <div className="button-group mt--30">
                <a
                  className="btn-default round btn-large"
                  target="_blank"
                  href="#"
                >
                  GET STARTED NOW!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
