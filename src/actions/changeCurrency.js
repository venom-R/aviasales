import { CHANGE_CURRENCY } from '../types';

export const changeCurrency = currency => ({
	type:    CHANGE_CURRENCY,
	payload: currency,
});
