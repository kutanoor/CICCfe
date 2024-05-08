"use client";

import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const OurHottestVideos = () => {
  // To open the lightbox change the value of the "toggler" prop.
  const [toggler, setToggler] = useState<boolean>(false);
    const videoLinks = [
		"https://youtu.be/tbO-tfZX3sc?si=wQAlfZQw5pO4MNjK",
		"https://youtu.be/zTStDvUtQWc?si=X3dUXH1r30-DchUu",
		"https://www.youtube.com/embed/dWfcfhfklUs",
	];
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0);


  return (
		<>
			{/* Use here youtube Embed video link */}
			<FsLightbox
				toggler={toggler}
				sources={[videoLinks[currentVideoIndex]]}
			/>

			<div className='the-video-area pt-175 pb-150'>
				<div className='container'>
					<div className='section-title left-title mb-70'>
						<span className='top-title'>THE VIDEOS</span>
						<h2>Real Estate Tokenization Trends</h2>
					</div>

					<div className='row'>
						<div className='col-lg-4 col-md-4'>
							<div
								className='video-songle-item position-relative'
								style={{
									backgroundImage: `url(/images/video/dao.jpeg)`,
									height: "260px",
								}}>
								<div
									className='video-btn position-absolute top-50 start-50 translate-middle'
									onClick={() => {
										setCurrentVideoIndex(0); // Set the index of the video to open
										setToggler(!toggler);
									}}>
									<i className='ri-play-fill'></i>
								</div>
							</div>

							<div
								className='video-songle-item position-relative'
								style={{
									backgroundImage: `url(/images/video/dao2.png)`,
									height: "260px",
								}}>
								<div
									className='video-btn position-absolute top-50 start-50 translate-middle'
									onClick={() => {
										setCurrentVideoIndex(1); // Set the index of the video to open
										setToggler(!toggler);
									}}>
									<i className='ri-play-fill'></i>
								</div>
							</div>
						</div>

						<div className='col-lg-8 col-md-8'>
							<div
								className='video-songle-item position-relative'
								style={{
									backgroundImage: `url(/images/video/video-5.webp)`,
									height: "540px",
								}}>
								<div
									className='video-btn v-btn position-absolute top-50 start-50 translate-middle'
									onClick={() => {
										setCurrentVideoIndex(2); // Set the index of the video to open
										setToggler(!toggler);
									}}>
									<i className='ri-play-fill'></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
  );
};

export default OurHottestVideos;
