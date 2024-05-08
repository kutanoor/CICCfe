"use client";

import Link from "next/link";
import Image from "next/image";

import welcome from "/public/images/welcome-img.jpg";
import mokup from "/public/images/banner/dalle2.webp";
// import shape3 from "/public/images/shape/shape-3.png";
import shape3 from "/public/images/shape/shape-3.png";
import dubai from "/public/images/banner/dubai3.avif"


import shape4 from "/public/images/shape/shape-4.png";

const Welcome = () => {
  return (
		<>
			<div className='welcome-area py-28 pt-10 position-relative z-1'>
				<div className='container'>
					<div className='row align-items-center'>
						<div className='col-lg-6'>
							<div className='welcome-img position-relative z-1'>
								{/* <Image src={welcome} alt='welcome' /> */}
								<Image
									src={dubai}
									className='mokup-1 rounded-xl md:mt-5'
									alt='mokup'
								/>

								{/* Shape shadow */}
								{/* <Image
									src={shape3}
									className='shape shape-3'
									alt='shape'
								/> */}
							</div>
						</div>

						<div className='col-lg-6'>
							<div className='welcome-content'>
								<span className='top-title'>
									CICC ECOSYSTEM
								</span>
								<h2>CICC Real Estate Tokenization Platform</h2>
								<p>
									Built on the pillars of blockchain,
									tokenization, and regulatory compliance,
									CICC estateDAO envisions a decentralized
									ecosystem that empowers investors to
									seamlessly participate in the real estate
									market.
								</p>

								{/* <div className='row justify-content-center'>
									<div className='col-md-4 col-sm-6'>
										<div className='welcome-single-item'>
											<h4>30+</h4>
											<span>Years Of Experience</span>
										</div>
									</div>
									<div className='col-md-4 col-sm-6'>
										<div className='welcome-single-item'>
											<h4>60K+</h4>
											<span>Worldwide User</span>
										</div>
									</div>
									<div className='col-md-4 col-sm-6'>
										<div className='welcome-single-item'>
											<h4>80+</h4>
											<span>Award Winning</span>
										</div>
									</div>
								</div> */}

								<div className='welcome-btn-wrap d-flex align-items-center justify-content-center justify-content-lg-start'>
									<Link
										href='/investmentPool'
										className='default-btn active'>
										Browse More
									</Link>
									{/* <Link
										href='/subscription'
										className='default-btn active bg-transparent text-dark text-decoration-underline'>
										Start Your Search
									</Link> */}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Shape shadow */}
				{/* <Image src={shape4} className='shape shape-4' alt='shape' /> */}
			</div>
		</>
  );
};

export default Welcome;
