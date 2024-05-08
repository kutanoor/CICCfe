"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';

import placeImg1 from "/public/images/popular/popular-1.jpg";
import PropertyImageSlider from './PropertyImageSlider'

import FilterHeader from "./FilterHeader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoadingSpinner from './LoadingSpinner'; // Assume you have this component



const ListingCardContent = () => {
	const [poolData, setPoolData] = useState<any>([]);
	const [isLoading, setIsLoading] = useState(true); // Added loading state

	 useEffect(() => {
			const fetchData = async () => {
				try {
					const headers = {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "*",
					};

					const response = await axios.get(
						"http://localhost:8000/api/pool/allPool",
						{ headers }
					);
					setPoolData(response.data.allPool);
				} catch (error) {
					console.error("There was an error!", error);
				} finally {
					setIsLoading(false); // Set loading to false when the data is fetched
				}
			};
			fetchData();
		}, []);

		if (isLoading) {
			return <LoadingSpinner />; // Render loading spinner while fetching data
		}// The empty dependency array means this effect will only run once after the initial render

	return (
		<>
			<div className='most-popular-area ptb-175'>
				<div className='container'>
					{/* FilterHeader */}
					<FilterHeader />

					<div className='row justify-content-center'>
						{poolData.map((pool: any) => (
							<div key={pool._id} className='col-xl-4 col-md-6'>
								<div className='most-popular-single-item'>
									<div className='most-popular-single-img position-relative'>
										<Link
											href={`/pool-details/${pool._id}`}>
											<PropertyImageSlider
												images={
													pool.propertyImages || [
														placeImg1,
													]
												}
											/>
										</Link>

										<div className='most-popular-single-heart-discount d-flex justify-content-between align-items-center'>
											<button
												type='button'
												className='heart'>
												<i className='flaticon-heart'></i>
											</button>
											<span className='bg-green-600 rounded-full px-3 text-white font-semibold'>
												{pool.estimatedReturn}% Anual
												Return
											</span>
										</div>
									</div>

									<div className='most-popular-single-content'>
										<ul className='ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star -mb-12'>
											Estimated MPY - Duration:{" "}
											{pool.estimatedMPY} -{" "}
											{pool.estimatedMaturity} Months
										</ul>

										<h3>
											<Link
												href={`/pool-details/${pool._id}`}>
												{pool.propertyTitle}
											</Link>
										</h3>

										<div className='d-flex align-items-center most-popular-single-location'>
											<i className='flaticon-location'></i>
											<span>{pool.location}</span>
										</div>

										<div className='d-flex align-items-center justify-content-between most-popular-single-price'>
											<p>
												<span className='text-sm'>
													Pool Size
												</span>{" "}
												<span className='title text-green-600'>
													{pool.poolSize} USDT
												</span>{" "}
												{/* Assuming poolSize is in USDT */}
											</p>
											<Link
												href={`/pool-details/${pool._id}`}>
												<button className='border rounded-md p-1 px-2 bg-blue-600 text-white hover:bg-blue-800 hover:text-white'>
													Invest now
												</button>
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}

						{/* <div className='col-xl-4 col-md-6'>
							<div className='most-popular-single-item'>
								<div className='most-popular-single-img position-relative'>
									<Link href='/stay-details'>
										<Image src={placeImg2} alt='place' />
									</Link>
									<div className='most-popular-single-heart-discount d-flex justify-content-between align-items-center'>
										<button type='button' className='heart'>
											<i className='flaticon-heart'></i>
										</button>

										
									</div>
								</div>

								<div className='most-popular-single-content'>
									<ul className='ps-0 pe-0 list-unstyled d-flex align-items-center most-popular-single-star'>
										<li>
											<i className='ri-star-fill'></i>
										</li>
										<li>
											<i className='ri-star-fill'></i>
										</li>
										<li>
											<i className='ri-star-fill'></i>
										</li>
										<li>
											<i className='ri-star-fill'></i>
										</li>
										<li>
											<i className='ri-star-fill'></i>
										</li>
										<li>
											<span>(1k+ Rating)</span>
										</li>
									</ul>
									<h3>
										<Link href='/stay-details'>
											Java Bali One Life Adventures
										</Link>
									</h3>

									<div className='d-flex align-items-center most-popular-single-location'>
										<i className='flaticon-location'></i>
										<span>The Grand Palace</span>
									</div>

									<div className='d-flex align-items-center justify-content-between most-popular-single-price'>
										<p>
											<span className='title'>$452</span>{" "}
											/ Per Person
										</p>
										<p>3 Days/6 Night</p>
									</div>
								</div>
							</div>
						</div>

						
						{/* Pagination */}
						<div className='col-lg-12 '>
							<div className='pagination-area text-center flex items-center justify-center'>
								<Link
									href='#'
									className='next page-numbers flex items-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='15'
										height='15'
										viewBox='0 0 15 15'
										className='mt-[12px] ml-2'
										fill='none'>
										<g clipPath='url(#clip0_3719_2626)'>
											<path
												d='M3.60973 7.0177L10.4279 0.199699C10.6941 -0.0665738 11.1259 -0.0665739 11.3921 0.199744C11.6584 0.466017 11.6584 0.897699 11.3921 1.16397L5.05605 7.49988L11.3921 13.8361C11.6584 14.1024 11.6584 14.5341 11.3921 14.8003C11.259 14.9335 11.0845 15 10.91 15C10.7355 15 10.561 14.9335 10.4279 14.8003L3.60973 7.98192C3.48182 7.85406 3.41 7.68065 3.41 7.49983C3.41 7.31902 3.48182 7.14556 3.60973 7.0177Z'
												fill='#111827'
											/>
										</g>
									</svg>
								</Link>

								<span
									className='page-numbers'
									aria-current='page'>
									1
								</span>
								<Link href='#' className='page-numbers current'>
									2
								</Link>
								<Link href='#' className='page-numbers'>
									3
								</Link>

								<Link href='#' className='next page-numbers '>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='15'
										height='15'
										viewBox='0 0 15 15'
										fill='none'
										className='mt-[12px] ml-3'>
										<g transform='translate(0, -0.5)'>
											<path
												d='M11.3903 7.0177L4.57209 0.199699C4.30587 -0.0665738 3.87414 -0.0665739 3.60787 0.199744C3.34164 0.466017 3.34164 0.897699 3.60791 1.16397L9.94395 7.49988L3.60787 13.8361C3.34164 14.1024 3.34164 14.5341 3.60791 14.8003C3.741 14.9335 3.9155 15 4.09 15C4.2645 15 4.439 14.9335 4.57214 14.8003L11.3903 7.98192C11.5182 7.85406 11.59 7.68065 11.59 7.49983C11.59 7.31901 11.5182 7.14556 11.3903 7.0177Z'
												fill='#111827'
											/>
										</g>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ListingCardContent;
