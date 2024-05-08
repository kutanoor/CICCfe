"use client";

import React from "react";
import Image from "next/image";
import Dubai from 'public/images/banner/dubai11.jpg'
import dubai from "/public/images/banner/dubai11.jpg";


const benefitsData = [
	{
		id: "1",
		icon: "/images/icons/icon1.png",
		title: "Control your investments",
		shortText:
			"Sl",
	},
	{
		id: "2",
		icon: "/images/icons/icon2.png",
		title: "Get LP tokens to trade in or to Earn passive Income",
		shortText:
			"Sliquam ses justo sit amet urna set uctor sceris quinterdum anet temp",
	},
	{
		id: "3",
		icon: "/images/icons/icon3.png",
		title: "Deposit & Withdraw from Decentralized Property Pools",
		shortText:
			"Sliquam ses justo sit amet urna set uctor sceris quinterdum anet temp",
	},
];

const Benefits: React.FC = () => {
  return (
		<>
			<div className='absolute mx-auto w-full -z-10 '>
				{/* <video
					loop={true}
					autoPlay
					muted
					playsInline
					className='w-full mx-auto  '
					src='https://player.vimeo.com/progressive_redirect/playback/445722868/rendition/360p/file.mp4?loc=external&oauth2_token_id=1747418641&signature=3a08abe37eb5a7787dd27283906a74a6bb82263ec09507da1ab40607708d1b91'>
					Your browser does not support the video tag.
				</video> */}
				{/* <Image src={dubai} className=' h-[740px] w-full' alt='mokup' /> */}
				<div className='relative md:h-[740px] h-[1060px] w-full overflow-hidden'>
					<Image
						src={dubai}
						className='h-full  mx-auto object-cover animation-loop'
						alt='mockup'
					/>
					
				</div>
			</div>
			<div className='benefits-area pt-175 pb-150'>
				<div className='container'>
					<div className='section-title'>
						<span className='top-title'>BENEFITS</span>
						<h2 className="text-xl font-extrabold">INVEST IN PROPERTIES USING WORLD{"'"}S ONLY MINT AND BURN PROTOCOL</h2>
						<h1 className='bg-white rounded-3xl py-2 w-[80%] mx-auto'>
							REVOLUTIONIZING REAL ESTATE INVESTMENT THROUGH
							TOKENIZATION
						</h1>
					</div>

					{benefitsData && (
						<div className='row justify-content-center'>
							{benefitsData &&
								benefitsData.map((value, i) => (
									<div
										className='col-lg-4 col-sm-6 for-child'
										key={i}>
										<div className='benefits-single-item me-lg-auto items-center  bg-black bg-opacity-50  text-gray-300 p-2 py-3 rounded-2xl '>
											<Image
												src={value.icon}
												alt='icon'
												width={110}
												height={110}
												className='mx-auto'
											/>
											<h4 className='text-gray-100 text-lg '>
												{value.title}
											</h4>
											{/* <p>{value.shortText}</p> */}
										</div>
									</div>
								))}
						</div>
					)}
				</div>
			</div>
		</>
  );
};

export default Benefits;
