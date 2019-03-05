import React from 'react';
import { Card, Col } from 'react-bootstrap';
import SelectCurrency from '../SelectCurrency';
import Filter from '../Filter';
import './Sidebar.scss';

const Sidebar = () => {
	return (
		<Col className="sidebar">
			<Card className="sidebar__card">
				<Card.Body>
					<Card.Subtitle className="sidebar__subtitle mb-2">Валюта</Card.Subtitle>
					<SelectCurrency list={[ 'rub', 'usd', 'eur' ]}/>
					<Card.Subtitle className="sidebar__subtitle mt-4 mb-3">Количество пересадок</Card.Subtitle>
					<Filter/>
				</Card.Body>
			</Card>
		</Col>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
