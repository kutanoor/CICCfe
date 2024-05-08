/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import Image from "next/image";

import placeImg1 from "/public/images/popular/popular-7.jpg";
import placeImg2 from "/public/images/popular/popular-8.jpg";
import placeImg3 from "/public/images/popular/popular-9.jpg";
import placeImg4 from "/public/images/popular/popular-10.jpg";
import placeImg5 from "/public/images/popular/popular-11.jpg";
import placeImg6 from "/public/images/popular/popular-12.jpg";

const Tanzania = () => {
  return (
		<>
			<div className='row justify-content-center'>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>01</h1>
							<h3>
								<Link href='/investmentPool'>
									User Interaction
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									Users interact with the platform through the
									User Interface (UI), initiating actions such
									as account creation, investment decisions,
									and withdrawal requests.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>02</h1>
							<h3>
								<Link href='/investmentPool'>
									Real Estate Investment
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									Users can invest in Real Estate with Cicc
									Tokens, and can buy a small portion of
									property through Blockchian
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>03</h1>
							<h3>
								<Link href='/investmentPool'>Tokenization</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									When a real estate project is listed, the
									tokenization process begins, converting the
									real estate asset into investable and
									tradable native CICC tokens.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>04</h1>

							<h3>
								<Link href='/investmentPool'>
									Investment Pool Creation{" "}
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									Decentralized Pools are created for each
									listed property which enables direct
									investment in CICC tokens with fractional
									ownership.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>05</h1>
							<h3>
								<Link href='/investmentPool'>
									Investment Process{" "}
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									Users, equipped with CICC, USDT, or ARB
									tokens can invest directly in the created
									Investment Pools. The investment is securely
									recorded on the blockchain.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>06</h1>
							<h3>
								<Link href='/investmentPool'>
									CICC estateDAO Operations{" "}
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									It is a multi-member on-chain entity,
									manages depositing and distributing funds,
									ensuring compliance with regulatory
									requirements.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>07</h1>
							<h3>
								<Link href='/investmentPool'>
									User Withdrawals
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									Investors can see and initiate withdrawable
									amount in either of CICC, USDT, ARB tokens
									through the platform, triggering the process
									of claiming back their investments.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>08</h1>
							<h3>
								<Link href='/investmentPool'>
									Fund Distribution
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									The CICC estateDAO deposits funds in either
									the Principal or Return heads, dynamically
									adjusting the user`&apos;`s ownership
									proportion accordingly.
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-content'>
							<h1 className='text-gray-400 mb-2'>09</h1>
							<h3>
								<Link href='/investmentPool'>
									Multiple Pools
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<span>
									Users can invest directly in multiple pools
									and can see their Proportionate holdings,
									Principle amount invested, withdraable
									tokens in Dashboard.
								</span>
							</div>
						</div>
					</div>
				</div>

				{/* <div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-img position-relative'>
							<Link href='/investmentPool'>
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
								<Link href='/investmentPool'>
									Java Bali One Life Adventures
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<i className='flaticon-location'></i>
								<span>Dodoma, officially Dodoma City</span>
							</div>

							<div className='d-flex align-items-center justify-content-between most-popular-single-price'>
								<p>
									<span className='title'>$452</span> / Per
									Person
								</p>
								<p>3 Days/6 Night</p>
							</div>
						</div>
					</div>
				</div> */}

				{/* <div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-img position-relative'>
							<Link href='/investmentPool'>
								<Image src={placeImg3} alt='place' />
							</Link>
							<div className='most-popular-single-heart-discount d-flex justify-content-between align-items-center'>
								<button type='button' className='heart'>
									<i className='flaticon-heart'></i>
								</button>

								

								<span className='discount'>-10% Today</span>
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
									<span>(2k+ Rating)</span>
								</li>
							</ul>
							<h3>
								<Link href='/investmentPool'>
									Yucatan Peninsula Caribbean
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<i className='flaticon-location'></i>
								<span>Mwanza is a port city</span>
							</div>

							<div className='d-flex align-items-center justify-content-between most-popular-single-price'>
								<p>
									<span className='title'>$380</span> / Per
									Person
								</p>
								<p>2 Days/5 Night</p>
							</div>
						</div>
					</div>
				</div> */}

				{/* <div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-img position-relative'>
							<Link href='/investmentPool'>
								<Image src={placeImg4} alt='place' />
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
									<span>(6k+ Rating)</span>
								</li>
							</ul>
							<h3>
								<Link href='/investmentPool'>
									Mykonos And Santorini Tour
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<i className='flaticon-location'></i>
								<span>Tabora is the capital of Tanzania</span>
							</div>

							<div className='d-flex align-items-center justify-content-between most-popular-single-price'>
								<p>
									<span className='title'>$621</span> / Per
									Person
								</p>
								<p>5 Days/7 Night</p>
							</div>
						</div>
					</div>
				</div> */}

				{/* <div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-img position-relative'>
							<Link href='/investmentPool'>
								<Image src={placeImg5} alt='place' />
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
									<span>(6k+ Rating)</span>
								</li>
							</ul>
							<h3>
								<Link href='/investmentPool'>
									Los Glaciares & Fitz Roy Trip
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<i className='flaticon-location'></i>
								<span>Sumbawanga is a city located</span>
							</div>

							<div className='d-flex align-items-center justify-content-between most-popular-single-price'>
								<p>
									<span className='title'>$510</span> / Per
									Person
								</p>
								<p>3 Days/6 Night</p>
							</div>
						</div>
					</div>
				</div> */}

				{/* <div className='col-xl-4 col-md-6'>
					<div className='most-popular-single-item'>
						<div className='most-popular-single-img position-relative'>
							<Link href='/investmentPool'>
								<Image src={placeImg6} alt='place' />
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
									<span>(1.5k+ Rating)</span>
								</li>
							</ul>
							<h3>
								<Link href='/investmentPool'>
									Best Western Caders Hotel
								</Link>
							</h3>

							<div className='d-flex align-items-center most-popular-single-location'>
								<i className='flaticon-location'></i>
								<span>Bukoba is a city with a population</span>
							</div>

							<div className='d-flex align-items-center justify-content-between most-popular-single-price'>
								<p>
									<span className='title'>$180</span> / Per
									Person
								</p>
								<p>4 Days/6 Night</p>
							</div>
						</div>
					</div>
				</div> */}

				<div className='col-xl-12 text-center'>
					<Link href='/stay' className='default-btn active mt-35'>
						Invest in properties
					</Link>
				</div>
			</div>
		</>
  );
};

export default Tanzania;
