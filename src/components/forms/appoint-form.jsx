import React from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import countries from "@/common/countriesData";

const AppointForm = () => {
  const [countrie, setCountries] = React.useState('');

  const handleChange = (event) => {
    setCountries(event.target.value);
  };
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
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Countries</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={countrie}
                  label="Countries"
                  onChange={handleChange}
                >
                  {
                    countries.map((items, index) => (
                      <MenuItem key={index} value={items.name}>{items.name}</MenuItem>
                    ))
                  }
                  {/* <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </Box>
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
