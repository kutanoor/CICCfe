// import PageBannerTitle from "@/components/Common/PageBannerTitle";
import Dashboard from "@/components/Dashboard/Dashboard";
import Navbar from "@/components/Layout/Navbar";
import React from "react";
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


export default function dashboardPage() {
	const userPortfolio: PortfolioMetrics = {
		totalPropertiesInvested: 5,
		estimatedMPY: 12,
		estimatedReturn: 15000,
		actualMPY: 10,
		actualReturn: 14000,
		remainingClaimableMPY: 2,
		mpyClaimed: 8,
		actualPrincipalAmount: 100000,
	};

	return (
		<div className='App'>
			<Navbar />
            <Dashboard portfolio={userPortfolio} />
			{/* <PageBannerTitle
				title='User dashboard'
				homeText='Home'
				homeUrl='/'
				image='/images/banner/dalle1.webp'
			/> */}
		</div>
	);
};

