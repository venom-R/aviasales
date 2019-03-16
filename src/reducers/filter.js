import { SET_TICKETS_FILTER } from '../types';

const initialState = [ 0, 1, 2, 3 ];

export const filter = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case SET_TICKETS_FILTER:
			return payload;
		default:
			return state;
	}
};
