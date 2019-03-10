import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Currency from '../Currency';
import Filter from '../Filter';
import './Sidebar.scss';

const checkedFilters = [
	{ name: 'withoutStops', value: 0 },
	{ name: 'oneStop', value: 1 },
	{ name: 'twoStops', value: 2 },
	{ name: 'threeStops', value: 3 },
];

const Sidebar = () => {
	return (
		<Col className="sidebar">
			<Card className="sidebar__card">
				<Card.Body>
					<Card.Subtitle className="sidebar__subtitle mb-2">Валюта</Card.Subtitle>
					<Currency list={[ 'rub', 'usd', 'eur' ]}/>
					<Card.Subtitle className="sidebar__subtitle mt-4 mb-3">Количество пересадок</Card.Subtitle>
					<Filter checkedItems={checkedFilters}/>
				</Card.Body>
			</Card>
		</Col>
	);
};

Sidebar.propTypes = {};

export default Sidebar;
