import React from "react";
import {
	FiLayers,
	FiDollarSign,
	FiActivity,
	FiCheckCircle,
} from "react-icons/fi";

const TotalPool = () => {
	return (
		<div className='space-y-4'>
			<h2 className='text-2xl font-semibold mb-4'>Total Pool Overview</h2>
			<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
				<div className='bg-white rounded-lg shadow p-5 flex items-center space-x-4'>
					<FiLayers className='text-blue-500' size={24} />
					<div>
						<p className='text-sm text-gray-500'>Total Pools</p>
						<p className='text-xl font-semibold'>50</p>
					</div>
				</div>
				<div className='bg-white rounded-lg shadow p-5 flex items-center space-x-4'>
					<FiDollarSign className='text-green-500' size={24} />
					<div>
						<p className='text-sm text-gray-500'>
							Total Investment
						</p>
						<p className='text-xl font-semibold'>10,000 CICC</p>
					</div>
				</div>
				<div className='bg-white rounded-lg shadow p-5 flex items-center space-x-4'>
					<FiActivity className='text-yellow-500' size={24} />
					<div>
						<p className='text-sm text-gray-500'>Active Pools</p>
						<p className='text-xl font-semibold'>35</p>
					</div>
				</div>
				<div className='bg-white rounded-lg shadow p-5 flex items-center space-x-4'>
					<FiCheckCircle className='text-purple-500' size={24} />
					<div>
						<p className='text-sm text-gray-500'>Completed Pools</p>
						<p className='text-xl font-semibold'>15</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalPool;
