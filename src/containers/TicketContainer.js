import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Ticket from '../components/Ticket';
import currencyCharacters from '../currencies';

const TicketContainer = ({ data, currencyCharacter }) => {
	return <Ticket data={data} currencyCharacter={currencyCharacter}/>;
};

TicketContainer.propTypes = {
	data:              PropTypes.object.isRequired,
	currencyCharacter: PropTypes.string.isRequired,
};

const mapStateToProps = ({ currency, exchangeRates }, { data }) => {
	const price = (data.price * exchangeRates.items[ currency ]).toFixed(2);
	return {
		data:              { ...data, price },
		currencyCharacter: currencyCharacters[ currency ],
	};
};

export default connect(mapStateToProps)(TicketContainer);
