import React from 'react';
import PropTypes from 'prop-types';
import CurrencyItem from '../CurrencyItem';
import './Currency.scss';

const Currency = ({ list, changeCurrency, selected }) => {
	return (
		<div className="currency">
			<div className="currency__btn-group btn-group btn-group-toggle my-2">
				{
					list.map(currency => {
						return <CurrencyItem key={currency}
						                     checked={currency === selected}
						                     label={currency}
						                     value={currency}
						                     onChange={() => changeCurrency(currency)}
						/>;
					})
				}
			</div>
		</div>
	);
};

Currency.propTypes = {
	list:           PropTypes.array.isRequired,
	selected:       PropTypes.string.isRequired,
	changeCurrency: PropTypes.func.isRequired,
};

export default Currency;
