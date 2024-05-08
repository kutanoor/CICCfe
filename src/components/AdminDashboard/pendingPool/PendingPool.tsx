import React from "react";
import { FiClock, FiAlertCircle, FiBarChart } from "react-icons/fi";

const PendingPool = () => {
	return (
		<div className='space-y-4'>
			<h2 className='text-2xl font-semibold mb-4'>
				Pending Pool Overview
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* Number of Pending Pools */}
				<div className='bg-white shadow rounded-lg p-5 flex items-center'>
					<FiClock className='text-3xl text-blue-500 mr-3' />
					<div>
						<p className='text-sm text-gray-500'>Pending Pools</p>
						<p className='text-xl font-semibold'>15</p>{" "}
						{/* Dynamic data here */}
					</div>
				</div>

				{/* Total Investment in Pending Pools */}
				<div className='bg-white shadow rounded-lg p-5 flex items-center'>
					<FiBarChart className='text-3xl text-blue-500 mr-3' />
					<div>
						<p className='text-sm text-gray-500'>
							Total Investment
						</p>
						<p className='text-xl font-semibold'>5000 CICC</p>{" "}
						{/* Dynamic data here */}
					</div>
				</div>

				{/* Additional Metric as needed */}
				<div className='bg-white shadow rounded-lg p-5 flex items-center'>
					<FiAlertCircle className='text-3xl text-blue-500 mr-3' />
					<div>
						<p className='text-sm text-gray-500'>Urgency Level</p>
						<p className='text-xl font-semibold'>Moderate</p>{" "}
						{/* Dynamic data here or adjust as needed */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PendingPool;
