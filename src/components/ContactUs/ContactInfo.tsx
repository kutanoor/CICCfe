"use client";

const ContactInfo = () => {
  return (
		<>
			<ul className='contact-us-info max-w-7xl mx-auto  md:p-5 mb-0 list-unstyled md:-mt-4'>
				<li>
					<div className='d-flex align-items-center'>
						<div className='flex-shrink-0'>
							<i className='flaticon-phone-call'></i>
						</div>
						<div className='flex-grow-1 ms-4'>
							<h4>WhatsApp Number</h4>
							<a href='tel:+981234567890'>+918982107735</a>
							{/* <a href='tel:+000123456789'>+000 123 456 789</a> */}
						</div>
					</div>
				</li>

				<li>
					<div className='d-flex align-items-center'>
						<div className='flex-shrink-0'>
							<i className='flaticon-envelope'></i>
						</div>
						<div className=' ms-4'>
							<h4>Email Address</h4>
							<a href='mailto:md-blockchain@council-icc.org'>
								md-blockchain@council-icc.org
							</a>
						</div>
					</div>
				</li>

				<li>
					<div className='d-flex align-items-center'>
						<div className='flex-shrink-0'>
							<i className='flaticon-location'></i>
						</div>
						<div className='flex-grow-1 ms-4'>
							<h4>Our Location</h4>
							<p>
								Tomang Raya Street, Block MM Kav. 557, 3rd
								Floor, No. 51E, Jakarta 11440, Indonesia
							</p>
						</div>
					</div>
				</li>
			</ul>
		</>
  );
};

export default ContactInfo;
