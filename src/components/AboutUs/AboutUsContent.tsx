"use client"; 

import Image from "next/image";

import aboutImg from "/public/images/about-img.jpg"; 
import mokaup from "/public/images/banner/dubai9.jpg"; 

const AboutUsContent = () => {
  return (
		<>
			<div className='destination-area pt-175'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='about-img position-relative z-1'>
								<Image src={aboutImg} alt='about' className="rounded-2xl " />
								<Image
									src={mokaup}
									className='mokup-12 position-absolute top-0 start-0 end-0 w-100 h-100 rounded-2xl'
									alt='mokup'
								/>
							</div>
						</div>

						<div className='col-lg-6'>
							<div className='destination-content'>
								<span className='top-title'>
									WELCOME TO CICC
								</span>
								<h1 className='text-3xl'>
									CICC tokenize real estate assets,
									transforming them into tradable and
									fractionalized units represented by the CICC
									token.
								</h1>
								<p className='mb-33'>
									By creating smart contract-based Investment
									Pools for each listed property, It
									democratizes access to real estate
									investment and introduces a level of
									flexibility and liquidity previously unseen
									in the industry. .
								</p>

								<ul className='p-0 list-unstyled destination-content-list mb-0'>
									<li>
										<div className='d-flex'>
											<div className='flex-shrink-0'>
												<span className='count'>
													01
												</span>
											</div>
											<div className='flex-grow-1 ms-35'>
												<h4>
													Decentralized Investment
													Pools
												</h4>
												<p>
													Smart contract-based
													Investment Pools are created
													for each listed property to
													enable direct investment,
													and each investor receives
													proportional tokens
													representing their
													fractional ownership.
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className='d-flex'>
											<div className='flex-shrink-0'>
												<span className='count'>
													02
												</span>
											</div>
											<div className='flex-grow-1 ms-35'>
												<h4>Investment Process</h4>
												<p>
													Users, equipped with CICC,
													USDT, or ARB tokens, invest
													in the created Investment
													Pools. The investment is
													securely recorded on the
													blockchain.
												</p>
											</div>
										</div>
									</li>
									<li>
										<div className='d-flex'>
											<div className='flex-shrink-0'>
												<span className='count'>
													03
												</span>
											</div>
											<div className='flex-grow-1 ms-35'>
												<h4>
													CICC DAO Fund Distribution
												</h4>
												<p>
													The CICC DAO deposits funds
													in either the Principal or
													Return heads, dynamically
													adjusting the user{"'"}s 
													ownership proportion
													accordingly.
												</p>
											</div>
										</div>
									</li>
								
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
  );
};

export default AboutUsContent;
