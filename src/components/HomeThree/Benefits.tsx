"use client";

import React from "react";
import Image from "next/image";

const benefitsData = [
	{
		id: "1",
		icon: "/images/icons/icon1.png",
		title: "Tokenization of Real Estate",
		shortText:
			"CICC estateDAO revolutionizes real estate investment by tokenizing assets, breaking down traditional barriers and allowing fractional ownership.",
	},
	{
		id: "2",
		icon: "/images/icons/icon2.png",
		title: "Flexible Investment Pools",
		shortText:
			"The creation of smart contract-based Investment Pools for each listed property facilitates direct investment and transparent fractional ownership.",
	},
	{
		id: "3",
		icon: "/images/icons/icon3.png",
		title: "Dynamic APY Calculation",
		shortText:
			"CICC estateDAO introduces a dynamic Annual Percentage Yield (APY) calculation based on deposit actions initiated by the CICC DAO.",
	},
	{
		id: "4",
		icon: "/images/icons/icon14.png",
		title: "Streamlined Withdrawal and Deposit Mechanism",
		shortText:
			"CICC estateDAO simplifies the withdrawal process, providing investors with liquidity and flexibility.",
	},
];

const Benefits: React.FC = () => {
  return (
		<>
			<div className='benefits-area pt-175 pb-150'>
				<div className='container'>
					<div className='section-title'>
						<span className='top-title'>BENEFITS</span>
						<h2>Tokenizing Real Estate Across Countries</h2>
					</div>

					{benefitsData && (
						<div className='row justify-content-center'>
							{benefitsData &&
								benefitsData.map((value, i) => (
									<div
										className='col-lg-3 col-sm-6 for-child'
										key={i}>
										<div className='benefits-single-item style-three'>
											<Image
												src={value.icon}
												alt='icon'
												width={110}
												height={110}
											/>
											<h6>{value.title}</h6>
											<p>{value.shortText}</p>
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
