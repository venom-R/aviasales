import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';

const TicketContainer = ({ data, currencyCharacter }) => {
	return <Ticket data={data} currencyCharacter={currencyCharacter}/>;
};

TicketContainer.propTypes = {
	data:              PropTypes.object.isRequired,
	currencyCharacter: PropTypes.string.isRequired,
};

const currencyCharacters = {
	RUB: '₽',
	USD: '$',
	EUR: '€',
};

const mapStateToProps = ({ currency, exchangeRates }, { data }) => {
	const price = (data.price * exchangeRates.items[ currency ]).toFixed(2);
	console.log(currencyCharacters[ currency ]);
	return {
		data:              { ...data, price },
		currencyCharacter: currencyCharacters[ currency ],
	};
};

export default connect(mapStateToProps)(TicketContainer);
