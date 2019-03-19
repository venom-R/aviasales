import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Currency from '../../containers/CurrencyContainer';
import Filter from '../../containers/FilterContainer';
import currencyList from '../../currencies';
import './Sidebar.scss';

const currencies = Object.keys(currencyList);

const Sidebar = () => (
	<Col className="sidebar">
		<Card className="sidebar__card">
			<Card.Body>
				<Card.Subtitle className="sidebar__subtitle mb-2">Валюта</Card.Subtitle>
				<Currency list={currencies}/>
				<Card.Subtitle className="sidebar__subtitle mt-4 mb-3">Количество пересадок</Card.Subtitle>
				<Filter/>
			</Card.Body>
		</Card>
	</Col>
);

export default Sidebar;
