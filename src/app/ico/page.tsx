"use client";
import type { NextPage } from 'next';
import Navbar from "@/components/Layout/Navbar";
import Head from 'next/head';
import { useState } from 'react';
import { buy } from '@/services/web3Services';
import { useAccount } from "wagmi";
import { CustomButton } from '@/components/CustomButton/CustomButton';


const Ico: NextPage = () => {
  const [amount, setAmount] = useState(0);
  const { address, isConnected } = useAccount();

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  return (
		<>
			<Navbar />
			<div className='bg-color-f3f4f6 py-12  md:pb-80 pb-20  '>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl sm:text-center'>
						<h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
							INITIAL COIN OFFERING
						</h2>
						<p className='mt-6 text-lg leading-8 text-gray-600'>
							You can buy CICC using USDT on Polygon network
						</p>
					</div>
					<div className='mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-blue-600 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none'>
						<div className='p-8 sm:p-10 lg:flex-auto'>
							<h3 className='text-2xl font-bold tracking-tight text-blue-700'>
								Buy CICC
							</h3>
							<p className='mt-6 text-base leading-7 text-gray-600'>
								Get lifetime membership
							</p>
							<div className='mt-10 flex items-center gap-x-4'>
								<h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
									Benefits
								</h4>
								<div className='h-px flex-auto bg-red-400' />
							</div>
							<ul
								role='list'
								className='mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6'>
								<li className='flex gap-x-3'>
									<svg
										className='h-6 w-5 flex-none text-indigo-600'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
											clipRule='evenodd'
										/>
									</svg>
									Get CICC at 1/3rd the price of DEX listing
								</li>
								<li className='flex gap-x-3'>
									<svg
										className='h-6 w-5 flex-none text-indigo-600'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
											clipRule='evenodd'
										/>
									</svg>
									Invest in Property Pools
								</li>
								<li className='flex gap-x-3'>
									<svg
										className='h-6 w-5 flex-none text-indigo-600'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
											clipRule='evenodd'
										/>
									</svg>
									Get routine rewards
								</li>
								<li className='flex gap-x-3'>
									<svg
										className='h-6 w-5 flex-none text-indigo-600'
										viewBox='0 0 20 20'
										fill='currentColor'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
											clipRule='evenodd'
										/>
									</svg>
									Earn Passive Income
								</li>
							</ul>

							<div className='mt-10 flex items-center gap-x-4'>
								<h4 className='flex-none text-sm font-semibold leading-6 text-indigo-600'>
									How to Buy
								</h4>
								<div className='h-px flex-auto bg-red-400' />
							</div>

							<ol className='mt-4 list-decimal list-inside text-sm leading-6 '>
								<li>
									Make sure you are on the website:{" "}
									<a
										href='https://cicc.app/ico'
										className='text-blue-500 underline'
										target='_blank'
										rel='noopener noreferrer'>
										https://cicc.app/ico
									</a>
								</li>
								<li className=''>
									Add CICC token address to MetaMask:{" "}
									<span className='font-mono break-words'>
										0xebAcA9A412551c3b77C263a585dd089A597711A1
									</span>
								</li>
								<li>
									Ensure you have 0.02 MATIC to pay for gas
									fee and sufficiant USDT to buy CICC Tokens
								</li>
								<li>Connect MetaMask or any other wallet.</li>
								<li>
									Make sure you have USDT (Polygon) in your
									wallet.
								</li>
								<li>
									Enter the quantity of CICC Tokens you want
									to buy.
								</li>
								<li>
									Click on the &apos;Buy&apos; button.
								</li>
								<li>Approve the max limit.</li>
								<li>Confirm the transaction.</li>
								<li>
									You will automatically receive CICC tokens
									in your wallet.
								</li>
								<li>
									Stake CICC tokens here to earn more:{" "}
									<a
										href='https://cicc.app'
										className='text-blue-500 underline'
										target='_blank'
										rel='noopener noreferrer'>
										https://cicc.app
									</a>
								</li>
							</ol>
						</div>
						<div className='-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0'>
							<div className='rounded-2xl bg-gradient-to-r from-lime-400 to-cyan-500 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16'>
								<div className='mx-auto max-w-xs px-8'>
									<p className='text-base font-bold text-black'>
										1 CICC = 0.0008 USDT
									</p>
									<p className='text-xs font-bold text-black -mt-3'>
										Minimum Buy = 12000 CICC{" "}
									</p>
									<p className='mt-6 flex items-baseline justify-center gap-x-2'>
										<span className='text-3xl font-bold tracking-tight text-gray-900'>
											{amount} CICC
										</span>
										{/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      /USDT
                    </span> */}
									</p>
									<input
										type='number'
										min={10000}
										max={10000000}
										value={amount}
										onChange={handleSliderChange}
										className='mt-4 w-full rounded pl-2'
									/>
									{address ? (
										<button
											onClick={async () => {
												await buy(address, amount);
											}}
											className='mt-6 block w-full  bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-800 rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600'>
											Buy
										</button>
									) : (
										<div className='pt-2'>
											<CustomButton />
										</div>
									)}

									<p className='mt-6 text-xs leading-5 text-white'>
										Token purchases carry risks; ensure you
										understand and accept them before
										investing.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
  );
};

export default Ico;
