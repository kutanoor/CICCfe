import React from 'react';

const PrivacyPolicyContent = () => {
	return (
		<div className='max-w-7xl mx-auto  p-5'>
			<h1 className='text-3xl font-bold text-center mb-8'>
				Privacy Policy
			</h1>

			{/* Introduction Section */}
			<div className='mb-8'>
				<h4 className='text-xl font-semibold mb-4'>Introduction</h4>
				<p className='mb-4'>
					This Privacy Policy outlines how the CICC ({'"'}we{'"'}, {'"'}us{'"'},
					{'"'}our{'"'}) collects, uses, maintains, and discloses information
					collected from users of our services. It applies to our site
					and all products and services offered by us.
				</p>
			</div>

			{/* Information Collection Section */}
			<div className='mb-8'>
				<h4 className='text-xl font-semibold mb-4'>
					Information Collection
				</h4>
				<p className='mb-4'>
					We may collect personal identification information in
					various ways, including site visits, registrations, and
					other activities. We also collect non-personal
					identification information, such as browser type and
					technical information.
				</p>
			</div>

			{/* How We Use Collected Information Section */}
			<div className='mb-8'>
				<h4 className='text-xl font-semibold mb-4'>
					How We Use Collected Information
				</h4>
				<p className='mb-4'>
					The CICC uses collected information to improve customer
					service, personalize user experience, and improve our site.
					We may also use the information to send periodic emails for
					updates and announcements.
				</p>
			</div>

			{/* How We Protect Your Information Section */}
			<div className='mb-8'>
				<h4 className='text-xl font-semibold mb-4'>
					How We Protect Your Information
				</h4>
				<p className='mb-4'>
					We adopt appropriate data collection, storage, and
					processing practices and security measures to protect
					against unauthorized access, alteration, disclosure, or
					destruction of personal information.
				</p>
			</div>

			{/* Sharing Your Personal Information Section */}
			<div className='mb-8'>
				<h4 className='text-xl font-semibold mb-4'>
					Sharing Your Personal Information
				</h4>
				<p className='mb-4'>
					We do not sell, trade, or rent personal identification
					information to others. We may share generic aggregated
					demographic information not linked to any personal
					identification information for the outlined purposes.
				</p>
			</div>

			{/* Third-Party Websites Section */}
			<div className='mb-8'>
				<h4 className='text-xl font-semibold mb-4'>
					Third-Party Websites
				</h4>
				<p className='mb-4'>
					Users may find advertising or other content on our site that
					links to the sites and services of our partners, suppliers,
					advertisers
				</p>
			</div>
		</div>
	);
};
export default PrivacyPolicyContent;
