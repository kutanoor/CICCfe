// import React from 'react'

import AdminDashboard from "@/components/AdminDashboard/AdminDashboard";
import CreatePool from "@/components/AdminDashboard/createPool/CreatePool";
import Navbar from "@/components/Layout/Navbar";

const AdminDashboardPage = () => {
	return (
		<div>
			<Navbar />
			<AdminDashboard />
		</div>
	);
};

export default AdminDashboardPage;
