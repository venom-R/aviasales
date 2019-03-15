import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { AviasalesService, ExchangeService } from '../services';
import TicketList from '../components/TicketList';
import Spinner from '../components/Spinner';
import ErrorIndicator from '../components/ErrorIndicator';

class TicketListContainer extends Component {
	state = {
		tickets: [],
		error:   null,
		loading: true,
	};

	aviasalesService = new AviasalesService();
	exchangeService = new ExchangeService();

	componentDidMount() {
		this.aviasalesService.getTickets()
			.then(tickets => this.setState({ tickets, loading: false }))
			.catch(error => this.setState({ error }));

		this.exchangeService.getRates()
			.then(data => console.log(`USD: ${data.USD}\nEUR: ${data.EUR}`, data));
	}

	render() {
		const { tickets, loading, error } = this.state;
		if (error) return <Col className="ticket-list"><ErrorIndicator/></Col>;
		if (loading) return <Spinner/>;
		const sortedTickets = [ ...tickets ].sort((prev, next) => prev.price - next.price);
		return <TicketList tickets={sortedTickets}/>;
	}
}

export default TicketListContainer;
