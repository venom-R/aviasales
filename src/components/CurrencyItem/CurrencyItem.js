import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './CurrencyItem.scss';

const CurrencyItem = ({ checked, label, value, onChange }) => {
	const className = classNames(
		'btn currency__item',
		{ 'currency__item_active': checked },
	);
	return (
		<label className={className}>
			<input type="radio"
			       value={value}
			       checked={checked}
			       onChange={onChange}
			/>{label}
		</label>
	);
};

CurrencyItem.propTypes = {
	checked: PropTypes.bool.isRequired,
	label:   PropTypes.string.isRequired,
	value:   PropTypes.string.isRequired,
};

export default CurrencyItem;
