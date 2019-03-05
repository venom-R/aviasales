import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrencyItem from '../CurrencyItem';
import './SelectCurrency.scss';

class SelectCurrency extends Component {
	state = {
		selected: this.props.list[ 0 ],
	};

	handleChangeRadio = event => {
		this.setState({ selected: event.target.value });
	};

	render() {
		const { selected } = this.state;
		const { list } = this.props;

		return (
			<div className="select-currency">
				<div className="select-currency__btn-group btn-group btn-group-toggle my-2">
					{
						list.map(currency => {
							return <CurrencyItem checked={currency === selected}
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

SelectCurrency.propTypes = {
	list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectCurrency;