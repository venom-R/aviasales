import { SET_TICKETS_FILTER } from '../types';

export const setTicketsFilter = filterList => ({
	type:    SET_TICKETS_FILTER,
	payload: filterList,
});
