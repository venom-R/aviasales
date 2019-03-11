import axios from 'axios';

export default class AviasalesService {
	_url = './tickets.json';

	getTickets() {
		return axios.get(this._url)
			.then(({ data }) => data.tickets);
	}
}
