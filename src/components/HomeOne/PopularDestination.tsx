"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import Link from "next/link";
import Image from "next/image";

// import destinationImg1 from "/public/images/popular/canada.jpg";
import destinationImg2 from "/public/images/popular/singapore.jpg";
import destinationImg4 from "/public/images/popular/malta.jpg";
import destinationImg5 from "/public/images/popular/denmark.jpg";
import destinationImg6 from "/public/images/popular/netherland.jpg";
import Portugal from "/public/images/popular/portugal-flag.jpeg";
import indonesia from "/public/images/popular/Indonesia.jpeg";
import austria from "/public/images/popular/austria.jpeg";
import malaysia from "/public/images/popular/malaysia.jpg";
import dubai from "/public/images/popular/dubai.jpg";
import canada from "/public/images/popular/canada.jpg";
import india from "/public/images/popular/india.jpg";
import greece from "/public/images/popular/greece.jpeg";
import martialisland from "/public/images/popular/martialisland.jpeg";
import panama from "/public/images/popular/panama.png";
import brunuei from "/public/images/popular/brunuei.avif";
import estonia from "/public/images/popular/estonia.jpeg";
import qatar from "/public/images/popular/qatar-flag.jpeg";
import saudi from "/public/images/popular/saudi.jpg";
import turkey from "/public/images/popular/turkey.jpg";
import uk from "/public/images/popular/uk-flag.jpeg";
import usa from "/public/images/popular/usa.jpg";
import Switzerland from "/public/images/popular/switzerland-flag.jpeg";
import southAfrica from "/public/images/popular/southAfrica.jpeg";
import oman from "/public/images/popular/oman.webp";
import kuwait from "/public/images/popular/kuwait.jpeg";
import chaina from "/public/images/popular/china.webp";
import costarica from "/public/images/popular/costarica.jpeg";
import egypt from "/public/images/popular/egypt.jpeg";
import ghana from "/public/images/popular/ghana.jpeg";
import liberia from "/public/images/popular/liberia.webp";
// import mautitania from "/public/images/popular/mauritania.avif";
import morocco from "/public/images/popular/morocco.webp";
import thailand from "/public/images/popular/thailand.webp";
import zambia from "/public/images/popular/zambia.jpeg";
import senegal from "/public/images/popular/senegal-flag.jpeg";
import p2 from "/public/images/popular/2.png";
import p3 from "/public/images/popular/3.png";
import p4 from "/public/images/popular/4.png";
import p5 from "/public/images/popular/5.png";
import p6 from "/public/images/popular/6.png";
import p7 from "/public/images/popular/7.png";
import p8 from "/public/images/popular/8.png";
import p9 from "/public/images/popular/9.png";
import p10 from "/public/images/popular/10.png";
import p11 from "/public/images/popular/11.png";
import p12 from "/public/images/popular/12.png";
import p13 from "/public/images/popular/13.png";
import p14 from "/public/images/popular/14.png";
import p15 from "/public/images/popular/15.png";
import p16 from "/public/images/popular/16.png";
import p17 from "/public/images/popular/17.png";
import p18 from "/public/images/popular/18.png";
import p19 from "/public/images/popular/19.png";
import p20 from "/public/images/popular/20.png";
import p21 from "/public/images/popular/21.png";
import p22 from "/public/images/popular/22.png";
import p23 from "/public/images/popular/23.png";
import p24 from "/public/images/popular/24.png";
import p25 from "/public/images/popular/25.png";
import p26 from "/public/images/popular/26.png";
import p27 from "/public/images/popular/27.png";
import p28 from "/public/images/popular/28.png";
import p29 from "/public/images/popular/29.png";
import p30 from "/public/images/popular/30.png";
import p31 from "/public/images/popular/31.png";
import p32 from "/public/images/popular/32.png";
import p33 from "/public/images/popular/33.png";
import p34 from "/public/images/popular/34.png";


























// import destinationImg7 from "/public/images/popular/netherland.jpg";


const PopularDestination = () => {
  return (
		<>
			<div className='popular-area pb-150'>
				<div className='container'>
					<div className='mb-30'>
						<div className='section-title left-title mb-0'>
							<span className='top-title'>
								Countries across the Globe
							</span>
							<h2>Where We have identified projects around.</h2>
						</div>
					</div>

					<Swiper
						spaceBetween={30}
						navigation={true}
						autoplay={{
							delay: 5000,
							pauseOnMouseEnter: true,
							disableOnInteraction: true,
						}}
						breakpoints={{
							0: {
								slidesPerView: 2,
							},
							576: {
								slidesPerView: 3,
							},
							768: {
								slidesPerView: 4,
							},
							1200: {
								slidesPerView: 6,
							},
						}}
						modules={[Autoplay, Navigation]}
						className='destination-slider'>
						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p3}
									alt='destination'
									className=''
								/>
								<h3 className='text-center'>Indonesia</h3>
								{/* <span>Starting from $320</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p2}
									alt='destination'
									className=''
								/>
								<h3 className='text-center'>Dubai</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p4}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Malaysia</h3>
								{/* <span>Starting from $460</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p5}
									alt='destination'
									className=''
								/>
								<h3 className='text-center'>Turkey</h3>
								{/* <span>Starting from $721</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p6}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>UK</h3>
								{/* <span>Starting from $215</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p7}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>USA</h3>
								{/* <span>Starting from $621</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p8}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Brunuei</h3>
								{/* <span>Starting from $320</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p9}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Austria</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p10}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Greece</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p11}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>South Africa</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p12}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>India</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p13}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Canada</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p14}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Malta</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p15}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Estonia</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p16}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Martial Island</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p17}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Switzerland</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p18}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Panama</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p19}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>
									British virgin Island
								</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p20}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Oman</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p21}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Saudi Arab</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p22}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Kuwait</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p23}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Qatar</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p24}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Morocco</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p25}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Egypt</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p26}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Ghana</h3>
								{/* <span>Starting from $148</span> */}
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p27}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Liberia</h3>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p28}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Senegal</h3>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p29}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Costa Rica</h3>
							</Link>
						</SwiperSlide>
						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p30}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Portugal</h3>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p31}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Zambia</h3>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p32}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>China</h3>
							</Link>
						</SwiperSlide>

						<SwiperSlide>
							<Link
								href='/investmentPool'
								className='popular-single-item text-decoration-none d-block'>
								<Image
									src={p33}
									alt='destination'
									className=' '
								/>
								<h3 className='text-center'>Thailand</h3>
							</Link>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</>
  );
};

export default PopularDestination;
