import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import { parseDate } from '../../utils';
import stopsValues from '../../stops';
import airlineLogo from './turkish-airlines.png';
import './Ticket.scss';

const Ticket = (props) => {
	const {
		origin, origin_name, destination, destination_name, departure_time, departure_date,
		arrival_date, arrival_time, stops, price,
	} = props.data;
	const stopsLabel = stopsValues.find(item => item.value === stops).label;
	return (
		<Card className="ticket">
			<Row className="ticket__inner">

				<Col md={8} className="ticket__body_right ticket__body order-md-1">
					<div className="ticket__stops">{stopsLabel}</div>
					<Row className="justify-content-between">

						<Col className="ticket__details">
							<div className="ticket__details_departure">
								<div className="ticket__time">{departure_time}</div>
								<div className="ticket__city">{origin}, {origin_name}</div>
								<div className="ticket__date">{parseDate(departure_date)}</div>
							</div>
						</Col>

						<Col className="ticket__details">
							<div className="ticket__details ticket__details_arrival">
								<div className="ticket__time">{arrival_time}</div>
								<div className="ticket__city">{destination_name}, {destination}</div>
								<div className="ticket__date">{parseDate(arrival_date)}</div>
							</div>
						</Col>

					</Row>
				</Col>

				<Col md={4} className="ticket__body_left ticket__body order-md-0">
					<img src={airlineLogo} alt="Airline logo" className="ticket__airline-logo"/>
					<button className="btn btn-buy ticket__btn-buy">
						Купить <br/> за {price} {props.currencyCharacter}
					</button>
				</Col>

			</Row>
		</Card>
	);
};

Ticket.propTypes = {
	data:              PropTypes.object.isRequired,
	currencyCharacter: PropTypes.string.isRequired,
};

export default Ticket;
