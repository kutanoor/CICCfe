"use client";

const GoogleMap = () => {
	// Replace the src value with the actual Google Maps embed URL for Tomang Raya Street
	const googleMapsSrc =
		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126428.05566125416!2d106.765990535209!3d-6.18181087858891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f682d4aff1bd%3A0x401576d14fed770!2sTomang%20Raya%20St%2C%20RT.12%2FRW.1%2C%20Tomang%2C%20Kec.%20Grogol%20petamburan%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011440%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1647383647858!5m2!1sen!2sus";

	return (
		<div className='py-12'>
			<div className='container mx-auto'>
				<iframe
					src={googleMapsSrc}
					className='w-full h-96 border-0 rounded-xl' // Tailwind classes for width, height, border, and border-radius
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'></iframe>
			</div>
		</div>
	);
};

export default GoogleMap;
