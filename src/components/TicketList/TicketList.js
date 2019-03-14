import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Ticket from '../Ticket';
import './TicketList.scss';

const TicketList = ({ tickets }) => {
	return (
		<Col className="ticket-list">
			{tickets
				.sort((prev, next) => prev.price - next.price)
				.map(ticket => <Ticket data={ticket}/>)}
		</Col>
	);
};

TicketList.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TicketList;
