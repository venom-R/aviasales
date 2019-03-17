import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import TicketList from '../components/TicketList';
import Spinner from '../components/Spinner';
import ErrorIndicator from '../components/ErrorIndicator';
import { fetchExchangeRates, fetchTickets } from '../actions';

class TicketListContainer extends Component {
	componentDidMount() {
		this.props.fetchTickets();
		this.props.fetchExchangeRates();
	}

	static propTypes = {
		tickets:            PropTypes.object.isRequired,
		exchangeRates:      PropTypes.object.isRequired,
		fetchTickets:       PropTypes.func.isRequired,
		fetchExchangeRates: PropTypes.func.isRequired,
	};

	render() {
		console.log(this.props);

		const { tickets, exchangeRates } = this.props;

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

const applyStopsFilter = (tickets, filter) => tickets.filter(item => filter.includes(item.stops));

const mapStateToProps = ({ tickets, exchangeRates, filter }) => ({
	tickets: { ...tickets, items: applyStopsFilter(tickets.items, filter) },
	exchangeRates,
});

const mapDispatchToProps = {
	fetchTickets,
	fetchExchangeRates,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketListContainer);
