import axios from 'axios';

export default class ExchangeService {
	_url = 'https://api.exchangeratesapi.io/latest?base=RUB';

	getRates() {
		return axios.get(this._url)
			.then(({ data }) => data.rates);
	}
}
