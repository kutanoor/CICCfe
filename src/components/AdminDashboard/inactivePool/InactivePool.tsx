import React from "react";
import { FiRefreshCw, FiEye, FiTrash2 } from "react-icons/fi";

const InactivePool = () => {
	// Placeholder data - replace with real data
	const inactivePools = [
		{
			id: 1,
			name: "Pool A",
			reason: "Funding Target Achieved",
			totalInvestment: "1500 CICC",
		},
		{
			id: 2,
			name: "Pool B",
			reason: "Project Completion",
			totalInvestment: "2500 CICC",
		},
		// Add more pools as needed
	];

	return (
		<div>
			<h2 className='text-2xl font-semibold mb-4'>Inactive Pools</h2>
			<div className='overflow-x-auto'>
				<table className='w-full text-sm text-left text-gray-500'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50'>
						<tr>
							<th scope='col' className='py-3 px-6'>
								Pool Name
							</th>
							<th scope='col' className='py-3 px-6'>
								Reason for Inactivity
							</th>
							<th scope='col' className='py-3 px-6'>
								Total Investment
							</th>
							<th scope='col' className='py-3 px-6'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody>
						{inactivePools.map((pool) => (
							<tr
								className='bg-white border-b hover:bg-gray-50'
								key={pool.id}>
								<td className='py-4 px-6'>{pool.name}</td>
								<td className='py-4 px-6'>{pool.reason}</td>
								<td className='py-4 px-6'>
									{pool.totalInvestment}
								</td>
								<td className='py-4 px-6 flex items-center space-x-4'>
									<button className='text-blue-500 hover:text-blue-600'>
										<FiEye />
									</button>
									<button className='text-green-500 hover:text-green-600'>
										<FiRefreshCw />
									</button>
									<button className='text-red-500 hover:text-red-600'>
										<FiTrash2 />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default InactivePool;
