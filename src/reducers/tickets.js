import {
	FETCH_TICKETS_REQUEST,
	FETCH_TICKETS_SUCCESS,
	FETCH_TICKETS_FAILURE,
} from '../types';

const initialState = {
	items:     [],
	isLoading: false,
	error:     null,
};

export const tickets = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_TICKETS_REQUEST:
			return {
				...state,
				isLoading: true,
				error:     null,
			};
		case FETCH_TICKETS_SUCCESS:
			return {
				items:     payload,
				isLoading: false,
				error:     null,
			};
		case FETCH_TICKETS_FAILURE:
			return {
				...state,
				isLoading: false,
				error:     payload,
			};
		default:
			return state;
	}
};
