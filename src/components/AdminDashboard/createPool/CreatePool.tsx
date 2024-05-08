" use client";
import React from "react";
import { FiDatabase } from "react-icons/fi"; // Icon for blockchain
import { Doughnut } from "react-chartjs-2"; // Using Doughnut graph for investment distribution

const CreatePool: React.FC = () => {
	// Dummy data for the graph
	// const data = {
	// 	labels: ["Residential", "Commercial", "Land"],
	// 	datasets: [
	// 		{
	// 			label: "Investment Distribution",
	// 			data: [55, 30, 15], // Example data
	// 			backgroundColor: [
	// 				"rgba(255, 99, 132, 0.2)",
	// 				"rgba(54, 162, 235, 0.2)",
	// 				"rgba(255, 206, 86, 0.2)",
	// 			],
	// 			borderColor: [
	// 				"rgba(255, 99, 132, 1)",
	// 				"rgba(54, 162, 235, 1)",
	// 				"rgba(255, 206, 86, 1)",
	// 			],
	// 			borderWidth: 1,
	// 		},
	// 	],
	// };

	return (
		<div className='p-2 md:p-6 shadow rounded-lg bg-white -mt-12 md:mt-0'>
			<h2 className='text-2xl font-semibold mb-4 flex items-center'>
				<FiDatabase className='mr-2' /> Create Pool
			</h2>
			<form className='max-w-4xl mx-auto py-8 px-4'>
				<h4 className='text-lg font-semibold mb-4'>Pool Form</h4>

				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Choose a property type
					</label>
					<select
						className='form-select block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						aria-label='Default select example'
						required>
						<option value='0'>Commercial Property</option>
						<option value='1'>Residential Property</option>
						<option value='2'>Industrial Property</option>
						<option value='3'>Retail Property</option>
						<option value='4'>Office Property</option>
						<option value='5'>Mixed-Use Property</option>
						<option value='6'>Land</option>
						<option value='7'>Vacation Property</option>
						<option value='8'>Investment Property</option>
						<option value='9'>Development Property</option>
					</select>
				</div>

				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Property Title
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Places name'
						required
					/>
				</div>

				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Location
					</label>
					<select
						className='form-select block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						aria-label='Default select example'>
						<option value='0'>UAE</option>
						<option value='1'>Canada</option>
						<option value='2'>USA</option>
					</select>
				</div>

				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Property Images
					</label>

					<input
						type='file'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						accept='image/*'
						required
					/>
					<div className='my-2'>
						<input
							type='file'
							className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
							accept='image/*'
							required
						/>
					</div>
					<input
						type='file'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						accept='image/*'
						required
					/>
				</div>

				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Key Highlights
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Key features of the property'
						required
					/>
				</div>

				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Property Documents
					</label>
					<input
						type='file'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						accept='.pdf, .doc, .docx, .txt'
						required
					/>
					<p className='mt-2 text-sm text-gray-500'>
						Please upload documents only
					</p>
				</div>

				<div className='mb-4'>
					<label className='block text-sm font-medium text-gray-700 mb-1'>
						Pool Size
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						placeholder='Amount in USDT/USDC'
						required
					/>
				</div>
				{/* Estimated MPY */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Estimated MPY (Monthly Percentage Yield)
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='USDT/USDC'
						required
					/>
				</div>

				{/* Estimated Return */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Estimated Return
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='USDT/USDC'
						required
					/>
				</div>

				{/* Estimated Maturity */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Estimated Maturity
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='Months'
						required
					/>
				</div>

				{/* Soft Cap/Hard Cap */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Soft Cap/Hard Cap
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='USDT/USDC'
						required
					/>
				</div>

				{/* Min. Invest */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Min. Invest
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='USDT/USDC'
						required
					/>
				</div>

				{/* Max. Invest */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Max. Invest
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='USDT/USDC'
						required
					/>
				</div>

				{/* Pool Open for */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Pool Open for
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='Days'
						required
					/>
				</div>

				{/* Actual MPY */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Actual MPY
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='%'
						required
					/>
				</div>

				{/* Actual Return */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Actual Return
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='%'
						required
					/>
				</div>

				{/* Actual Maturity */}
				<div className='form-group mb-4'>
					<label className='block text-sm font-medium text-gray-700'>
						Actual Maturity
					</label>
					<input
						type='text'
						className='form-control block w-full mt-1 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500'
						placeholder='Months'
						required
					/>
				</div>

				<div className='mt-6'>
					<button
						type='submit'
						className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
						Submit
					</button>
				</div>
			</form>
			{/* <div>
				<h3 className='text-lg font-semibold mb-4'>
					Investment Distribution
				</h3>
				<Doughnut data={data} />
			</div> */}
		</div>
	);
};

export default CreatePool;
