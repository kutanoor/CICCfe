import React from "react";

const TermsConditionsContent = () => {
	return (
		<div className='max-w-7xl mx-auto p-5'>
			<h1 className='text-3xl font-bold text-center mb-6'>
				Terms & Conditions
			</h1>

			{/* Introduction Section */}
			<div className='mb-8'>
				<h4 className='text-xl '>Introduction</h4>
				<p className='mb-4   '>
					Welcome to the CICC. By accessing and using our platform,
					services, and network, you agree to comply with the
					following terms and conditions. These T&C govern your
					membership, participation in our activities, and use of our
					services.
				</p>
			</div>

			{/* Membership Section */}
			<div className='mb-8'>
				<h4 className='text-xl mb-2'>Membership</h4>
				<p className='mb-2'>
					1. <strong>Eligibility:</strong> Membership is open to
					businesses and professionals who align with our goals.
					Applicants must meet our criteria.
				</p>
				<p className='mb-2'>
					2. <strong>Obligations:</strong> Members must adhere to our
					code of conduct and fulfill their commitments.
				</p>
				<p className='mb-4'>
					3. <strong>Termination:</strong> Membership may be suspended
					or terminated for non-compliance with our terms or conduct
					detrimental to our objectives.
				</p>
			</div>

			{/* Services and Activities Section */}
			<div className='mb-8'>
				<h4 className='text-xl mb-2'>Services and Activities</h4>
				<p className='mb-4'>
					We organize tailored trade missions, international business
					conferences, and provide financial support through our
					partners. Participation and eligibility for financial
					support are subject to specific criteria and terms.
				</p>
			</div>

			{/* Confidentiality Section */}
			<div className='mb-8'>
				<h4 className='text-xl mb-2'>Confidentiality</h4>
				<p className='mb-4'>
					Members must maintain the confidentiality of information
					shared within the CICC network and refrain from disclosing
					it without authorization.
				</p>
			</div>

			{/* Compliance and Liability Section */}
			<div className='mb-8'>
				<h4 className='text-xl mb-2'>Compliance and Liability</h4>
				<p className='mb-4'>
					Members must comply with all applicable laws and
					regulations. The CICC will not be liable for any damages
					arising from your membership or use of our services.
				</p>
			</div>

			{/* Amendments Section */}
			<div className='mb-8'>
				<h4 className='text-xl mb-2'>Amendments</h4>
				<p className='mb-4'>
					We reserve the right to amend these T&C at any time.
					Continued use of our services after such changes constitutes
					acceptance of the new terms.
				</p>
			</div>

			{/* Governing Law Section */}
			<div className='mb-8'>
				<h4 className='text-xl mb-2'>Governing Law</h4>
				<p className='mb-4'>
					These T&C are governed by the laws of [Jurisdiction], and
					any disputes will be subject to the exclusive jurisdiction
					of its courts.
				</p>
			</div>

			{/* Contact Us Section */}
			<div className='mb-8'>
				<h4 className='text-xl mb-2'>Contact Us</h4>
				<p className='mb-4'>
					For any questions or concerns regarding these T&C, please
					contact us at [Contact Information].
				</p>
			</div>
		</div>
	);
};

export default TermsConditionsContent;
