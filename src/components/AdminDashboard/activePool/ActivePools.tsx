import React from "react";
import { FiInfo, FiEdit3, FiTrash2 } from 'react-icons/fi'; // Icons for actions
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend
);
const options = {
	responsive: true,
	plugins: {
		legend: {
			position: "top",
		},
		title: {
			display: true,
			text: "Active Real Estate Investment Pools",
		},
	},
};

const labels = ["Pool 1", "Pool 2", "Pool 3", "Pool 4", "Pool 5"];

const data = {
	labels,
	datasets: [
		{
			label: "Investment Amount",
			data: labels.map(() =>
				Math.floor(Math.random() * 1000000 + 100000)
			),
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

const ActivePools = () => {
	return (
		<div className='p-4'>
			<h2 className='text-2xl font-semibold mb-4'>Active Pools</h2>
			<div className='p-4 w-1/2 '>
				<h2 className='text-2xl font-semibold mb-4'>
					Active Real Estate Investment Pools
				</h2>

				{/* <Bar options={options} data={data} />  */}

			</div>

			<div className='overflow-x-auto shadow-lg rounded-lg'>
				<table className='w-full text-sm text-left text-gray-500'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-200'>
						<tr>
							<th className='p-4'>Pool Name</th>
							<th className='p-4'>Total Investment</th>
							<th className='p-4'>Status</th>
							<th className='p-4'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* Example row */}
						<tr className='bg-white border-b hover:bg-gray-50'>
							<td className='p-4 font-medium text-gray-900'>
								Pool A
							</td>
							<td className='p-4'>1000 CICC</td>
							<td className='p-4'>Active</td>
							<td className='p-4 flex justify-around'>
								<button className='text-blue-500 hover:text-blue-600'>
									<FiInfo size={20} />
								</button>
								<button className='text-green-500 hover:text-green-600'>
									<FiEdit3 size={20} />
								</button>
								<button className='text-red-500 hover:text-red-600'>
									<FiTrash2 size={20} />
								</button>
							</td>
						</tr>
						{/* Add more rows as needed */}
					</tbody>
				</table>
			</div>
			<div className='overflow-x-auto shadow-lg rounded-lg'>
				<table className='w-full text-sm text-left text-gray-500'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-200'>
						<tr>
							<th className='p-4'>Pool Name</th>
							<th className='p-4'>Total Investment</th>
							<th className='p-4'>Status</th>
							<th className='p-4'>Actions</th>
						</tr>
					</thead>
					<tbody>
						{/* Example row */}
						<tr className='bg-white border-b hover:bg-gray-50'>
							<td className='p-4 font-medium text-gray-900'>
								Pool A
							</td>
							<td className='p-4'>1000 CICC</td>
							<td className='p-4'>Active</td>
							<td className='p-4 flex justify-around'>
								<button className='text-blue-500 hover:text-blue-600'>
									<FiInfo size={20} />
								</button>
								<button className='text-green-500 hover:text-green-600'>
									<FiEdit3 size={20} />
								</button>
								<button className='text-red-500 hover:text-red-600'>
									<FiTrash2 size={20} />
								</button>
							</td>
						</tr>
						{/* Add more rows as needed */}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ActivePools;
