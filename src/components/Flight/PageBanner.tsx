"use client";

import Image from "next/image";

import pageBanner from "/public/images/page-banner/page-banner-img-27.jpg";
import mokaup from "/public/images/mokaup/mokup-11.png";

const PageBanner = () => {
  return (
    <>
      <div className="page-banner-area overflow-hidden">
        <div className="container-fluid mw-1640">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="page-banner-content">
                <h2>Toronto Canada</h2>

                <ul className="p-0 mb-0 list-unstyled d-flex align-items-center  justify-content-center justify-content-md-start style-two">
                  <li className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M9 0C5.27737 0 2.25 3.02737 2.25 6.75C2.25 11.4289 8.343 17.5759 8.60175 17.8358C8.712 17.9449 8.856 18 9 18C9.144 18 9.288 17.9449 9.39825 17.8358C9.657 17.5759 15.75 11.4289 15.75 6.75C15.75 3.02737 12.7226 0 9 0ZM9 16.6241C7.65675 15.1864 3.375 10.3241 3.375 6.75C3.375 3.64838 5.89838 1.125 9 1.125C12.1016 1.125 14.625 3.64838 14.625 6.75C14.625 10.3208 10.3433 15.1864 9 16.6241Z"
                        fill="#555555"
                      />
                      <path
                        d="M9 3.375C7.13925 3.375 5.625 4.88925 5.625 6.75C5.625 8.61075 7.13925 10.125 9 10.125C10.8608 10.125 12.375 8.61075 12.375 6.75C12.375 4.88925 10.8608 3.375 9 3.375ZM9 9C7.75912 9 6.75 7.99088 6.75 6.75C6.75 5.50912 7.75912 4.5 9 4.5C10.2409 4.5 11.25 5.50912 11.25 6.75C11.25 7.99088 10.2409 9 9 9Z"
                        fill="#555555"
                      />
                    </svg>
                    <span>Canada</span>
                  </li>

                  <li className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clipPath="url(#clip0_3746_4186)">
                        <path d="M8.01694 18C7.69696 17.9999 7.38161 17.9236 7.09696 17.7774C6.81231 17.6313 6.56654 17.4195 6.37995 17.1596C6.19337 16.8996 6.07134 16.599 6.02395 16.2826C5.97657 15.9661 6.00518 15.6429 6.10743 15.3397L7.56244 11.25H4.61869L3.80869 12.4845C3.60423 12.7969 3.32507 13.0534 2.99649 13.2307C2.66792 13.408 2.3003 13.5006 1.92693 13.5C1.61853 13.4999 1.31469 13.4255 1.04121 13.2829C0.767726 13.1404 0.532673 12.9339 0.356002 12.6811C0.179332 12.4284 0.0662581 12.1367 0.0263798 11.8309C-0.0134985 11.525 0.0209957 11.2141 0.126935 10.9245L0.825185 8.99999L0.119435 7.07999C0.0132422 6.79085 -0.0216849 6.48037 0.0176129 6.17487C0.0569107 5.86936 0.169275 5.57784 0.345185 5.32499C0.55417 5.05797 0.824475 4.84531 1.13317 4.70503C1.44187 4.56475 1.77984 4.50099 2.11843 4.51917C2.45701 4.53735 2.78622 4.63693 3.07812 4.80946C3.37002 4.98199 3.61599 5.22238 3.79518 5.51024L4.61644 6.74999H7.56244L6.11044 2.67224C6.00649 2.36753 5.9767 2.04244 6.02353 1.72392C6.07035 1.4054 6.19245 1.10263 6.37968 0.840736C6.60273 0.557462 6.89307 0.334457 7.22428 0.192015C7.55549 0.0495732 7.91707 -0.00778516 8.2761 0.0251594C8.63514 0.058104 8.98024 0.180306 9.28 0.380645C9.57976 0.580984 9.82467 0.853101 9.99244 1.17224L13.1852 6.74999H15.6699C16.2124 6.74317 16.7399 6.92722 17.1604 7.26996C17.5809 7.6127 17.8675 8.09233 17.9702 8.62499C18.0247 8.94774 18.0082 9.27851 17.9218 9.59422C17.8353 9.90993 17.681 10.203 17.4696 10.4529C17.2583 10.7029 16.9949 10.9037 16.6979 11.0413C16.401 11.179 16.0775 11.2502 15.7502 11.25H13.1852L9.98493 16.8405C9.79094 17.1924 9.50591 17.4857 9.15969 17.6897C8.81347 17.8937 8.41878 18.0008 8.01694 18ZM4.21369 9.74999H8.62519C8.74491 9.75102 8.86268 9.78053 8.96874 9.83608C9.07481 9.89163 9.16613 9.97163 9.23516 10.0695C9.30419 10.1673 9.34895 10.2801 9.36573 10.3987C9.38252 10.5172 9.37085 10.6381 9.33169 10.7512L7.52418 15.831C7.50004 15.9072 7.49424 15.988 7.50728 16.0669C7.52031 16.1457 7.5518 16.2204 7.59918 16.2847C7.67483 16.3597 7.76714 16.4157 7.86856 16.4481C7.96999 16.4806 8.07765 16.4886 8.18275 16.4715C8.28786 16.4543 8.38742 16.4126 8.47331 16.3497C8.5592 16.2867 8.62897 16.2043 8.67694 16.1092L12.0992 10.125C12.1651 10.0108 12.26 9.91593 12.3743 9.8501C12.4886 9.78426 12.6183 9.74973 12.7502 9.74999H15.7502C15.8598 9.75003 15.9681 9.72604 16.0675 9.67971C16.1668 9.63338 16.2548 9.56582 16.3253 9.48181C16.3957 9.39779 16.4469 9.29935 16.4751 9.19343C16.5034 9.08751 16.5081 8.97668 16.4889 8.86874C16.4445 8.68708 16.3388 8.52632 16.1896 8.4136C16.0404 8.30087 15.8568 8.24308 15.6699 8.24999H12.7502C12.6183 8.25025 12.4886 8.21571 12.3743 8.14988C12.26 8.08404 12.1651 7.98922 12.0992 7.87499L8.68293 1.90424C8.63738 1.80604 8.56872 1.72034 8.48284 1.65445C8.39695 1.58856 8.29639 1.54444 8.18975 1.52587C8.0831 1.50729 7.97355 1.51482 7.87044 1.5478C7.76734 1.58077 7.67376 1.63822 7.59768 1.71524C7.54971 1.78166 7.51834 1.8586 7.50621 1.93963C7.49407 2.02067 7.50152 2.10342 7.52793 2.18099L9.32794 7.24874C9.367 7.36159 9.37872 7.4821 9.36213 7.60036C9.34554 7.71862 9.30112 7.83126 9.23251 7.92901C9.16391 8.02676 9.07308 8.10682 8.9675 8.16262C8.86191 8.21842 8.74459 8.24837 8.62519 8.24999H4.21369C4.08978 8.25 3.96781 8.21933 3.85865 8.16069C3.7495 8.10206 3.65658 8.0173 3.58818 7.91399L2.54343 6.33899C2.37243 6.02324 1.76793 5.86124 1.57593 6.18149C1.53672 6.2362 1.51173 6.2998 1.50322 6.36658C1.49471 6.43335 1.50294 6.50119 1.52718 6.56399L2.33118 8.74349C2.39258 8.91052 2.39258 9.09395 2.33118 9.26099L1.53168 11.4435C1.50939 11.5063 1.50247 11.5735 1.51151 11.6395C1.52054 11.7055 1.54526 11.7684 1.5836 11.8229C1.62194 11.8774 1.67278 11.9219 1.73186 11.9527C1.79095 11.9836 1.85655 11.9998 1.92318 12C2.04774 12.0001 2.17035 11.9691 2.27995 11.9099C2.38955 11.8507 2.48268 11.7652 2.55093 11.661L3.58293 10.086C3.65182 9.98193 3.74558 9.8967 3.85572 9.83803C3.96586 9.77936 4.0889 9.74909 4.21369 9.74999Z" fill="#555555"/>
                      </g>
                    </svg>
                    <span>1590 flights</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <div className="page-banner-img position-relative z-1">
                <Image src={pageBanner} alt="banner" />
                <Image
                  src={mokaup}
                  className="mokup-11 position-absolute top-0 start-0 end-0 w-100 h-100"
                  alt="mokup"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;