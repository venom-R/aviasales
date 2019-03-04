import React from 'react';
import PropTypes from 'prop-types';
import './SelectCurrency.scss';

const SelectCurrency = (props) => {
	return (
		<div className="select-currency">
			<div className="select-currency__btn-group btn-group btn-group-toggle my-2">
				<label className="btn select-currency__item select-currency__item_active">
					<input type="radio"
					       name="currency"
					       value="rub"
					/>RUB
				</label>

				<label className="btn select-currency__item">
					<input type="radio"
					       name="currency"
					       value="usd"
					/>USD
				</label>

				<label className="btn select-currency__item">
					<input type="radio"
					       name="currency"
					       value="eur"
					/>EUR
				</label>
			</div>
		</div>
	);
};

SelectCurrency.propTypes = {};

export default SelectCurrency;
