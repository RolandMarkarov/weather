import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ prop, path }) => {
	return (
		<NavLink to={path} className="navigation">
			{prop}
		</NavLink>
	);
};

export default Navigation;
