import React from "react";
import { FiUserCheck, FiUserPlus, FiUsers } from "react-icons/fi";

const TotalParticipants = () => {
	return (
		<div className='space-y-4'>
			<h2 className='text-2xl font-semibold mb-4'>
				Total Participants Overview
			</h2>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{/* Total Number of Participants */}
				<div className='bg-white shadow rounded-lg p-5 flex items-center'>
					<FiUsers className='text-3xl text-green-500 mr-3' />
					<div>
						<p className='text-sm text-gray-500'>
							Total Participants
						</p>
						<p className='text-xl font-semibold'>2,500</p>{" "}
						{/* Dynamic data here */}
					</div>
				</div>

				{/* Active Participants */}
				<div className='bg-white shadow rounded-lg p-5 flex items-center'>
					<FiUserCheck className='text-3xl text-green-500 mr-3' />
					<div>
						<p className='text-sm text-gray-500'>
							Active Participants
						</p>
						<p className='text-xl font-semibold'>2,000</p>{" "}
						{/* Dynamic data here */}
					</div>
				</div>

				{/* New Participants This Month */}
				<div className='bg-white shadow rounded-lg p-5 flex items-center'>
					<FiUserPlus className='text-3xl text-green-500 mr-3' />
					<div>
						<p className='text-sm text-gray-500'>New This Month</p>
						<p className='text-xl font-semibold'>150</p>{" "}
						{/* Dynamic data here */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TotalParticipants;
