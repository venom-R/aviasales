import React from 'react';
import { connect } from 'react-redux';
import { setTicketsFilter } from '../actions';
import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import filters from '../stops';

const toggleFilter = (checkedItems, item) => {
	return checkedItems.includes(item)
	       ? checkedItems.filter(filterItem => filterItem !== item)
	       : [ ...checkedItems, item ];
};

const FilterContainer = ({ checkedItems, setTicketsFilter }) => {
	const onChange = event => {
		const value = parseInt(event.target.value);
		setTicketsFilter(toggleFilter(checkedItems, value));
	};

	const onSelectAll = () => {
		if (filters.length === checkedItems.length) {
			setTicketsFilter([]);
		} else {
			const checked = filters.map(item => item.value);
			setTicketsFilter(checked);
		}
	};

	const onSelectOne = value => {
		setTicketsFilter([ value ]);
	};

	return <Filter filters={filters}
	               checkedItems={checkedItems}
	               onChange={onChange}
	               onSelectAll={onSelectAll}
	               onSelectOne={onSelectOne}
	/>;
};

FilterContainer.propTypes = {
	checkedItems:     PropTypes.array.isRequired,
	setTicketsFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ filter }) => ({ checkedItems: filter });
const mapDispatchToProps = { setTicketsFilter };

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
