"use client";

import Sidebar from "./Sidebar";
import Information from "./Information";
import StayInformation from "./StayInformation";
import Amenities from "./Amenities";
import RoomRates from "./RoomRates";
import ReviewsList from "./ReviewsList";
import ReviewForm from "./ReviewForm";
import Location from "./Location";
import ThingsToKnow from "./ThingsToKnow";
import Image from "next/image";

import stayDetailsPreview from "/public/images/banner/dubai11.jpg";
import PoolDetails from "@/app/pool-details/[poolId]/page";

const StayDetailsContent = () => {
  return (
    <>
      <div className="stay-details-area ptb-175">
        <div className="container">
          <div className="stay-details-img">
            <Image src={stayDetailsPreview} alt="stay" className="h-[500px]" />
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="stay-details-content">
                
                {/* Information */}
                {/* <Information /> */}

                {/* Stay Information */}
                {/* <StayInformation /> */}

                {/* Amenities */}
                <Amenities />
                {/* <PoolDetails/> */}

                {/* RoomRates */}
                <RoomRates />

                {/* ReviewsList */}
                <ReviewsList />

                {/* ReviewForm */}
                <ReviewForm />

                {/* Location */}
                <Location />

                {/* ThingsToKnow */}
                {/* <ThingsToKnow /> */}
              </div>
            </div>

            <div className="col-lg-4">
              {/* Sidebar */}
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StayDetailsContent;
