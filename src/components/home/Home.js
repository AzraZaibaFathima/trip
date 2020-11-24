import React from "react";

function Card() {
  return (
    <div className="Card">
      <h3>Trip Places</h3>
      <div className="row row-cols-1 row-cols-md-3 card-hotel">
        <div className="col mb-4">
          <div className="card">
            <img
              src="./Assests/kerala.jpg"
              className="card-img-top"
              alt="carlton"
              height="300px"
              width="300px"
            />
            <div className="card-body">
              <h5 class="card-title">Kerala</h5>
              <p class="card-text">
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="./Assests/Goa.jpg" className="card-img-top"  height="300px"
              width="300px" alt="abs" />
            <div className="card-body">
              <h5 className="card-title">Goa</h5>
              <p className="card-text">
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="./Assests/kash.jpg" className="card-img-top"   height="300px"
              width="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Kashmir</h5>
              <p className="card-text">
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="./Assests/rajasthan.jpg" className="card-img-top"  height="300px"
              width="300px"
              alt="..." />
            <div className="card-body">
              <h5 className="card-title">Rajasthan</h5>
              <p className="card-text">
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="./Assests/hyderabad.jpg" className="card-img-top"  height="300px"
              width="300px"  alt="..." />
            <div className="card-body">
              <h5 className="card-title">Hyderabad</h5>
              <p className="card-text">
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <img src="./Assests/mumvai.jpg" className="card-img-top"   height="300px"
              width="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Mumbai</h5>
              <p className="card-text">
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;