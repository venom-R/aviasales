import React from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import airlineLogo from './turkish-airlines.png';
import './Ticket.scss';

const Ticket = (props) => {
	return (
		<Card className="ticket">
			<Row className="ticket__inner">

				<Col md={4} className="ticket__body_left ticket__body">
					<img src={airlineLogo} alt="Airline logo" className="img-fluid"/>
					<button className="btn btn-buy ticket__btn-buy">
						Купить <br/> за 21 032 ₽
					</button>
				</Col>

				<Col md={8} className="ticket__body_right ticket__body">
					<div className="ticket__stops">1 пересадка</div>
					<Row className="justify-content-between">

						<Col className="ticket__details">
							<div className="ticket__details_departure">
								<div className="ticket__time">09:25</div>
								<div className="ticket__city">VVO, Владивосток</div>
								<div className="ticket__date">9 окт 2018, Пт</div>
							</div>
						</Col>

						<Col className="ticket__details">
							<div className="ticket__details ticket__details_arrival">
								<div className="ticket__time">11:45</div>
								<div className="ticket__city">Тель-Авив, TLV</div>
								<div className="ticket__date">10 окт 2018, Пт</div>
							</div>
						</Col>

					</Row>
				</Col>

			</Row>
		</Card>
	);
};

Ticket.propTypes = {};

export default Ticket;
