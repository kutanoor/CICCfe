interface TeamMember {
	name: string;
	title: string;
	department?: string; // The department is optional since not all members might have one
}
const TeamComponent: React.FC = () => {
	const teamMembers: TeamMember[] = [
		{
			name: "Besim Jashari",
			title: "Founder and President",
			department: "MHQ",
		},
		{
			name: "Mr. Irfan Sheikh",
			title: "CEO Economic Development & Managing Director",
			department: "Blockchain Department",
		},
		{
			name: "Mr Agresh Ranjan Singh",
			title: "Head of Relationship Management & Marketing",
			department: "Blockchain Department",
		},
		{
			name: "Mr Tushar Sengar",
			title: "Chief Technical Officer",
			department: "Blockchain Department",
		},
		{
			name: "Eng. Tutuk Astiyawati",
			title: "CEO Administration & HR",
			department: "MHQ",
		},
		{
			name: "Sheikh Khalifa",
			title: "Honorary Chairman",
			department: "Kingdom of Bahrain",
		},
		{
			name: "Jacqueline Gillieron",
			title: "Senior Advisor to President",
			department: "Switzerland",
		},
		{ name: "Prof.Dr.Bharat Purohit", title: "Vice President Investment", department: "MHQ",},
		{ name: "Syed Touseef Zaidi", title: "Vice President Investment" },
		{
			name: "Jorge Artuto Cordoba Solano",
			title: "CEO - HQ",
			department: "Costa Rica",
		},
		{
			name: "Panya Kukeereekhet",
			title: "CEO - HQ",
			department: "Thailand",
		},
		{
			name: "Dr. Alqahtani Mohsen",
			title: "CEO HQ",
			department: "Morocco / Saudi Arabia & GCC",
		},
		{ name: "Muhammad Arshad", title: "Managing Director - Marketing" },
		{ name: "Bhini Ashok Sobti", title: "Managing Director Banking" },
		{
			name: "Penka Ivamova Madzharska",
			title: "CEO Oil & Gold - International Trade",
			department: "MHQ",
		},
		{
			name: "Silvia Varga",
			title: "Acting CEO - CICC Comm. Branch",
			department: "Austria",
		},
		{
			name: "Silvester Feeman Anowie",
			title: "Commissioner - HQ Ghana & West Africa",
			department: "MHQ",
		},
		{
			name: "Sandip Maity",
			title: "Managing Director - Hospitality/Hotels",
			department: "MHQ",
		},
		{
			name: "Anwar Ahmad Sabri",
			title: "IT Specialist - Media & Marketing Department",
		},
		{ name: "Samuel Rantao", title: "Advisory Board Member" },
		{
			name: "Dzofoxeh Bright",
			title: "Acting CEO - HQ",
			department: "Ghana",
		},
		{
			name: "Prince Charles Abban",
			title: "Executive Director Economic Development - HQ",
			department: "Ghana",
		},
		{
			name: "Joseph Mwinikubu Vulgate",
			title: "CEO - CICC Gold Mining",
			department: "MHQ",
		},
		{ name: "Shanavas Abdul Azeez", title: "Legal Advisor" },
		{ name: "Kashif Imran", title: "Advisory Board Member - MHQ" },
		{ name: "Khalid Mahmood", title: "Advisory Board Member - Indonesia" },
		{ name: "Gary Moore", title: "CEO - CICC Aviation" },
		{ name: "Mohana Sundaram (BOB)", title: "" }, // Title for Mohana Sundaram is not provided, so I put 'Unknown Title'. Please update accordingly.
	];
	// import React from "react";

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 py-20 border-x rounded-3xl'>
			<h2 className='text-4xl font-semibold py-6 text-center md:mb-8'>Meet The Team</h2>
			<div className='flex flex-wrap -m-4'>
				{teamMembers.map((member, index) => (
					<div key={index} className='p-4 lg:w-1/4 md:w-1/2 w-full h-48 items-center '>
						<div className='h-full flex flex-col items-center  shadow-xl text-center border rounded-xl p-2 transform transition duration-500 hover:scale-110 '>
							<div className='w-full my-auto '>
								<h2 className='title-font font-medium text-lg text-gray-900 mb-2'>
									{member.name}
								</h2>
								<h3 className='text-gray-500 mb-3'>
									{member.title}
								</h3>
								<p className='mb-4 italic font-bold text-sm'>{member.department}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};


export default TeamComponent;
