"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";



import icon1 from "/public/images/icons/icon22.png";
import icon2 from "/public/images/icons/icon23.png";
import icon3 from "/public/images/icons/icon24.png";
import icon4 from "/public/images/icons/icon25.png";
import icon5 from "/public/images/icons/icon26.png";
import icon6 from "/public/images/icons/icon27.png";


const Amenities = () => {
  return (
    <>
      <div className="stay-amenities box-style">
        <div className="box-title">
          <h4>About</h4>
          <p>About the property&apos;s amenities and services</p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon1} alt="icon" width="20" height="20" />
              <span className="ms-3">Bramingham palace</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon2} alt="icon" width="20" height="20" />
              <span className="ms-3">London</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon3} alt="icon" width="20" height="20" />
              <span className="ms-3">$50,000</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon4} alt="icon" width="20" height="20" />
              <span className="ms-3">08</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon5} alt="icon" width="20" height="20" />
              <span className="ms-3">20%</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon6} alt="icon" width="20" height="20" />
              <span className="ms-3">2 Months</span>
            </div>
          </div>

          {/* <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon7} alt="icon" width="20" height="20" />
              <span className="ms-3">la-suitcase</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon8} alt="icon" width="20" height="20" />
              <span className="ms-3">la-suitcase-rolling</span>
            </div>
          </div>
          
          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon9} alt="icon" width="20" height="20" />
              <span className="ms-3">la-swimmer</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon10} alt="icon" width="20" height="20" />
              <span className="ms-3">la-swimming-pool</span>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon11} alt="icon" width="20" height="20" />
              <span className="ms-3">la-tv</span>
            </div>
          </div>
          
          <div className="col-lg-4 col-sm-6">
            <div className="d-flex align-items-center mb-25">
              <Image src={icon12} alt="icon" width="20" height="20" />
              <span className="ms-3">la-umbrella-beach</span>
            </div> 
          </div>
 
          <div className="col-lg-12">
            <div className="border"></div>
          </div> 

          <div className="col-lg-12">
            <button type="button" className="btn view-amenities">
              View More 20 Amenities
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Amenities;
