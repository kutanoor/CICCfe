"use client";

const FilterHeader = () => {
  return (
		<>
			<div className='d-xl-flex justify-content-between align-items-center mb-70'>
				<div className='section-title mb-0 left-title'>
					<h2>Stays In Your Fav City</h2>
					<p>130 stays · Aug 10 - 18 · 6 Guests</p>
				</div>

				<ul className='p-0 mb-0 mt-3 mt-xl-0 list-unstyled d-lg-flex align-items-center filter-drop'>
					<li className='ms-0'>
						<select className='form-select form-control'>
							<option defaultValue='0'>Location</option>
							<option defaultValue='1'>Canada</option>
							<option defaultValue='2'>United Kingdom</option>
							
						</select>
					</li>
					<li>
						<button type='submit' className='opacity-btn'>
							<span>Low to High</span>
						</button>
					</li>
					<li>
						<button type='submit' className='opacity-btn'>
							<span> High to low</span>
						</button>
					</li>
					<li>
						<select className='form-select form-control'>
							<option defaultValue='0'>Residential</option>
							<option defaultValue='1'>Commercial</option>
							<option defaultValue='2'>Rental</option>
							<option defaultValue='2'>Industrail</option>
							<option defaultValue='2'>Office</option>
							<option defaultValue='2'>Vacation</option>
							<option defaultValue='2'>Investment</option>
							<option defaultValue='2'>Rental</option>
						</select>
					</li>
				</ul>
			</div>
		</>
  );
};

export default FilterHeader;
