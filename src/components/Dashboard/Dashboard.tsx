"use client";
import React, { useEffect, useState } from "react";
import Modal from "./Modal"; // Import the Modal component

import {
	FaBuilding,
	FaDollarSign,
	FaPercentage,
	FaChartLine,
	FaHandHoldingUsd,
	FaRegCalendarCheck,
} from "react-icons/fa"; // Import icons
import { useAccount } from "wagmi";

// PortfolioMetrics interface
interface PortfolioMetrics {
	totalPropertiesInvested: number;
	estimatedMPY: number;
	estimatedReturn: number;
	actualMPY: number;
	actualReturn: number;
	remainingClaimableMPY: number;
	mpyClaimed: number;
	actualPrincipalAmount: number;
}

// DashboardProps interface
interface DashboardProps {
	portfolio: PortfolioMetrics;
}

// Define an index signature for metricIcons
interface MetricIcons {
	[key: string]: JSX.Element;
}

const metricIcons: MetricIcons = {
	totalPropertiesInvested: (
		<FaBuilding className='text-lg text-blue-500 mr-2' />
	),
	estimatedMPY: <FaPercentage className='text-lg text-green-500 mr-2' />,
	estimatedReturn: <FaDollarSign className='text-lg text-green-500 mr-2' />,
	actualMPY: <FaChartLine className='text-lg text-purple-500 mr-2' />,
	actualReturn: <FaHandHoldingUsd className='text-lg text-green-500 mr-2' />,
	remainingClaimableMPY: (
		<FaRegCalendarCheck className='text-lg text-yellow-500 mr-2' />
	),
	mpyClaimed: <FaPercentage className='text-lg text-red-500 mr-2' />,
	actualPrincipalAmount: (
		<FaDollarSign className='text-lg text-blue-500 mr-2' />
	),
};

// Dashboard component
const Dashboard: React.FC<DashboardProps> = ({ portfolio }) => {
	const [accountAddress, setAccountAddress] = useState<string | null>(null);
	const { address } = useAccount();
	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);
	const handleConfirm = () => {
		// Handle the confirmation logic here
		console.log("Confirmed!");
		handleCloseModal();
	};

	useEffect(() => {
		const address = localStorage.getItem("address");
		setAccountAddress(address);
	}, []);

	return (
		<div className='max-w-6xl mx-auto  pb-10  bg-gray-50 mt-5  rounded-xl shadow-xl h-[690px] overflow-scroll'>
			<div className='p-6 lg:p-10'>
				<div className='md:flex justify-between md:-mt-5 mb-2 text-center items-center '>
					<h1 className='italic text-xs '>
						Address : {accountAddress}{" "}
					</h1>
					<button
						className='bg-blue-500 text-white px-4 py-2 rounded-[10px] mt-3 md:mt-0'
						onClick={handleOpenModal}>
						Registor as Developer
					</button>
				</div>
				<h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
					Overall Portfolio
				</h2>
				<div className='grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{Object.entries(portfolio).map(([key, value]) => (
						<MetricCard
							key={key}
							title={key.replace(/([A-Z])/g, " $1").trim()}
							value={value}
							prefix={
								[
									"estimatedReturn",
									"actualReturn",
									"actualPrincipalAmount",
								].includes(key)
									? "$"
									: ""
							}
							suffix={
								[
									"estimatedMPY",
									"actualMPY",
									"remainingClaimableMPY",
									"mpyClaimed",
								].includes(key)
									? "%"
									: ""
							}
							icon={metricIcons[key]}
						/>
					))}
				</div>
			</div>
			<Modal
				isOpen={showModal}
				onClose={handleCloseModal}
				onConfirm={handleConfirm}
			/>
		</div>
	);
};

// MetricCard component
interface MetricCardProps {
	title: string;
	value: number;
	prefix?: string;
	suffix?: string;
	icon: JSX.Element;
}

const MetricCard: React.FC<MetricCardProps> = ({
	title,
	value,
	prefix = "",
	suffix = "",
	icon,
}) => {
	return (
		<div className='p-6 bg-gray-200  rounded-xl shadow hover:shadow-lg  duration-300 delay-150 ease-in-out transform hover:-translate-y-1 hover:scale-105 flex flex-col items-center text-center'>
			<div className='md:flex items-center'>
				<div className='flex items-center md:-mt-1 justify-center md:text-3xl mb-3 md:mb-0'>
					{icon}
				</div>
				<h4 className='md:text-lg font-semibold text-gray-700 mb-2'>
					{title}
				</h4>
			</div>
			<p className='text-2xl font-bold text-gray-800'>
				{prefix}
				{value.toLocaleString()}
				{suffix}
			</p>
		</div>
	);
};

export default Dashboard;
