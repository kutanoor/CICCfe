"use client";

import React from "react";
import Image from "next/image";

const funFactsData = [
	{
		id: "1",
		icon: "/images/icons/icon15.png",
		number: "1000 B",
		title: "total supply",
	},
	{
		id: "2",
		icon: "/images/icons/icon16.png",
		number: "20 B",
		title: "Fundraising",
	},
	{
		id: "3",
		icon: "/images/icons/icon17.png",
		number: "800 B",
		title: "Ecosystem",
	},
	{
		id: "4",
		icon: "/images/icons/icon18.png",
		number: "100 B",
		title: "Exchange ",
	},
	{
		id: "5",
		icon: "/images/icons/icon15.png",
		number: "5 B",
		title: "Incentives",
	},
	{
		id: "6",
		icon: "/images/icons/icon16.png",
		number: "10 B",
		title: "Team",
	},
];

const FunFacts: React.FC = () => {
  return (
    <>
      {funFactsData && (
        <div className="funfact-area bg-color-f3f4f6 py-8 items-center justify-center">
          <div className="container">
            <div className="d-lg-flex justify-content-between">
              {funFactsData &&
                funFactsData.map((value, i) => (
                  <div className="col-lg-25" key={i}>
                    <div className="funfact-single-item">
                      <div className="d-flex align-items-center items-center">
                        <div className="flex-shrink-0">
                          <div className="icon items-center">
                            <Image src={value.icon} alt="icon" width={40} height={40} className="my-auto" />
                          </div>
                        </div>
                        <div className="flex-grow-1 funfact-single-content">
                          <h4>{value.number}</h4>
                          <p>{value.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FunFacts;
