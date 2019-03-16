import { combineReducers } from 'redux';
import { exchangeRates } from './exchangeRates';
import { tickets } from './tickets';
import { currency } from './currency';
import { filter } from './filter';

export default combineReducers({
	tickets,
	exchangeRates,
	currency,
	filter
});
