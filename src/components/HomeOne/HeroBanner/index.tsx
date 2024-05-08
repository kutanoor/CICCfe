"use client";

import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";

import BookingSearchForm from "./BookingSearchForm";

import Link from "next/link";
import Image from "next/image";

import heroImg from "/public/images/banner/dubai2.jpg";
import heroImg2 from "/public/images/banner/dubai5.jpg";

import shapeImg1 from "/public/images/shape/shape-1.png";
import shapeImg2 from "/public/images/shape/shape-2.png";
import textCircle from "/public/images/textimg.webp";

const HeroBanner = () => {
	// To open the lightbox change the value of the "toggler" prop.
	const [toggler, setToggler] = useState<boolean>(false);
	const texts = [
		"Real Estate tokenization across countries",
		"Accessible Investment opputunities across countries",
		"Buy, Sell or transfer ownership using P2P exchanges",
	];
	const [currentIndex, setCurrentIndex] = useState(0);
	const [visibleText, setVisibleText] = useState("");
	const [isErasing, setIsErasing] = useState(false);
	const [typingSpeed, setTypingSpeed] = useState(150);

	useEffect(() => {
		const typeText = () => {
			const currentText = texts[currentIndex];
			let index = visibleText.length;

			// If we're not currently erasing, type out the current text
			if (!isErasing && index < currentText.length) {
				setVisibleText(currentText.substring(0, index + 1));
				setTypingSpeed(100);
			}

			// Once the current text is fully typed out, set isErasing to true after a delay
			else if (!isErasing && index === currentText.length) {
				setIsErasing(true);
				setTypingSpeed(1000); // Delay before starting to erase
			}

			// If we're erasing, erase the text letter by letter
			else if (isErasing && index > 0) {
				setVisibleText(currentText.substring(0, index - 1));
				setTypingSpeed(100);
			}

			// Once text is fully erased, move on to the next text and set isErasing to false
			else if (isErasing && index === 0) {
				setIsErasing(false);
				setCurrentIndex((currentIndex + 1) % texts.length);
				setTypingSpeed(500); // Small delay before typing the next text
			}
		};

		const typingTimer = setTimeout(typeText, typingSpeed);
		return () => clearTimeout(typingTimer);
	}, [visibleText, isErasing]);

	return (
		<>
			{/* Use here youtube Embed video link */}

			<FsLightbox
				toggler={toggler}
				sources={["https://youtu.be/dWfcfhfklUs?si=sccV2zGnhkMB-g7a"]}
			/>

			<div className='banner-area banner-bg-1 bg-color-f3f4f6 overflow-hidden'>
				<div className='container-fluid mw-1640'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='banner-content'>
								<h1
									data-aos='fade-up'
									data-aos-delay='100'
									data-aos-duration='500'
									data-aos-once='true'
									className='px-2 md:px-0 md:text-3xl uppercase text-2xl'>
									World{"'"}s only Mint and Burn Protocol to Invest in Properties 
									<span className='uppercase md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-purple-900'>
										{" "}
										Across the Globe
									</span>
								</h1>
								<p
									className='font-bold px-2 md:px-0 md:ml-1 '
									data-aos='fade-up'
									data-aos-delay='200'
									data-aos-duration='500'
									data-aos-once='true'>
									{visibleText}|
								</p>

								{/* BookingSearchForm */}
								<BookingSearchForm />
							</div>
						</div>

						<div className='col-lg-6'>
							<div
								className='banner-img-wrap text-center text-sm-start'
								data-aos='fade-left'
								data-aos-delay='400'
								data-aos-duration='500'
								data-aos-once='true'>
								<div className='row align-items-end align-items-lg-center'>
									<div className='col-sm-6'>
										<div className='banner-img position-relative z-1 mx-auto'>
											<Image
												src={heroImg}
												alt='Hero Img'
											/>

											{/* Shape shadow */}
											<Image
												src={shapeImg1}
												className='shape shape-1 mx-auto'
												alt='shape-1'
											/>
										</div>
									</div>

									<div className='col-sm-6 h-100'>
										<div className='banner-img-two position-relative z-1'>
											<div
												className='video-play position-absolute top-93 start-50 translate-middle'
												onClick={() =>
													setToggler(!toggler)
												}>
												{/* <Image
													src={textCircle}
													className='text-circle rounded-[100%] bg-transparent w-[50%]'
													alt='text circle'
												/> */}
												<div className='play-btn mt-3 pl-3 border-2 border-green-500 rounded-full items-center'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='19'
														height='20'
														viewBox='0 0 19 20'
														fill='none'
														className='mt-2.5 ml-1'>
														<path d='M0.698242 4.10488C0.698242 2.5613 2.37267 1.59955 3.70598 2.37732L15.0743 9.00881C16.3973 9.78057 16.3973 11.6922 15.0743 12.4639L3.70599 19.0954C2.37267 19.8732 0.698242 18.9114 0.698242 17.3679V4.10488Z' />
													</svg>
												</div>
											</div>

											{/* Hero Image 2 */}
											<Image
												src={heroImg2}
												alt='hero Img 2'
											/>

											{/* Shape shadow */}
											<Image
												src={shapeImg2}
												className='shape shape-2'
												alt='shape'
											/>

											<h3 className='packages text-purple-600'>
												<Link
													href='/subscription '
													className='text-purple-500'>
													Best Packages
												</Link>
											</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HeroBanner;
