import React from "react";
import card1 from "./../images/roomquest logo.png";

function Card() {
  return (
    <div>
      <h1 class="title">LOCATION WHERE YOU CAN FIND BEST ACCOMODATIONS</h1>
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="card bg-dark text-white">
              <img src={card1} class="card-img"/>
              <div class="card-img-overlay">
                <h5 class="card-title text-secondary">Card title</h5>
                <p class="card-text text-secondary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text text-secondary">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card bg-dark text-white">
              <img src={card1} class="card-img" />
              <div class="card-img-overlay">
                <h5 class="card-title text-secondary">Card title</h5>
                <p class="card-text text-secondary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text text-secondary">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-4">
            <div class="card bg-dark text-white">
              <img src={card1} class="card-img" />
              <div class="card-img-overlay">
                <h5 class="card-title text-secondary">Card title</h5>
                <p class="card-text text-secondary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text text-secondary">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-dark text-white">
              <img src={card1} class="card-img" />
              <div class="card-img-overlay">
                <h5 class="card-title text-secondary">Card title</h5>
                <p class="card-text text-secondary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text text-secondary">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card bg-dark text-white">
              <img src={card1} class="card-img" />
              <div class="card-img-overlay">
                <h5 class="card-title text-secondary">Card title</h5>
                <p class="card-text text-secondary">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p class="card-text text-secondary">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="fs-3 text-center mt-5">
        <b>TRENDING BOLLYWOOD MOVIES</b>
      </p>
      <div className="scroll-container overflow-auto">
        <div className="d-flex">
          <a className="text-decoration-none m-4" href="./satyapremkikatha.html">
            <div className="card">
              <img src={card1} alt="Card" />
            </div>
          </a>

          <a class="text-decoration-none m-4" href="./jugjuggjeeyo.html">
            <div class="card">
              <img src={card1} />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={card1} />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={card1} />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={card1} />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={card1} />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={card1} />
            </div>
          </a>

          <a class="text-decoration-none m-4" href=" ">
            <div class="card">
              <img src={card1} />
            </div>
          </a>
          
        </div>
      </div>

    </div>
  );
}

export default Card;
