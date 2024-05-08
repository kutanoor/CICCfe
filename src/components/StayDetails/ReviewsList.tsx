"use client";

import Image from "next/image"; 

import authorImg1 from "/public/images/author/author-15.jpg";
import authorImg2 from "/public/images/author/author-16.jpg"; 

const ReviewsList = () => {
  return (
    <>
      <div className="stay-comment-list box-style">
        <div className="box-title pb-0 border-0">
          <h4>2 Reviews</h4>
        </div>
        <ul className="p-0 mb-0 list-unstyled">
          <li>
            <div className="d-lg-flex">
              <div className="flex-shrink-0">
                <Image
                  src={authorImg1}
                  className="rounded-circle"
                  alt="author"
                  width='80'
                  height='80'
                />
              </div>
              <div className="flex-grow-1 ms-4">
                <div className="d-sm-flex align-items-center justify-content-between">
                  <div>
                    <h4>Sachin</h4>
                    <span className="date">
                      June 20,2023 | 07:10 PM
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2 mb-sm-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                <p className="mb-0">
                 This Property is totally amazing, really love the place
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="d-lg-flex">
              <div className="flex-shrink-0">
                <Image
                  src={authorImg2}
                  className="rounded-circle"
                  alt="author"
                  width='80'
                  height='80'
                />
              </div>
              <div className="flex-grow-1 ms-4">
                <div className="d-sm-flex align-items-center justify-content-between">
                  <div>
                    <h4>Mohd Harris </h4>
                    <span className="date">
                      Aug 20,2023 | 05:30 PM
                    </span>
                  </div>
                  <div className="d-flex align-items-center mb-2 mb-sm-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                    <svg
                      className="ms-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_3720_335)">
                        <path
                          d="M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z"
                          fill="#FFC107"
                        />
                      </g>
                    </svg>
                  </div>
                </div>

                <p className="mb-0">
                  Must visit place. Love the environment here
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ReviewsList;
