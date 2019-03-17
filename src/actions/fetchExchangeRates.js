import { FETCH_EXCHANGERATES_REQUEST, FETCH_EXCHANGERATES_SUCCESS, FETCH_EXCHANGERATES_FAILURE } from '../types';
import { ExchangeService } from '../services';

const fetchExchangeRatesRequest = () => ({
	type: FETCH_EXCHANGERATES_REQUEST,
});

const fetchExchangeRatesSuccess = rates => ({
	type:    FETCH_EXCHANGERATES_SUCCESS,
	payload: rates,
});

const fetchExchangeRatesFailure = error => ({
	type:    FETCH_EXCHANGERATES_FAILURE,
	payload: error,
});

export const fetchExchangeRates = () => dispatch => {
	const exchangeService = new ExchangeService();
	dispatch(fetchExchangeRatesRequest());
	return exchangeService.getRates()
		.then(rates => dispatch(fetchExchangeRatesSuccess(rates)))
		.catch(error => dispatch(fetchExchangeRatesFailure(error)));
};
