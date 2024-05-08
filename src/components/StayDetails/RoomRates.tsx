"use client";

const RoomRates = () => {
  return (
		<>
			<div className='stay-room-rates box-style'>
				<div className='box-title'>
					<h4>More Details </h4>
					<p>Prices may increase on weekends or holidays</p>
				</div>

				<ul className='p-0 mb-0 list-unstyled'>
					<li className='d-flex align-items-center justify-content-between'>
						<span>Pool Size</span>
						<span>$10</span>
					</li>
					<li className='d-flex align-items-center justify-content-between'>
						<span>Estimated MPY (Monthly Percentage Yield)</span>
						<span>$10%</span>
					</li>
					<li className='d-flex align-items-center justify-content-between'>
						<span>
							Estimated Return (Admin Will set by multiplying MPY
							with Maturity)
						</span>
						<span>$21%</span>
					</li>
					<li className='d-flex align-items-center justify-content-between'>
						<span>Estimated Maturity</span>
						<span>2 Months</span>
					</li>
					<li className='d-flex align-items-center justify-content-between'>
						<span>Soft Cap/Hard Cap(USDT/USDC)</span>
						<span>$100 </span>
					</li>
					<li className='d-flex align-items-center justify-content-between'>
						<span>Min. Invest/Max Invest(USDT/USDC)</span>
						<span>$50</span>
					</li>
					<li className='d-flex align-items-center justify-content-between'>
						<span>Pool Open for </span>
						<span>50 days</span>
					</li>
					<li className='d-flex align-items-center justify-content-between'>
						<span>Actual MPY</span>
						<span>20 %</span>
					</li>
					<li className='d-flex align-items-center justify-content-between'>
						<span>Actual Return</span>
						<span>15%</span>
					</li>
					{/* <li className='d-flex align-items-center justify-content-between'>
						<span>Actual Maturity</span>
						<span>20 days</span>
					</li> */}
				</ul>
			</div>
		</>
  );
};

export default RoomRates;
