import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Ticket from '../Ticket';
import './TicketList.scss';

const TicketList = (props) => {
	return (
		<Col className="ticket-list">
			<Ticket/>
			<Ticket/>
			<Ticket/>
			<Ticket/>
		</Col>
	);
};

TicketList.propTypes = {};

export default TicketList;
