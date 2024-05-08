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

import authorImg from "/public/images/author/author-19.jpg";
import Navbar from "@/components/Layout/Navbar";
import PageBannerTitle from "@/components/Common/PageBannerTitle";
import authorImg1 from "/public/images/author/author-15.jpg";
import authorImg2 from "/public/images/author/author-16.jpg"; 
import ImageSlider from "@/components/Stay/ImageSlider";

const PoolDetails = ({ params }: any) => {
	const poolId = params.poolId;

	console.log(poolId);
	const [poolDetails, setPoolDetails] = useState<any>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	console.log(poolDetails);

	useEffect(() => {
		if (!poolId) return;

		setLoading(true);

		const fetchPoolDetails = async () => {
			try {
				const response = await axios.post(
					`https://euiryebbnmbvd.cicc.app/api/pool/getPoolById`,
					JSON.stringify({ _id: poolId }), // Assuming the server is expecting a property named "_id"
					{
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				setPoolDetails(response.data.Pool[0]);
				console.log(response.data.Pool[0]);
			} catch (error) {
				console.error("Error fetching pool details:", error);
				setError("Failed to fetch pool details.");
			} finally {
				setLoading(false);
			}
		};

		fetchPoolDetails();
	}, [poolId]);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	if (!poolDetails) {
		return <div>No pool details found.</div>;
	}
	return (
		<>
			<Navbar />

			<PageBannerTitle
				title='Pool Details'
				homeText='Home'
				homeUrl='/'
				image='/images/banner/dubai9.jpg'
			/>

			<div className='stay-details-area ptb-175'>
				<div className='container'>
					<div className='stay-details-img'>
						<ImageSlider
							images={poolDetails.propertyImages || [icon5]}
						/>
					</div>

					<div className='row'>
						<div className='col-lg-8'>
							<div className='stay-details-content'>
								<div className='stay-amenities box-style'>
									<div className='box-title'>
										<h4>About</h4>
										<p>
											About the property&apos;s amenities
											and services
										</p>
									</div>

									<div className='row'>
										<div className='col-lg-4 col-sm-6'>
											<div className='d-flex align-items-center mb-25'>
												<Image
													src={icon1}
													alt='icon'
													width='20'
													height='20'
												/>
												<span className='ms-3'>
													{poolDetails.propertyTitle ||
														"A"}
												</span>
											</div>
										</div>

										<div className='col-lg-4 col-sm-6'>
											<div className='d-flex align-items-center mb-25'>
												<Image
													src={icon2}
													alt='icon'
													width='20'
													height='20'
												/>
												<span className='ms-3'>
													{poolDetails.location}
												</span>
											</div>
										</div>

										<div className='col-lg-4 col-sm-6'>
											<div className='d-flex align-items-center mb-25'>
												<Image
													src={icon3}
													alt='icon'
													width='20'
													height='20'
												/>
												<span className='ms-3'>
													{poolDetails.estimatedMaturity}
												</span>
											</div>
										</div>

										<div className='col-lg-4 col-sm-6'>
											<div className='d-flex align-items-center mb-25'>
												<Image
													src={icon4}
													alt='icon'
													width='20'
													height='20'
												/>
												<span className='ms-3'>
													{poolDetails.poolSize}
												</span>
											</div>
										</div>

										<div className='col-lg-4 col-sm-6'>
											<div className='d-flex align-items-center mb-25'>
												<Image
													src={icon5}
													alt='icon'
													width='20'
													height='20'
												/>
												<span className='ms-3'>
													{poolDetails.actualReturn}
												</span>
											</div>
										</div>

										<div className='col-lg-4 col-sm-6'>
											<div className='d-flex align-items-center mb-25'>
												<Image
													src={icon6}
													alt='icon'
													width='20'
													height='20'
												/>
												<span className='ms-3'>
													{poolDetails.actualMaturity}
												</span>
											</div>
										</div>
									</div>
								</div>

								{/* Rooom RATES */}
								<div className='stay-room-rates box-style'>
									<div className='box-title'>
										<h4>More Details </h4>
										<p>
											Prices may increase on weekends or
											holidays
										</p>
									</div>

									<ul className='p-0 mb-0 list-unstyled'>
										<li className='d-flex align-items-center justify-content-between'>
											<span>Pool Size</span>
											<span>${poolDetails.poolSize}</span>
										</li>
										<li className='d-flex align-items-center justify-content-between'>
											<span>
												Estimated MPY (Monthly
												Percentage Yield)
											</span>
											<span>
												${poolDetails.estimatedMPY}%
											</span>
										</li>
										<li className='d-flex align-items-center justify-content-between'>
											<span>
												Estimated Return (Admin Will set
												by multiplying MPY with
												Maturity)
											</span>
											<span>
												${poolDetails.estimatedReturn}%
											</span>
										</li>
										<li className='d-flex align-items-center justify-content-between'>
											<span>Estimated Maturity</span>
											<span>
												{poolDetails.estimatedMaturity}
											</span>
										</li>
										<li className='d-flex align-items-center justify-content-between'>
											<span>
												Soft Cap/Hard Cap(USDT/USDC)
											</span>
											<span>${poolDetails.softCap} </span>
										</li>
										<li className='d-flex align-items-center justify-content-between'>
											<span>
												Min. Invest/Max
												Invest(USDT/USDC)
											</span>
											<span>
												${poolDetails.minInvest}
											</span>
										</li>
										<li className='d-flex align-items-center justify-content-between'>
											<span>Pool Open for </span>
											<span>
												{poolDetails.poolOpenFor}
											</span>
										</li>
										<li className='d-flex align-items-center justify-content-between'>
											<span>Actual MPY</span>
											<span>
												{poolDetails.actualMPY} %
											</span>
										</li>
										<li className='d-flex align-items-center justify-content-between'>
											<span>Actual Return</span>
											<span>
												{poolDetails.actualReturn}%
											</span>
										</li>
										{/* <li className='d-flex align-items-center justify-content-between'>
						<span>Actual Maturity</span>
						<span>20 days</span>
					</li> */}
									</ul>
								</div>

								{/* <ReviewsList /> */}
								<div className='stay-comment-list box-style'>
									<div className='box-title pb-0 border-0'>
										<h4>2 Reviews</h4>
									</div>
									<ul className='p-0 mb-0 list-unstyled'>
										<li>
											<div className='d-lg-flex'>
												<div className='flex-shrink-0'>
													<Image
														src={authorImg1}
														className='rounded-circle'
														alt='author'
														width='80'
														height='80'
													/>
												</div>
												<div className='flex-grow-1 ms-4'>
													<div className='d-sm-flex align-items-center justify-content-between'>
														<div>
															<h4>
																James Scott 
															</h4>
															<span className='date'>
																Mar 15,2021 |
																05:20 PM
															</span>
														</div>
														<div className='d-flex align-items-center mb-2 mb-sm-0'>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
															<svg
																className='ms-2'
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
															<svg
																className='ms-2'
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
															<svg
																className='ms-2'
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
															<svg
																className='ms-2'
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
														</div>
													</div>

													<p className='mb-0'>
														Totally Worth Buying, everything about this property was great
													</p>
												</div>
											</div>
										</li>
										<li>
											<div className='d-lg-flex'>
												<div className='flex-shrink-0'>
													<Image
														src={authorImg2}
														className='rounded-circle'
														alt='author'
														width='80'
														height='80'
													/>
												</div>
												<div className='flex-grow-1 ms-4'>
													<div className='d-sm-flex align-items-center justify-content-between'>
														<div>
															<h4>
																Harris 
															</h4>
															<span className='date'>
																June 20,2023 |
																07:10 PM
															</span>
														</div>
														<div className='d-flex align-items-center mb-2 mb-sm-0'>
															<svg
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
															<svg
																className='ms-2'
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
															<svg
																className='ms-2'
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
															<svg
																className='ms-2'
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
															<svg
																className='ms-2'
																xmlns='http://www.w3.org/2000/svg'
																width='16'
																height='16'
																viewBox='0 0 16 16'
																fill='none'>
																<g clipPath='url(#clip0_3720_335)'>
																	<path
																		d='M15.9583 6.13755C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13349L8.78208 0.859335C8.64744 0.546094 8.34079 0.34333 8.00008 0.34333C7.65938 0.34333 7.35273 0.546094 7.21808 0.860067L5.39198 5.13349L0.773211 5.55281C0.433847 5.58419 0.147219 5.81356 0.0418692 6.13755C-0.0634802 6.46153 0.0338123 6.81688 0.290533 7.04089L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.0415C15.9656 6.81688 16.0636 6.46214 15.9583 6.13755Z'
																		fill='#FFC107'
																	/>
																</g>
															</svg>
														</div>
													</div>

													<p className='mb-0'>
														This property was very good.
													</p>
												</div>
											</div>
										</li>
									</ul>
								</div>

								{/* <ReviewForm /> */}
								<div className='stay-comment-replay box-style'>
									<div className='d-sm-flex align-items-end justify-content-between mb-5'>
										<div className='box-title border-0 mb-0 pb-0'>
											<h4>Add Your Review</h4>
											<p>
												Your ratings for this property
											</p>

											<div className='d-flex align-items-center'>
												<svg
													className='me-2'
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
													fill='none'>
													<g clipPath='url(#clip0_3720_460)'>
														<path
															d='M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z'
															fill='#FFC107'
														/>
													</g>
												</svg>
												<svg
													className='me-2'
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
													fill='none'>
													<g clipPath='url(#clip0_3720_460)'>
														<path
															d='M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z'
															fill='#FFC107'
														/>
													</g>
												</svg>
												<svg
													className='me-2'
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
													fill='none'>
													<g clipPath='url(#clip0_3720_460)'>
														<path
															d='M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z'
															fill='#FFC107'
														/>
													</g>
												</svg>
												<svg
													className='me-2'
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
													fill='none'>
													<g clipPath='url(#clip0_3720_460)'>
														<path
															d='M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z'
															fill='#FFC107'
														/>
													</g>
												</svg>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='16'
													height='16'
													viewBox='0 0 16 16'
													fill='none'>
													<g clipPath='url(#clip0_3720_460)'>
														<path
															d='M15.9583 6.13754C15.8536 5.81356 15.5662 5.58345 15.2262 5.55281L10.6082 5.13348L8.78208 0.859327C8.64744 0.546087 8.34079 0.343323 8.00008 0.343323C7.65938 0.343323 7.35273 0.546087 7.21808 0.86006L5.39198 5.13348L0.773211 5.55281C0.433847 5.58418 0.147219 5.81356 0.0418692 6.13754C-0.0634802 6.46152 0.0338123 6.81688 0.290533 7.04088L3.78122 10.1022L2.7519 14.6364C2.67658 14.9698 2.80598 15.3144 3.0826 15.5144C3.23128 15.6218 3.40524 15.6765 3.58066 15.6765C3.73191 15.6765 3.88193 15.6357 4.01658 15.5551L8.00008 13.1743L11.9821 15.5551C12.2735 15.7304 12.6408 15.7144 12.9168 15.5144C13.1936 15.3138 13.3229 14.9691 13.2475 14.6364L12.2182 10.1022L15.7089 7.04149C15.9656 6.81688 16.0636 6.46213 15.9583 6.13754Z'
															fill='#FFC107'
														/>
													</g>
												</svg>
											</div>
										</div>
									</div>

									<form>
										<div className='row'>
											<div className='col-lg-6'>
												<div className='form-group mb-4'>
													<input
														type='text'
														className='form-control'
														placeholder='Name'
													/>
												</div>
											</div>
											<div className='col-lg-6'>
												<div className='form-group mb-4'>
													<input
														type='email'
														className='form-control'
														placeholder='Email'
													/>
												</div>
											</div>
										</div>

										<div className='col-lg-12'>
											<div className='form-group mb-4'>
												<textarea
													className='form-control'
													placeholder='Write a review'
													cols={30}
													rows={10}></textarea>
											</div>
										</div>

										<div className='form-group'>
											<button
												type='submit'
												className='default-btn active rounded-10 border-0'>
												Submit Review
											</button>
										</div>
									</form>
								</div>

								{/* <Location /> */}
								<div className='stay-location box-style'>
									<div className='box-title'>
										<h4>Location</h4>
										<p>{poolDetails.location}</p>
									</div>
									<iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d206253.56867320824!2d-115.4868161862367!3d36.12487333558106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80beb782a4f57dd1%3A0x3accd5e6d5b379a3!2sLas%20Vegas%2C%20NV%2C%20USA!5e0!3m2!1sen!2sbd!4v1694505283124!5m2!1sen!2sbd'></iframe>
								</div>
							</div>
						</div>

						<div className='col-lg-4'>
							{/* <Sidebar /> */}
							<div className='stay-details-sidebar'>
								<div className='stay-single-sidebar-item'>
									<iframe
										width='full'
										className='full'
										height='315'
										src="https://www.youtube.com/embed/2xa5SR_B65M?si=_8Dp5-OnwG5QOvCt"
										title='YouTube video player'
										// frameborder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
										// referrerPolicy='strict-origin-when-cross-origin'
										allowFullScreen>
                                            </iframe>{" "}
								</div>

								<div className='stay-single-sidebar-item'>
									<div className='agent-information'>
										<h5>Developer Information</h5>

										<div className='d-flex align-items-center'>
											<div className='flex-shrink-0'>
												<Image
													src={authorImg}
													className='rounded-circle'
													alt='author-19.jpg'
												/>
											</div>
											<div className='flex-grow-1 ms-3'>
												<h4>Suresh Raina</h4>
												<span>
													Senior Sales Manager
												</span>
											</div>
										</div>

										<ul className='ps-0 pe-0 list-unstyled'>
											<li className='d-flex align-items-center'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='14'
													height='14'
													viewBox='0 0 14 14'
													fill='none'>
													<g clipPath='url(#clip0_3734_3205)'>
														<path
															d='M7.583 0.583288C7.583 0.428579 7.64446 0.280206 7.75385 0.170809C7.86325 0.0614132 8.01162 -4.4998e-05 8.16633 -4.4998e-05C9.71291 0.00165343 11.1957 0.61678 12.2892 1.71037C13.3828 2.80397 13.998 4.28671 13.9997 5.83329C13.9997 5.988 13.9382 6.13637 13.8288 6.24577C13.7194 6.35516 13.571 6.41662 13.4163 6.41662C13.2616 6.41662 13.1132 6.35516 13.0039 6.24577C12.8945 6.13637 12.833 5.988 12.833 5.83329C12.8316 4.59604 12.3395 3.40986 11.4646 2.53499C10.5898 1.66012 9.40358 1.16801 8.16633 1.16662C8.01162 1.16662 7.86325 1.10516 7.75385 0.995767C7.64446 0.886371 7.583 0.737998 7.583 0.583288ZM8.16633 3.49996C8.78517 3.49996 9.37866 3.74579 9.81625 4.18337C10.2538 4.62096 10.4997 5.21445 10.4997 5.83329C10.4997 5.988 10.5611 6.13637 10.6705 6.24577C10.7799 6.35516 10.9283 6.41662 11.083 6.41662C11.2377 6.41662 11.3861 6.35516 11.4955 6.24577C11.6049 6.13637 11.6663 5.988 11.6663 5.83329C11.6654 4.90532 11.2964 4.01561 10.6402 3.35944C9.98401 2.70326 9.09431 2.33422 8.16633 2.33329C8.01162 2.33329 7.86325 2.39475 7.75385 2.50414C7.64446 2.61354 7.583 2.76191 7.583 2.91662C7.583 3.07133 7.64446 3.2197 7.75385 3.3291C7.86325 3.4385 8.01162 3.49996 8.16633 3.49996ZM13.4706 9.76437C13.8086 10.1034 13.9985 10.5626 13.9985 11.0413C13.9985 11.52 13.8086 11.9792 13.4706 12.3182L12.9397 12.9301C8.16225 17.504 -3.46358 5.88112 1.03975 1.08846L1.71058 0.505122C2.04995 0.176517 2.50504 -0.00526637 2.97741 -0.000899674C3.44978 0.00346702 3.90143 0.193632 4.23467 0.528455C4.25275 0.546538 5.33367 1.95062 5.33367 1.95062C5.6544 2.28757 5.83294 2.73516 5.83218 3.20036C5.83142 3.66555 5.65142 4.11256 5.32958 4.44846L4.65408 5.29779C5.02791 6.2061 5.57754 7.0316 6.27138 7.72684C6.96522 8.42209 7.78961 8.97338 8.69717 9.34904L9.55175 8.66946C9.88769 8.34787 10.3346 8.16808 10.7997 8.16743C11.2647 8.16677 11.7122 8.34531 12.049 8.66596C12.049 8.66596 13.4525 9.74629 13.4706 9.76437ZM12.6679 10.6125C12.6679 10.6125 11.272 9.53862 11.2539 9.52054C11.1337 9.40138 10.9714 9.33453 10.8021 9.33453C10.6329 9.33453 10.4705 9.40138 10.3503 9.52054C10.3346 9.53687 9.158 10.4743 9.158 10.4743C9.07871 10.5374 8.98435 10.5788 8.88421 10.5943C8.78407 10.6099 8.68161 10.5991 8.58692 10.563C7.41118 10.1252 6.34326 9.43989 5.45549 8.55342C4.56771 7.66695 3.88082 6.60004 3.44133 5.42496C3.40237 5.32897 3.38966 5.22434 3.40453 5.12182C3.41939 5.0193 3.46129 4.92259 3.52592 4.84162C3.52592 4.84162 4.46333 3.66446 4.47908 3.64929C4.59824 3.52911 4.6651 3.36673 4.6651 3.1975C4.6651 3.02826 4.59824 2.86588 4.47908 2.74571C4.461 2.7282 3.38708 1.33112 3.38708 1.33112C3.26511 1.22175 3.10592 1.16318 2.94214 1.16741C2.77837 1.17164 2.62242 1.23835 2.50625 1.35387L1.83542 1.93721C-1.45575 5.89454 8.619 15.4105 12.0869 12.1333L12.6183 11.5208C12.7429 11.4054 12.8177 11.2462 12.8269 11.0767C12.8362 10.9072 12.7791 10.7408 12.6679 10.6125Z'
															fill='#10B981'
														/>
													</g>
												</svg>
												<a
													className='ms-2 text-decoration-none'
													href='tel:+000123456789'>
													+000 123 456 789
												</a>
											</li>

											<li className='d-flex align-items-center'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='14'
													height='14'
													viewBox='0 0 14 14'
													fill='none'>
													<g clipPath='url(#clip0_3734_3209)'>
														<path
															d='M11.0833 0.583374H2.91667C2.1434 0.5843 1.40208 0.891889 0.855295 1.43867C0.308514 1.98545 0.00092625 2.72678 0 3.50004L0 10.5C0.00092625 11.2733 0.308514 12.0146 0.855295 12.5614C1.40208 13.1082 2.1434 13.4158 2.91667 13.4167H11.0833C11.8566 13.4158 12.5979 13.1082 13.1447 12.5614C13.6915 12.0146 13.9991 11.2733 14 10.5V3.50004C13.9991 2.72678 13.6915 1.98545 13.1447 1.43867C12.5979 0.891889 11.8566 0.5843 11.0833 0.583374ZM2.91667 1.75004H11.0833C11.4326 1.75073 11.7737 1.85592 12.0627 2.05209C12.3517 2.24826 12.5754 2.52643 12.705 2.85079L8.23783 7.31854C7.90908 7.64597 7.46399 7.82981 7 7.82981C6.53601 7.82981 6.09092 7.64597 5.76217 7.31854L1.295 2.85079C1.42459 2.52643 1.64827 2.24826 1.93728 2.05209C2.22628 1.85592 2.56738 1.75073 2.91667 1.75004ZM11.0833 12.25H2.91667C2.45254 12.25 2.00742 12.0657 1.67923 11.7375C1.35104 11.4093 1.16667 10.9642 1.16667 10.5V4.37504L4.93733 8.14337C5.48487 8.68952 6.22665 8.99623 7 8.99623C7.77335 8.99623 8.51513 8.68952 9.06267 8.14337L12.8333 4.37504V10.5C12.8333 10.9642 12.649 11.4093 12.3208 11.7375C11.9926 12.0657 11.5475 12.25 11.0833 12.25Z'
															fill='#10B981'
														/>
													</g>
												</svg>
												<a
													className='ms-2 text-decoration-none'
													href='mailto:raina@suresh.com'>
													raina@suresh.com
												</a>
											</li>

											<li className='d-flex align-items-center'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													width='14'
													height='14'
													viewBox='0 0 14 14'
													fill='none'>
													<g clipPath='url(#clip0_3734_3213)'>
														<path
															d='M7.00033 3.5C6.53884 3.5 6.08771 3.63685 5.704 3.89324C5.32028 4.14963 5.02121 4.51404 4.84461 4.94041C4.668 5.36677 4.6218 5.83592 4.71183 6.28854C4.80186 6.74117 5.02409 7.15693 5.35041 7.48325C5.67673 7.80957 6.09249 8.0318 6.54512 8.12183C6.99774 8.21186 7.46689 8.16566 7.89326 7.98905C8.31962 7.81245 8.68403 7.51338 8.94042 7.12966C9.19681 6.74595 9.33366 6.29482 9.33366 5.83333C9.33366 5.21449 9.08783 4.621 8.65024 4.18342C8.21266 3.74583 7.61917 3.5 7.00033 3.5ZM7.00033 7C6.76958 7 6.54402 6.93158 6.35216 6.80338C6.1603 6.67519 6.01077 6.49298 5.92247 6.2798C5.83417 6.06662 5.81106 5.83204 5.85608 5.60573C5.90109 5.37942 6.01221 5.17154 6.17537 5.00838C6.33853 4.84521 6.54641 4.7341 6.77272 4.68908C6.99903 4.64407 7.23361 4.66717 7.44679 4.75547C7.65997 4.84378 7.84218 4.99331 7.97037 5.18517C8.09857 5.37703 8.16699 5.60259 8.16699 5.83333C8.16699 6.14275 8.04408 6.4395 7.82528 6.65829C7.60649 6.87708 7.30975 7 7.00033 7Z'
															fill='#10B981'
														/>
														<path
															d='M7.00018 13.9999C6.50898 14.0025 6.02433 13.8873 5.5868 13.664C5.14928 13.4407 4.77161 13.1158 4.48543 12.7166C2.26235 9.65003 1.13477 7.3447 1.13477 5.8642C1.13477 4.30859 1.75273 2.8167 2.85271 1.71672C3.95269 0.616741 5.44458 -0.0012207 7.00018 -0.0012207C8.55579 -0.0012207 10.0477 0.616741 11.1477 1.71672C12.2476 2.8167 12.8656 4.30859 12.8656 5.8642C12.8656 7.3447 11.738 9.65003 9.51493 12.7166C9.22875 13.1158 8.85109 13.4407 8.41356 13.664C7.97604 13.8873 7.49138 14.0025 7.00018 13.9999ZM7.00018 1.2722C5.78243 1.27359 4.61494 1.75795 3.75386 2.61904C2.89277 3.48012 2.40841 4.64761 2.40702 5.86536C2.40702 7.03786 3.51127 9.20611 5.5156 11.9705C5.68575 12.2049 5.90898 12.3957 6.16702 12.5272C6.42505 12.6587 6.71056 12.7273 7.00018 12.7273C7.28981 12.7273 7.57532 12.6587 7.83335 12.5272C8.09138 12.3957 8.31461 12.2049 8.48477 11.9705C10.4891 9.20611 11.5934 7.03786 11.5934 5.86536C11.592 4.64761 11.1076 3.48012 10.2465 2.61904C9.38542 1.75795 8.21794 1.27359 7.00018 1.2722Z'
															fill='#10B981'
														/>
													</g>
												</svg>
												<span className='ms-2'>
													3146 Koontz Lane, California
												</span>
											</li>
										</ul>

										<form>
											<div className='form-group mb-4'>
												<input
													type='text'
													className='form-control'
													placeholder='Full Name'
												/>
											</div>
											<div className='form-group mb-4'>
												<input
													type='text'
													className='form-control'
													placeholder='Phone Number'
												/>
											</div>
											<div className='form-group mb-4'>
												<input
													type='email'
													className='form-control'
													placeholder='Email Address'
												/>
											</div>
											<div className='form-group mb-4'>
												<textarea
													className='form-control'
													placeholder='Your Message'
													cols={30}
													rows={10}></textarea>
											</div>

											<button
												type='submit'
												className='default-btn rounded-10 active border-0 w-100 d-block'>
												Submit Request
											</button>
										</form>
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

export default PoolDetails;
