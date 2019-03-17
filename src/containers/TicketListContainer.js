import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import TicketList from '../components/TicketList';
import Spinner from '../components/Spinner';
import ErrorIndicator from '../components/ErrorIndicator';
import { changeCurrency, fetchExchangeRates, fetchTickets, setTicketsFilter } from '../actions';

class TicketListContainer extends Component {
	componentDidMount() {
		this.props.fetchTickets();
		this.props.fetchExchangeRates();
	}

	render() {
		console.log(this.props);

		const { tickets, exchangeRates, filter } = this.props;

		if (tickets.error || exchangeRates.error) {
			return <Col className="ticket-list"><ErrorIndicator/></Col>;
		}
		if (tickets.isLoading || exchangeRates.isLoading) {
			return <Spinner/>;
		}
		const sortByPrice = (prev, next) => prev.price - next.price;
		const sortedTickets = [ ...tickets.items ].sort(sortByPrice);
		return <TicketList tickets={sortedTickets}/>;
	}
}

const mapStateToProps = ({ tickets, exchangeRates, filter }) => ({
	tickets,
	exchangeRates,
	filter,
});

const mapDispatchToProps = {
	fetchTickets,
	fetchExchangeRates,
	setTicketsFilter,
	changeCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketListContainer);
