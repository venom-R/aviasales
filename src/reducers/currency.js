import { CHANGE_CURRENCY } from '../types';

const initialState = 'rub';

export const currency = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case CHANGE_CURRENCY:
			return payload;
		default:
			return state;
	}
};
