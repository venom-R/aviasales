import React from 'react';
import { Container } from 'react-bootstrap';
import './Main.scss';

const Main = ({ children }) => (
	<main className="main">
		<Container>
			{children}
		</Container>
	</main>
);

export default Main;
