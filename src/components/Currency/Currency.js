import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencyItem from '../CurrencyItem';
import './Currency.scss';

class Currency extends Component {
	state = {
		selected: this.props.list[ 0 ],
	};

	static propTypes = {
		list: PropTypes.arrayOf(PropTypes.string).isRequired,
	};

	handleChangeRadio = event => {
		this.setState({ selected: event.target.value });
	};

	render() {
		const { selected } = this.state;
		const { list } = this.props;

		return (
			<div className="currency">
				<div className="currency__btn-group btn-group btn-group-toggle my-2">
					{
						list.map(currency => {
							return <CurrencyItem key={currency}
							                     checked={currency === selected}
							                     label={currency.toUpperCase()}
							                     value={currency}
							                     onChange={this.handleChangeRadio}
							/>;
						})
					}
				</div>
			</div>
		);
	}
}

export default Currency;