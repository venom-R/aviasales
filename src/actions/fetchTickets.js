import { FETCH_TICKETS_REQUEST, FETCH_TICKETS_SUCCESS, FETCH_TICKETS_FAILURE } from '../types';
import { AviasalesService } from '../services';

const fetchTicketsRequest = () => ({
	type: FETCH_TICKETS_REQUEST,
});

const fetchTicketsSuccess = tickets => ({
	type:    FETCH_TICKETS_SUCCESS,
	payload: tickets,
});

const fetchTicketsFailure = error => ({
	type:    FETCH_TICKETS_FAILURE,
	payload: error,
});

export const fetchTickets = () => dispatch => {
	const aviasalesService = new AviasalesService();
	dispatch(fetchTicketsRequest());
	return aviasalesService.getTickets()
		.then(tickets => dispatch(fetchTicketsSuccess(tickets)))
		.catch(error => dispatch(fetchTicketsFailure(error)));
};
