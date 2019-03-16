import {
	FETCH_EXCHANGERATES_REQUEST,
	FETCH_EXCHANGERATES_SUCCESS,
	FETCH_EXCHANGERATES_FAILURE,
} from '../types';

const initialState = {
	items:     [],
	isLoading: false,
	error:     null,
};

export const exchangeRates = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case FETCH_EXCHANGERATES_REQUEST:
			return {
				...state,
				isLoading: true,
				error:     null,
			};
		case FETCH_EXCHANGERATES_SUCCESS:
			return {
				items:     payload,
				isLoading: false,
				error:     null,
			};
		case FETCH_EXCHANGERATES_FAILURE:
			return {
				...state,
				isLoading: false,
				error:     payload,
			};
		default:
			return state;
	}
};
