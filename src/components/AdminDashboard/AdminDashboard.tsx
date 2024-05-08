"use client"
import React, { useState } from "react";
import { FiMenu, FiX, FiLayers, FiUsers, FiActivity } from "react-icons/fi";
import PendingPool from "./pendingPool/PendingPool";
import FailedPool from "./failedPool/FailedPool";
import InactivePool from "./inactivePool/InactivePool";
import CreatePool from "./createPool/CreatePool";
import TotalPool from "./totalPool/TotalPool";
import ActivePools from "./activePool/ActivePools";
import TotalParticipants from "./totalParticipants/TotalParticipants";

// Add more components as needed

const DashboardLayout: React.FC = () => {
	const [activeComponent, setActiveComponent] = useState<React.ReactNode>(
		<CreatePool />
	);
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [activeButton, setActiveButton] = useState<string>("createPool");

	const handleSetActiveComponent = (
		component: React.ReactNode,
		buttonId: string
	) => {
		setActiveComponent(component);
		setActiveButton(buttonId);
		if (window.innerWidth < 768) setIsSidebarOpen(false); // Automatically close sidebar on selection in mobile view
	};

	return (
		<div className='flex flex-col md:flex-row  '>
			{/* Sidebar Toggle Button for Mobile */}
			<button
				className='md:hidden text-white p-4'
				onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
				{isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
			</button>

			{/* Sidebar */}
			<aside
				className={`bg-gray-100 border-r-2 border-t shadow-md fixed  w-60 space-y-6 py-7 px-2  inset-y-0 left-0 transform ${
					isSidebarOpen ? "translate-x-0" : "-translate-x-full"
				} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
				<h1 className='text-2xl font-semibold px-2 mb-8 text-gray-900 '>
					Admin Dashboard
				</h1>
				<ul>
					<li>
						<button
							onClick={() =>
								handleSetActiveComponent(
									<CreatePool />,
									"createPool"
								)
							}
							className={`flex items-center py-2 mb-2 px-4 rounded ${
								activeButton === "createPool"
									? "bg-blue-600 text-white"
									: "hover:bg-blue-200"
							}`}>
							<FiLayers className='mr-4' size={20} /> Create Pool
						</button>
					</li>
					<li>
						<button
							onClick={() =>
								handleSetActiveComponent(
									<TotalPool />,
									"totalPools"
								)
							}
							className={`flex items-center py-2 mb-2 px-4 rounded ${
								activeButton === "totalPools"
									? "bg-blue-600 text-white"
									: "hover:bg-blue-200"
							}`}>
							<FiUsers className='mr-4' size={20} /> Total Pools
						</button>
					</li>
				

					<li>
						<button
							onClick={() =>
								handleSetActiveComponent(
									<ActivePools />,
									"activePools"
								)
							}
							className={`flex items-center py-2 mb-2 px-4 rounded ${
								activeButton === "activePools"
									? "bg-blue-600 text-white"
									: "hover:bg-blue-200"
							}`}>
							<FiUsers className='mr-4' size={20} /> Active Pools
						</button>
					</li>

					<li>
						<button
							onClick={() =>
								handleSetActiveComponent(
									<PendingPool />,
									"pendingPools"
								)
							}
							className={`flex items-center py-2 mb-2 px-4 rounded ${
								activeButton === "pendingPools"
									? "bg-blue-600 text-white"
									: "hover:bg-blue-200"
							}`}>
							<FiActivity className='mr-4' size={20} /> Pending
							Pools
						</button>
					</li>

					<li>
						<button
							onClick={() =>
								handleSetActiveComponent(
									<FailedPool />,
									"failedPools"
								)
							}
							className={`flex items-center py-2 mb-2 px-4 rounded ${
								activeButton === "failedPools"
									? "bg-blue-600 text-white"
									: "hover:bg-blue-200"
							}`}>
							<FiX className='mr-4' size={20} /> Failed Pools
						</button>
					</li>

					<li>
						<button
							onClick={() =>
								handleSetActiveComponent(
									<InactivePool />,
									"inactivePools"
								)
							}
							className={`flex items-center py-2 mb-2 px-4 rounded ${
								activeButton === "inactivePools"
									? "bg-blue-600 text-white"
									: "hover:bg-blue-200"
							}`}>
							<FiUsers className='mr-4' size={20} /> Inactive
							Pools
						</button>
					</li>

					<li>
						<button
							onClick={() =>
								handleSetActiveComponent(
									<TotalParticipants />,
									"totalParticipants"
								)
							}
							className={`flex items-center py-2 mb-2 px-4 rounded ${
								activeButton === "totalParticipants"
									? "bg-blue-600 text-white"
									: "hover:bg-blue-200"
							}`}>
							<FiMenu className='mr-4' size={20} /> Total
							Participants
						</button>
					</li>

					{/* Add other buttons with their respective components */}
				</ul>
			</aside>

			{/* Main Content */}
			<div className='flex-1 p-10 text-2xl font-bold h-[690px] overflow-scroll'>
				{activeComponent}
			</div>
		</div>
	);
};

export default DashboardLayout;
