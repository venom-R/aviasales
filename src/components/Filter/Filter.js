import React from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem';
import './Filter.scss';

const Filter = ({ filters, checkedItems, onChange, onSelectAll, onSelectOne }) => {
	const allItem = { value: -1, label: 'Все', name: 'all' };
	return (
		<ul className="filter list-unstyled">
			<FilterItem {...allItem}
			            checked={filters.length === checkedItems.length}
			            onChange={onSelectAll}
			/>
			{filters.map(item => {
				return (
					<FilterItem {...item}
					            key={item.name}
					            checked={checkedItems.includes(item.value)}
					            onChange={onChange}
					>
						<button type="button"
						        className="filter__btn-only"
						        onClick={() => {onSelectOne(item.value);}}
						>
							Только
						</button>
					</FilterItem>
				);
			})}
		</ul>
	);
};

Filter.propTypes = {
	filters:      PropTypes.arrayOf(PropTypes.object).isRequired,
	checkedItems: PropTypes.array.isRequired,
	onChange:     PropTypes.func.isRequired,
	onSelectAll:  PropTypes.func.isRequired,
	onSelectOne:  PropTypes.func.isRequired,
};

export default Filter;
