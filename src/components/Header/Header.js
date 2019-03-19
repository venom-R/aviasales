import React from 'react';
import { Container } from 'react-bootstrap';
import logo from './logo.svg';
import './Header.scss';

const Header = () => (
	<header className="header">
		<Container>
			<a href="/" className="header__link">
				<img src={logo} alt="Logo"/>
			</a>
		</Container>
	</header>
);

export default Header;
