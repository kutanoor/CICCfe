"use client";

import Image from "next/image";

import chooseImg from "/public/images/banner/blockchain.png";
import mokup from "/public/images/banner/blockchain.png";
import shapeImg from "/public/images/banner/blockchain.jpeg";

const WhyChooseUs = () => {
  return (
		<>
			<div className='choose-area ptb-175'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6 mb-5 border-b '>
							<div className='choose-content'>
								<span className='top-title'>
									WHY CHOOSE CICC
								</span>
								<h1 className='text-4xl'>
									Blockchain technology and the native CICC
									token.
								</h1>
								<p>
									The CICC estateDAO introduces a
									groundbreaking approach to real estate
									investment by leveraging blockchain
									technology and the native CICC token.
								</p>

								<ul className='choose-content-list p-0 mb-0 list-unstyled'>
									<li>
										<div className='d-flex'>
											<div className='flex-shrink-0'>
												<div className='icon'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'>
														<path
															d='M3.66565 11.1119C3.25144 11.113 2.84602 11.2314 2.49631 11.4534C2.14659 11.6753 1.86686 11.9918 1.68947 12.3661C1.51209 12.7404 1.44431 13.1573 1.49397 13.5685C1.54363 13.9797 1.70871 14.3685 1.97009 14.6898L7.54225 21.5157C7.74092 21.7624 7.99559 21.9581 8.2851 22.0866C8.57461 22.2151 8.8906 22.2727 9.20683 22.2545C9.88317 22.2182 10.4938 21.8564 10.8831 21.2615L22.4579 2.62037C22.4598 2.61728 22.4618 2.61419 22.4638 2.61114C22.5724 2.44439 22.5372 2.11393 22.313 1.90633C22.2514 1.84932 22.1788 1.80552 22.0997 1.77763C22.0205 1.74974 21.9365 1.73834 21.8528 1.74415C21.7691 1.74996 21.6874 1.77284 21.6129 1.81139C21.5383 1.84994 21.4725 1.90335 21.4194 1.96831C21.4152 1.97342 21.4109 1.97845 21.4065 1.9834L9.73322 15.1725C9.6888 15.2227 9.63485 15.2636 9.57451 15.2927C9.51416 15.3219 9.44862 15.3388 9.3817 15.3424C9.31478 15.346 9.2478 15.3363 9.18466 15.3138C9.12152 15.2913 9.06348 15.2565 9.01391 15.2114L5.13976 11.6859C4.73739 11.3171 4.21149 11.1123 3.66565 11.1119Z'
															fill='#10B981'
														/>
													</svg>
												</div>
											</div>
											<div className='flex-grow-1 ms-40'>
												<h4>PROBLEM</h4>
												<p>
													The rigid structures of the
													existing real estate
													investment mechanisms makes
													it difficult for investors
													to navigate and capitalise
													on the dynamic nature of the
													modern financial world.
												</p>
											</div>
										</div>
									</li>

									<li>
										<div className='d-flex'>
											<div className='flex-shrink-0'>
												<div className='icon'>
													<svg
														xmlns='http://www.w3.org/2000/svg'
														width='24'
														height='24'
														viewBox='0 0 24 24'
														fill='none'>
														<path
															d='M3.66565 11.1119C3.25144 11.113 2.84602 11.2314 2.49631 11.4534C2.14659 11.6753 1.86686 11.9918 1.68947 12.3661C1.51209 12.7404 1.44431 13.1573 1.49397 13.5685C1.54363 13.9797 1.70871 14.3685 1.97009 14.6898L7.54225 21.5157C7.74092 21.7624 7.99559 21.9581 8.2851 22.0866C8.57461 22.2151 8.8906 22.2727 9.20683 22.2545C9.88317 22.2182 10.4938 21.8564 10.8831 21.2615L22.4579 2.62037C22.4598 2.61728 22.4618 2.61419 22.4638 2.61114C22.5724 2.44439 22.5372 2.11393 22.313 1.90633C22.2514 1.84932 22.1788 1.80552 22.0997 1.77763C22.0205 1.74974 21.9365 1.73834 21.8528 1.74415C21.7691 1.74996 21.6874 1.77284 21.6129 1.81139C21.5383 1.84994 21.4725 1.90335 21.4194 1.96831C21.4152 1.97342 21.4109 1.97845 21.4065 1.9834L9.73322 15.1725C9.6888 15.2227 9.63485 15.2636 9.57451 15.2927C9.51416 15.3219 9.44862 15.3388 9.3817 15.3424C9.31478 15.346 9.2478 15.3363 9.18466 15.3138C9.12152 15.2913 9.06348 15.2565 9.01391 15.2114L5.13976 11.6859C4.73739 11.3171 4.21149 11.1123 3.66565 11.1119Z'
															fill='#10B981'
														/>
													</svg>
												</div>
											</div>
											<div className='flex-grow-1 ms-40'>
												<h4>SOLUTION</h4>
												<p>
													To democratize access to
													real estate opportunities,
													allowing investors to
													seamlessly tokenize and
													trade fractional ownership
													in listed projects.
												</p>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className='col-lg-6'>
							<div className='choose-img position-relative text-lg-end overflow-hidden md:h-[680px] h-[360px] items-center justify-center'>
								<Image src={chooseImg} alt='choose' className="items-center justify-center md:mt-32 rounded" />

								{/* {/* <Image
									src={mokup}
									className='mokup-2 position-absolute top-0 start-0 end-0'
									alt='mokup-2'
								/> */}
								{/* <Image
									src={shapeImg}
									className='shape shape-6'
									alt='shape-6'
								/>  */}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
  );
};

export default WhyChooseUs;
