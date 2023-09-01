import React from "react";

const AppointForm = () => {
  return (
    <form onSubmit={e => e.preventDefault()}>
      <div className="row">
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Name" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Surname" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="email" placeholder="Your Email" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Company Name" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Country : (Scroll down with names of all the countries)" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="number" placeholder="Contact Number" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Desgination" />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="visitor-form__input">
            <input type="text" placeholder="Purpose to connect" />
          </div>
        </div>
     
        {/* <div className="col-lg-12">
          <div className="visitor-form__input">
            <textarea placeholder="Type your message" name="message"></textarea>
          </div>
        </div> */}
        <div className="col-lg-4 col-md-4 col-12">
          <div className="visit-btn mt-20">
            <button className="tp-btn">Submit</button>
          </div>
        </div>
        {/* <div className="col-lg-8 col-md-8 col-12">
          <div className="visit-serial mt-45">
            <span>
              24/7 Emergency Service :
              <a href="tel:91 83838 64051">
                +91 83838 64051
                <i className="fa-regular fa-arrow-right"></i>
              </a>
            </span>
          </div>
        </div> */}
      </div>
    </form>
  );
};

export default AppointForm;
