import C from '../types';

const fetchTicketsRequest = () => ({
	type: C.FETCH_TICKETS_REQUEST,
});

const fetchTicketsSuccess = tickets => ({
	type:    C.FETCH_TICKETS_SUCCESS,
	payload: tickets,
});

const fetchTicketsFailure = error => ({
	type:    C.FETCH_TICKETS_FAILURE,
	payload: error,
});

const fetchExchangeRatesRequest = () => ({
	type: C.FETCH_EXCHANGERATES_REQUEST,
});

const fetchExchangeRatesSuccess = rates => ({
	type:    C.FETCH_EXCHANGERATES_SUCCESS,
	payload: rates,
});

const fetchExchangeRatesFailure = error => ({
	type:    C.FETCH_EXCHANGERATES_FAILURE,
	payload: error,
});

const changeCurrency = currency => ({
	type:    C.CHANGE_CURRENCY,
	payload: currency,
});

export const setTicketsFilter = filterList => ({
	type:    C.SET_TICKETS_FILTER,
	payload: filterList,
});
