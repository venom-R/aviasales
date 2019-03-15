import React from 'react';
import PropTypes from 'prop-types';
import id from 'uuid/v4';
import { Col } from 'react-bootstrap';
import Ticket from '../Ticket';
import './TicketList.scss';

const TicketList = ({ tickets }) => {
	return (
		<Col className="ticket-list">
			{tickets.map(ticket => <Ticket key={id()} data={ticket}/>)}
		</Col>
	);
};

TicketList.propTypes = {
	tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TicketList;
