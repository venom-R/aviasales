import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Ticket from '../Ticket';
import './TicketList.scss';

const TEMP_TICKET_DATA = {
	'origin':           'VVO',
	'origin_name':      'Владивосток',
	'destination':      'TLV',
	'destination_name': 'Тель-Авив',
	'departure_date':   '12.05.18',
	'departure_time':   '6:10',
	'arrival_date':     '12.05.18',
	'arrival_time':     '16:15',
	'carrier':          'S7',
	'stops':            0,
	'price':            17400,
};

const TicketList = (props) => {
	return (
		<Col className="ticket-list">
			<Ticket data={TEMP_TICKET_DATA}/>
			<Ticket data={TEMP_TICKET_DATA}/>
			<Ticket data={TEMP_TICKET_DATA}/>
			<Ticket data={TEMP_TICKET_DATA}/>
		</Col>
	);
};

TicketList.propTypes = {};

export default TicketList;
