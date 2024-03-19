import React from "react";
import card1 from "./../images/roomquest logo.png";
import threecard1 from "./../images/3 card 1.png";
import threecard2 from "./../images/CORRIDOR.png";
import threecard3 from "./../images/3 card2.png";
import threecard4 from "./../images/3 card 3.png";
import threecard5 from "./../images/3 card 4.png";
import threecard6 from "./../images/3 card 5.png";
import area1 from "./../images/area1.jpg";
import area2 from "./../images/area2.jpg";
import area3 from "./../images/area3.jpg";
import area4 from "./../images/area4.jpg";
import area5 from "./../images/area5.jpg";

function Card() {
  return (
    <div>
      <h1 class="title link-underline-dark">
      <u className="text-yellow-500">LOCATION WHERE YOU CAN FIND BEST ACCOMODATIONS</u></h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card bg-dark text-white">
              <img src={area1} class="card-img" />
              <div class="card-img-overlay">
                <h1 class="card-title text-danger">Trimurti Nagar</h1>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card bg-dark text-white">
              <img src={area2} class="card-img" />
              <div class="card-img-overlay">
                <h1 class="card-title text-danger">Vasudev Nagar</h1>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="card bg-dark text-white">
              <img src={area3} class="card-img" />
              <div class="card-img-overlay">
                <h1 class="card-title text-danger">Wadi</h1>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-dark text-white">
              <img src={area4} class="card-img" />
              <div class="card-img-overlay">
                <h1 class="card-title text-danger">Lokmanya Nagar</h1>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-dark text-white">
              <img src={area5} class="card-img" />
              <div class="card-img-overlay">
                <h1 class="card-title text-danger area">Rachana Ring road</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="fs-3 text-center mt-5">
        <b><u>FIND BEST RENT ROOMS</u></b>
      </p>
      <div className="scroll-container overflow-auto">
        <div className="d-flex">
          <a
            className="text-decoration-none m-4"
            href="./satyapremkikatha.html"
          >
            <div className="card">
              <img src={threecard1} alt="Card" className="threecard-size" />
            </div>
          </a>

          <a class="text-decoration-none m-4" href="./jugjuggjeeyo.html">
            <div class="card">
              <img src={threecard2} className="threecard-size" />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={threecard3} className="threecard-size" />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={threecard4} className="threecard-size" />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={threecard5} className="threecard-size" />
            </div>
          </a>
          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={threecard6} className="threecard-size" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
