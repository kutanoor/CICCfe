"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";

const ChoosingListingCategories = () => {
	const [showConfirmationCard, setShowConfirmationCard] = useState(false);
	const toggleConfirmationCard = () =>
		setShowConfirmationCard(!showConfirmationCard);


	const [formData, setFormData] = useState({
		propertyType: "",
		propertyTitle: "",
		location: "UAE",
		propertyImages: [], // Since this could involve multiple files, an array is used
		propertyURL: "",
		keyHighlights: "",
		propertyDocuments: [], // Assuming multiple files can be uploaded
		poolSize: "",
		estimatedMPY: "",
		estimatedReturn: "",
		estimatedMaturity: "",
		softCap: "",
		// minInvest: "",
		maxInvest: "",
		poolOpenFor: "",
		actualMPY: "",
		actualReturn: "",
		actualMaturity: "",
	});


	const handleInputChange = (event: any) => {
		const { name, type, files } = event.target;

		if (type === "file" && files.length) {
			// Convert each file to base64 and update the state
			const promises = Array.from(files).map((file) =>
				readFileAsBase64(file)
			);

			Promise.all(promises)
				.then((base64Strings) => {
					// Append new base64 strings to the existing array in the state
					setFormData((prevFormData: any) => ({
						...prevFormData,
						[name]: [...prevFormData[name], ...base64Strings], // Accumulate new base64 strings
					}));
				})
				.catch((error) => {
					console.error(
						"Error in converting files to base64:",
						error
					);
				});
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				[name]: event.target.value,
			}));
		}
	};

	const readFileAsBase64 = (file: any) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result); // reader.result contains the base64 string
			reader.onerror = (error) => reject(error);
			reader.readAsDataURL(file);
		});
	};

	const handleSubmit = async () => {
		// Construct a FormData object for submission (if needed)
		const submissionData = new FormData();
		console.log("Submission data -> " + submissionData);

		Object.entries(formData).forEach(([key, value]) => {
			if (Array.isArray(value)) {
				// Check if the value is an array, which we expect for file inputs
				value.forEach((file: any, index) => {
					if (file instanceof File) {
						submissionData.append(`${key}[${index}]`, file);
					}
				});
			} else {
				submissionData.append(key, value.toString());
			}
		});

		try {
			const response = await fetch(
				"http://localhost:8000/api/pool/createPool",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "*",
					},
					body: JSON.stringify({
						propertyType: formData.propertyType,
						propertyTitle: formData.propertyTitle,
						location: formData.location,
						propertyImages: formData.propertyImages, // Since this could involve multiple files, an array is used
						propertyURL: formData.propertyURL,
						keyHighlights: formData.keyHighlights,
						propertyDocuments: formData.propertyDocuments, // Assuming multiple files can be uploaded
						poolSize: formData.poolSize,
						estimatedMPY: formData.estimatedMPY,
						estimatedReturn: formData.estimatedReturn,
						estimatedMaturity: formData.estimatedMaturity,
						softCap: formData.softCap,
						// minInvest: formData.minInvest,
						maxInvest: formData.maxInvest,
						poolOpen: formData.poolOpenFor,
						actualMPY: formData.actualMPY,
						actualReturn: formData.actualReturn,
						actualMaturity: formData.actualMaturity,
					}),
				}
			);

			if (response.ok) {
				const result = await response.json();
				console.log("Success:", result);

				setFormData({
					propertyType: "",
					propertyTitle: "",
					location: "",
					propertyImages: [], // Since this could involve multiple files, an array is used
					propertyURL: "",
					keyHighlights: "",
					propertyDocuments: [], // Assuming multiple files can be uploaded
					poolSize: "",
					estimatedMPY: "",
					estimatedReturn: "",
					estimatedMaturity: "",
					softCap: "",
					// minInvest: "",
					maxInvest: "",
					poolOpenFor: "",
					actualMPY: "",
					actualReturn: "",
					actualMaturity: "",
				});
				// Handle success scenario
			} else {
				console.error("Submission failed:", response.statusText);
				// Handle failure scenario
			}
		} catch (error) {
			console.error("Error:", error);
			// Handle error scenario
		}
	};

	const handleContinue = () => {
		toggleConfirmationCard(); // Show confirmation card
	};

	const handleConfirmation = () => {
		setShowConfirmationCard(false); // Hide confirmation card
		handleSubmit(); // Submit the form data upon confirmation
	};

	return (
		<>
			<div className='choosing-listing-categories-area ptb-175'>
				<div className='container'>
					<div className='choosing-listing-categories-content'>
						<form
							className='choosing-form'
							onSubmit={() => handleSubmit()}>
							<h4>Pool Form</h4>

							<div className='form-group'>
								<label>Choose a property type</label>
								<select
									className='form-select form-control'
									aria-label='Default select example'
									name='propertyType'
									onChange={handleInputChange}
									required>
									<option value='Commercial Property'>
										Commercial Property
									</option>
									<option value='Residential Property'>
										Residential Property
									</option>
									<option value='Industrial Property'>
										Industrial Property
									</option>
									<option value='Retail Property'>
										Retail Property
									</option>
									<option value='Office Property'>
										Office Property
									</option>
									<option value='Mixed-Use Property'>
										Mixed-Use Property
									</option>
									<option value='Land'>Land</option>
									<option value='Vacation Property'>
										Vacation Property
									</option>
									<option value='Investment Property'>
										Investment Property
									</option>
									<option value='Development Property'>
										Development Property
									</option>
								</select>
							</div>

							<div className='form-group'>
								<label>Property Title</label>
								<input
									type='text'
									className='form-control'
									placeholder='Places name'
									name='propertyTitle'
									onChange={handleInputChange}
									required
								/>
							</div>

							<div className='form-group mb-4'>
								<label>Country</label>
								<select
									className='form-select form-control'
									name='country'
									onChange={handleInputChange}
									aria-label='Default select example'>
									<option value='UAE'>UAE</option>
									<option value='Canada'>Canada</option>
									<option value='USA'>USA</option>
								</select>
							</div>

							<div className='form-group'>
								<label>Location</label>
								<input
									type='text'
									className='form-control'
									placeholder='location URL'
									name='location'
									onChange={handleInputChange}
									required
								/>
							</div>

							<div className='form-group '>
								<label>Property Images </label>
								<input
									type='file'
									className='form-control'
									accept='image/*'
									onChange={handleInputChange}
									name='propertyImages'
									required
								/>
								<div className='my-2'>
									<input
										type='file'
										className='form-control'
										accept='image/*'
										onChange={handleInputChange}
										name='propertyImages'
										required
									/>
								</div>
								<input
									type='file'
									className='form-control'
									accept='image/*'
									onChange={handleInputChange}
									name='propertyImages'
									required
								/>
							</div>

							<div className='form-group '>
								<label>Property URL </label>
								<input
									type='text'
									className='form-control'
									placeholder='Video URL'
									name='propertyURL'
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className='form-group'>
								<label>Key Highlights</label>
								<input
									type='text'
									className='form-control'
									placeholder='Places Highlights'
									name='keyHighlights'
									onChange={handleInputChange}
									required
								/>
							</div>

							<div className='form-group'>
								<label>Property Documents</label>
								<input
									type='file'
									className='form-control'
									placeholder='Places name'
									name='propertyDocuments'
									accept='.pdf, .doc, .docx, .txt'
									required
									onChange={handleInputChange}
								/>
								<span>Please upload documents only</span>
							</div>

							<div className='form-group'>
								<label>Pool size</label>
								<input
									type='text'
									className='form-control'
									placeholder='USDT/USDC'
									name='poolSize'
									required
									onChange={handleInputChange}
								/>
								{/* <span></span> */}
							</div>
							<div className='form-group'>
								<label>
									Estimated MPY(Monthly Percentage Yield)
								</label>
								<input
									type='text'
									className='form-control'
									placeholder='USDT/USDC'
									name='estimatedMPY'
									required
									onChange={handleInputChange}
								/>
							</div>
							<div className='form-group'>
								<label>Estimated Return</label>
								<input
									type='text'
									className='form-control'
									placeholder='USDT/USDC'
									name='estimatedReturn'
									required
									onChange={handleInputChange}
								/>
							</div>

							<div className='form-group'>
								<label>Estimated Maturity</label>
								<input
									type='text'
									className='form-control'
									placeholder='Months'
									name='estimatedMaturity'
									required
									onChange={handleInputChange}
								/>
							</div>

							<div className='form-group'>
								<label>Soft Cap/Hard Cap</label>
								<input
									type='text'
									className='form-control'
									placeholder='USDT/USDC'
									name='softCap'
									required
									onChange={handleInputChange}
								/>
							</div>

							{/* <div className='form-group'>
								<label>Min. Invest</label>
								<input
									type='text'
									className='form-control'
									placeholder='USDT/USDC'
									name='minInvest'
									required
									onChange={handleInputChange}
								/>
							</div> */}

							<div className='form-group'>
								<label>Max. Invest</label>
								<input
									type='text'
									className='form-control'
									placeholder='USDT/USDC'
									name='maxInvest'
									required
									onChange={handleInputChange}
								/>
							</div>
							<div className='form-group'>
								<label>Pool Open for</label>
								<input
									type='text'
									className='form-control'
									placeholder='Days'
									name='poolOpenFor'
									required
									onChange={handleInputChange}
								/>
							</div>

							<div className='form-group'>
								<label>Actual MPY</label>
								<input
									type='text'
									className='form-control'
									placeholder='%'
									name='actualMPY'
									required
									onChange={handleInputChange}
								/>
							</div>
							<div className='form-group'>
								<label>Actual Return</label>
								<input
									type='text'
									className='form-control'
									placeholder='%'
									name='actualReturn'
									required
									onChange={handleInputChange}
								/>
							</div>
							<div className='form-group'>
								<label>Actual Maturity</label>
								<input
									type='text'
									className='form-control'
									placeholder='Months'
									name='actualMaturity'
									required
									onChange={handleInputChange}
								/>
							</div>
						</form>

						<div className='choosing-btn'>
							<Link
								href='/add-listing'
								className='default-btn white-btn rounded-10'>
								Go Back
							</Link>
							<button
								className='default-btn active rounded-10'
								onClick={handleContinue}
								// onClick={toggleConfirmationCard} // Attach the toggle function to button click
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			</div>
			{showConfirmationCard && (
				<div
					className='fixed inset-0 flex items-center justify-center z-50'
					style={{ backgroundColor: "rgba(0,0,0,0.5)" }} // Optional: dark overlay background
				>
					<div className='bg-white p-6 md:p-8 lg:p-12 shadow-lg rounded-lg w-full max-w-lg mx-auto'>
						<p className='text-lg md:text-xl font-semibold text-center mb-4 items-center'>
							Are you sure you want to continue?
						</p>
						<div className='text-center'>
							<input
								type='text'
								placeholder='Ox96....b6786'
								disabled
								className='border p-1 rounded-md mb-5'
							/>
						</div>
						<div className='flex justify-center space-x-4'>
							<button
								className='bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
								onClick={() => {
									/* Handle confirmation action */
									handleConfirmation();
									setShowConfirmationCard(false);
								}}>
								Yes, continue
							</button>
							<button
								className='bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'
								onClick={() => {
									setShowConfirmationCard(false);
									handleConfirmation();
								}}>
								Not Now
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ChoosingListingCategories;
