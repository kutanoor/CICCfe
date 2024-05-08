"use client";

import Link from "next/link";
import Image from "next/image";

// import blackLogo from "/public/images/logo.svg";
import whiteLogo from "/public/images/ciccwhitelogo.png";

// socialsLinkData
const socialsLinkData = [
	{
		iconName: "ri-facebook-fill",
		url: "https://facebook.com/CICC-Council-of-International-Chambers-of-Commerce-109240164562997",
	},
	{
		iconName: "ri-twitter-fill",
		url: "https://twitter.com/cicccommerce",
	},
	{
		iconName: "ri-instagram-line",
		url: "https://instagram.com/cicccommerce",
	},
	{
		iconName: "ri-linkedin-fill",
		url: "https://linkedin.com/company/cicccommerce",
	},
];

const Footer = () => {
  return (
		<>
			<div className='footer-area pt-175 pb-150 bg-gray-800 text-white'>
				<div className='container '>
					<div className='row justify-content-center'>
						<div className='col-lg-4'>
							<div className='footer-single-widget mw-310'>
								<Link href='/' className='logo d-inline-block'>
									<Image
										src={whiteLogo}
										className='d-block dark-none w-full'
										alt='logo'
									/>
									<Image
										src={whiteLogo}
										className='d-none dark-block w-full'
										alt='logo'
									/>
								</Link>

								<p>
									Built on the pillars of blockchain
									technology, tokenization, and regulatory
									compliance, CICC estateDAO envisions a
									decentralized ecosystem that empowers
									investors to seamlessly participate in the
									real estate market.
								</p>

								{socialsLinkData && (
									<ul className='d-flex align-items-center p-0 mb-0 list-unstyled follow-us text-white'>
										{socialsLinkData &&
											socialsLinkData.map((value, i) => (
												<li key={i}>
													<a
														href={value.url}
														target='_blank'>
														<i
															className={
																value.iconName
															}></i>
													</a>
												</li>
											))}
									</ul>
								)}
							</div>
						</div>

						<div className='col-lg-8'>
							<div className='row'>
								<div className='col-lg-4 col-sm-6'>
									<div className='footer-single-widget'>
										<h3 className='text-white'>
											Quick Links
										</h3>

										<ul className='p-0 m-0 list-unstyled import-link text-gray-50'>
											<li>
												<Link
													className='text-white'
													href='https://docsend.com/view/5haqmk7p46vipkbc'>
													White Paper
												</Link>
											</li>

											<li>
												<Link
													className='text-white'
													href='/ecosystem'>
													Ecosystem
												</Link>
											</li>
											<li>
												<Link
													className='text-white'
													href='/about-us'>
													About us
												</Link>
											</li>
											<li>
												<Link
													className='text-white'
													href='/privacy-policy'>
													Privacy Policy
												</Link>
											</li>
											<li>
												<Link
													className='text-white'
													href='/terms-conditions'>
													Terms and Conditions
												</Link>
											</li>
											<li>
												<Link
													href='/contact-us'
													className='text-white  cursor-pointer '>
													Contact us
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className='col-lg-4 col-sm-6'>
									<div className='footer-single-widget'>
										<h3 className='text-white'>
											Property Type
										</h3>

										<ul className='p-0 m-0 list-unstyled import-link'>
											<li>
												<Link
													href='/investmentPool'
													className='text-white'>
													Residential
												</Link>
											</li>
											<li>
												<Link
													href='/investmentPool'
													className='text-white'>
													Commercial
												</Link>
											</li>
											<li>
												<Link
													href='/investmentPool'
													className='text-white'>
													Industrial
												</Link>
											</li>
											<li>
												<Link
													href='/investmentPool'
													className='text-white'>
													Retail
												</Link>
											</li>
											<li>
												<Link
													href='/investmentPool'
													className='text-white'>
													Office
												</Link>
											</li>
										</ul>
									</div>
								</div>

								<div className='col-lg-4 col-sm-6'>
									<div className='footer-single-widget'>
										<h3 className='text-white'>
											Official Info
										</h3>

										<ul className='p-0 m-0 list-unstyled info-official'>
											<li className='d-flex'>
												<i className='ri-map-pin-2-fill'></i>
												<div className='ms-3 text-white'>
													<h4 className='text-white'>
														Location:
													</h4>
													Tomang Raya Street, Block MM
													Kav. 557, 3rd Floor, No.
													51E, Jakarta 11440,
													Indonesia
												</div>
											</li>
											<li className='d-flex'>
												<i className='ri-mail-fill'></i>
												<div className='ms-3'>
													<h4 className='text-white'>
														Email:
													</h4>
													<a
														href='mailto:md-blockchain@council-icc.org'
														className='text-white'>
														md-blockchain@council-icc.org
													</a>
												</div>
											</li>
											<li className='d-flex'>
												<i className='ri-mail-fill'></i>
												<div className='ms-3'>
													<h4 className='text-white'>
														WhatsApp:
													</h4>
													<p>+918982107735 </p>
												</div>
											</li>
											{/* <li className='d-flex'>
												<i className='ri-phone-fill'></i>
												<div className='ms-3'>
													<h4>Phone:</h4>
													<a href='tel:(+30)098765432150'>
														(+30) 098765432150
													</a>
												</div>
											</li> */}
										</ul>
										<Link
											href='/contact-us'
											className='text-blue-500 md:ml-8  '>
											Contact us
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='copy-right-area'>
				<div className='container'>
					<p>
						© <span>2024</span> All Rights Reserved{" "}
						<a href='https://cicc.app/' target='_blank'>
							CICC estateDAO
						</a>
					</p>
				</div>
			</div>
		</>
  );
};

export default Footer;
