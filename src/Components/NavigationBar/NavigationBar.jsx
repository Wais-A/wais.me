import React, { useEffect, useState, useLayoutEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../Styles/NavigationBar.scss";
const Nav = () => {
	const location = useLocation();
	const path = location.pathname;
	const [className, setClass] = useState("nav");
	const [pathAfterHome] = useState(path);
	const [navA, setNavA] = useState("");
	const [barStyle, setBarStyle] = useState('')

	useLayoutEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY >= 65 ? setBarStyle('Scrolling') : setBarStyle('nav')
		})


	})

	useEffect(() => {
		const currentPath = location.pathname;

		if (currentPath !== "/" && currentPath !== " " && currentPath !== "") {
			setNavA("afterHome");
		} else {
			setNavA("");
		}
	}, [location]);

	setTimeout(() => {
		setClass("classNameAfter");
	}, 1300);
	return (
		<div className={`${className} ${navA}`} id="nav">
			<nav className={`${barStyle}`}>
				<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/Work">
					WORK
				</NavLink>

				<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/About">
					ABOUT
				</NavLink>

				<NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/Contact">
					CONTACT
				</NavLink>
			</nav>
		</div>
	);
};

export default Nav;
