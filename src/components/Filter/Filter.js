import React from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

const Filter = (props) => {
	return (
		<ul className="filter list-unstyled">
			<li className="filter__item">
				<input type="checkbox"
				       id="filter__checkbox_all"
				       name="filterByStops"
				       value={-1}
				       className="filter__checkbox"
				       onClick={e => console.log(e.target)}
				       defaultChecked
				/>
				<label htmlFor="filter__checkbox_all" className="filter__label">
					Все
				</label>
			</li>

			<li className="filter__item">
				<input type="checkbox"
				       id="filter__checkbox_0"
				       name="filterByStops"
				       value={0}
				       className="filter__checkbox"
				       onClick={e => console.log(e.target)}
				/>
				<label htmlFor="filter__checkbox_0" className="filter__label">
					Без пересадок
				</label>
				<button type="button" className="filter__btn-only">
					Только
				</button>
			</li>

			<li className="filter__item">
				<input type="checkbox"
				       id="filter__checkbox_1"
				       name="filterByStops"
				       value={1}
				       className="filter__checkbox"
				       onClick={e => console.log(e.target)}
				/>
				<label htmlFor="filter__checkbox_1" className="filter__label">
					1 пересадка
				</label>
				<button type="button" className="filter__btn-only">
					Только
				</button>
			</li>

			<li className="filter__item">
				<input type="checkbox"
				       id="filter__checkbox_2"
				       name="filterByStops"
				       value={2}
				       className="filter__checkbox"
				       onClick={e => console.log(e.target)}
				/>
				<label htmlFor="filter__checkbox_2" className="filter__label">
					2 пересадки
				</label>
				<button type="button" className="filter__btn-only">
					Только
				</button>
			</li>

			<li className="filter__item">
				<input type="checkbox"
				       id="filter__checkbox_3"
				       name="filterByStops"
				       value={3}
				       className="filter__checkbox"
				       onClick={e => console.log(e.target)}
				/>
				<label htmlFor="filter__checkbox_3" className="filter__label">
					3 пересадки
				</label>
				<button type="button" className="filter__btn-only">
					Только
				</button>
			</li>
		</ul>
	);
};

Filter.propTypes = {};

export default Filter;
