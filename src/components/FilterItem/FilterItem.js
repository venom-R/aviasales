import React from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ name, value, label, checked, onChange, children }) => {
	return (
		<li className="filter__item">
			<input type="checkbox"
			       id={`filter_checkbox_${name}`}
			       name={name}
			       value={value}
			       className="filter__checkbox"
			       onChange={onChange}
			       checked={checked}
			/>
			<label htmlFor={`filter_checkbox_${name}`} className="filter__label">
				{label}
			</label>
			{children}
		</li>
	);
};

FilterItem.propTypes = {};

export default FilterItem;
