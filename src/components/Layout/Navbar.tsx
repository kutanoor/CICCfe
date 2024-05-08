"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import blackLogo from "/public/images/logo.svg";
import whiteLogo from "/public/images/logo2.svg";
import { CustomButton } from "../CustomButton/CustomButton";
import DarkAndLightMode from "./DarkAndLightMode";

const Navbar: React.FC = () => {
	const [isActive, setActive] = useState<boolean>(false);
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	// console.log(localStorage.getItem("token"))

	const handleToggleSearchModal = () => {
		setActive(!isActive);
	};

	const [menu, setMenu] = useState<boolean>(true);

	const toggleNavbar = () => {
		setMenu(!menu);
	};

	useEffect(() => {
		let token = localStorage.getItem("email");
		if (token != null) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}

		let elementId = document.getElementById("navbar");
		document.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				elementId?.classList.add("sticky");
			} else {
				elementId?.classList.remove("sticky");
			}
		});
	}, []);

	const classOne: string = menu
		? "collapse navbar-collapse mean-menu "
		: " navbar-collapse ";

	const classTwo: string = menu
		? "navbar-toggler navbar-toggler-right collapsed"
		: "navbar-toggler navbar-toggler-right ";

	return (
		<>
			<nav
				className='navbar navbar-expand-lg bg-color-f3f4f6'
				id='navbar'>
				<div className='container-fluid mw-1640'>
					<Link className='navbar-brand' href='/'>
						<Image
							src={blackLogo}
							className='main-logo'
							style={{ width: "96", height: "auto" }}
							alt='Black logo'
						/>
						<Image
							src={whiteLogo}
							style={{ width: "96", height: "auto" }}
							className='white-logo d-none'
							alt='White logo'
						/>
					</Link>

					<button
						onClick={toggleNavbar}
						className={classTwo}
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='icon-bar top-bar'></span>
						<span className='icon-bar middle-bar'></span>
						<span className='icon-bar bottom-bar'></span>
					</button>


					<div
						className={` lg:flex lg:items-center     ${
							!menu ? " navbar-collapse mean-menu" : "hidden"
						} `}
						id='navbarSupportedContent '>
						<ul className='navbar-nav me-auto ms-1 text-xs  '>
							<li className='nav-item'>
								<Link
									className='nav-link text-xs'
									href='/investmentPool/'>
									Investment Pools
								</Link>
							</li>
							<li className='nav-item dropdown'>
								<a
									className='nav-link dropdown-toggle'
									href='#'
									id='navbarDropdown'
									role='button'
									data-bs-toggle='dropdown'
									aria-expanded='false'>
									Important Links
								</a>
								<ul
									className='dropdown-menu'
									aria-labelledby='navbarDropdown'>
									<li>
										<Link
											className='dropdown-item'
											href='/add-listing/'>
											Create Pool
										</Link>
									</li>
									<li>
										<Link
											className='dropdown-item'
											href='/ico/'>
											Buy CICC
										</Link>
									</li>
									<li>
										{isLoggedIn ? (
											<div className='dropdown-item'>
												<button
													onClick={() => {
														localStorage.removeItem(
															"email"
														);
														window.location.href =
															"/";
													}}>
													Logout
												</button>
											</div>
										) : (
											<Link
												className='dropdown-item'
												href='/authentication/'>
												Login/Register
											</Link>
										)}
									</li>
									<li>
										{isLoggedIn ? (
											<Link
												className='dropdown-item'
												href='/dashboard/'>
												Dashboard
											</Link>
										) : (
											""
										)}
									</li>
									<li>
										{isLoggedIn ? (
											<Link
												className='dropdown-item'
												href='/admin-dashboard/'>
												Admin Dashboard
											</Link>
										) : (
											""
										)}
									</li>
									<li>
										<Link
											className='dropdown-item'
											href='https://docsend.com/view/5haqmk7p46vipkbc'>
											Whitepaper
										</Link>
									</li>
								</ul>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link text-xs'
									href='/about-us'>
									About us
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link text-xs'
									href='/ecosystem'>
									Ecosystem
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									className='nav-link text-xs'
									href='/buycrypto'>
									Buy Crypto
								</Link>
							</li>
							<li className='nav-item block lg:hidden '>
								<div className=' '>
									<CustomButton />
								</div>
							</li>
						</ul>
					</div>

					<div className='others-options pr-4 md:pr-0'>
						<ul className='d-flex align-items-center '>
							<li>
								<div className='active d-none d-lg-block'>
									<CustomButton />
								</div>
							</li>
							<li>
								<DarkAndLightMode />
							</li>
						</ul>
					</div>


				</div>
			</nav>

			<div
				className={`offcanvas offcanvas-top src-form-wrapper  ${
					isActive ? "show" : ""
				}`}>
				<div className='container'>
					<div className='offcanvas-body small'>
						<form className='src-form'>
							<input
								type='text'
								className='form-control'
								placeholder='Search Here...'
							/>
							<button type='submit' className='src-btn'>
								<i className='ri-search-line'></i>
							</button>
						</form>
					</div>
				</div>

				<button
					type='button'
					className='btn-close'
					onClick={handleToggleSearchModal}>
					<i className='ri-close-line'></i>
				</button>
			</div>
		</>
	);
};

export default Navbar;
