"use client";
import React, { useState } from "react";

const BookingSearchForm = () => {
	const initialValue = 100000; // Initial value in USD
	const maxValue = 1000000000; // Maximum value in USD

	const [sliderValue, setSliderValue] = useState(1);
	const [estimatedReturn, setEstimatedReturn] = useState(initialValue);

	const handleEstimatedReturnChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setEstimatedReturn(Number(event.target.value));
	};

	const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSliderValue(Number(event.target.value));
	};

	return (
		<div className='w-full mx-auto '>
			<form
				className='location-track'
				data-aos='fade-up'
				data-aos-delay='300'
				data-aos-duration='500'
				data-aos-once='true'>
				<div className='row align-items-center '>
					<div className='col-lg-3 col-sm-6 col-md-3 '>
						<div className='form-group d-flex align-items-center'>
							<div className='flex-shrink-0'>
								<i className='flaticon-placeholder '></i>
							</div>
							<div className='flex-grow-1 ms-2'>
								<span className='title'>Location</span>
								<select className='form-select'>
									<option defaultValue='0'>Thailand</option>
									<option defaultValue='1'>Canada</option>
									<option defaultValue='2'>California</option>
									<option defaultValue='3'>
										United States
									</option>
								</select>
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-sm-6 col-md-3'>
						<div className='form-group d-flex align-items-center'>
							<div className='flex-shrink-0'>
								<i className='flaticon-calendar'></i>
							</div>
							<div className='flex-grow-1 ms-3'>
								<span className='title block md:flex'>Return (Estd.)</span>
								<input
									type='range'
									min='1'
									max='100'
									value={sliderValue}
									onChange={handleSliderChange}
									className='booking-slider'
								/>
								<div className=''>{sliderValue}%</div>{" "}
								{/* Display the selected value */}
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-sm-6 col-md-3'>
						<div className='form-group d-flex align-items-center'>
							<div className='flex-shrink-0'>
								<i className='flaticon-plane'></i>
							</div>
							<div className='flex-grow-1 ms-3'>
								<span className='title'>Maturity</span>
								<select className='form-select'>
									<option defaultValue='0'>1 Month</option>
									<option defaultValue='1'>2 Month</option>
									<option defaultValue='2'>3 Month</option>
								</select>
							</div>
						</div>
					</div>

					<div className='col-lg-3 col-sm-6 col-md-3'>
						<div className='form-group'>
							<div className='d-flex align-items-center justify-content-between'>
								<div className='d-flex align-items-center'>
									<div className='flex-shrink-0'>
										<i className='flaticon-account'></i>
									</div>
									<div className='flex-grow-1 ms-3  '>
										<div className="">
											<span className='title block md:flex'>
												Pool Size
											</span>
											<input
												type='range'
												min={initialValue}
												max={maxValue}
												value={estimatedReturn}
												onChange={
													handleEstimatedReturnChange
												}
												className='booking-slider'
											/>
										</div>
										<div className=''>
											{estimatedReturn.toLocaleString(
												"en-US",
												{
													style: "currency",
													currency: "USD",
												}
											)}
										</div>
									</div>
								</div>

								<button type='submit' className='src-btn'>
									<i className='flaticon-loupe'></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BookingSearchForm;
