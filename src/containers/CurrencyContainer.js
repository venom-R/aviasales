import React from 'react';
import { connect } from 'react-redux';
import Currency from '../components/Currency';
import { changeCurrency } from '../actions';
import PropTypes from 'prop-types';

const CurrencyContainer = ({ list, currency, changeCurrency }) => {
	return <Currency list={list} selected={currency} changeCurrency={changeCurrency}/>;
};

CurrencyContainer.propTypes = {
	list:           PropTypes.array.isRequired,
	currency:       PropTypes.string.isRequired,
	changeCurrency: PropTypes.func.isRequired,
};

const mapStateToProps = ({ currency }) => ({ currency });
const mapDispatchToProps = { changeCurrency };

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyContainer);
