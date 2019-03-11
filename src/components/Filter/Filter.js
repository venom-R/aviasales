import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterItem from '../FilterItem';
import filters from '../../stops';
import { CheckedFilters } from '../../utils';
import './Filter.scss';

class Filter extends Component {
	state = {
		allChecked:   false,
		checkedItems: new CheckedFilters(this.props.checkedItems),
	};
	allItem = { value: -1, label: 'Все', name: 'all' };

	onChange = event => {
		const { name, value } = event.target;
		this.setState(({ checkedItems }) => {
			const result = checkedItems.toggle({ name, value });
			return {
				checkedItems: result,
				allChecked:   this.isAllChecked(result, filters),
			};
		});
	};

	markAllHandler = () => {
		if (this.isAllChecked(this.state.checkedItems, filters)) {
			this.setState(({ checkedItems }) => ({
				checkedItems: checkedItems.clear(),
				allChecked:   false,
			}));
		} else {
			const checkedItems = new CheckedFilters(filters.map(({ name, value }) => ({ name, value })));
			this.setState({ checkedItems, allChecked: true });
		}
	};

	isAllChecked(checkedList, filters) {
		return checkedList.size() === filters.length;
	}

	componentDidMount() {
		this.setState({
			allChecked: this.isAllChecked(this.state.checkedItems, filters),
		});
	}

	static propTypes = {
		checkedItems: PropTypes.arrayOf(PropTypes.object),
	};

	static defaultProps = {
		checkedItems: [],
	};


	render() {
		const { checkedItems, allChecked } = this.state;
		const { allItem } = this;

		return (
			<ul className="filter list-unstyled">
				<FilterItem {...allItem}
				            checked={allChecked}
				            onChange={this.markAllHandler}
				/>
				{filters.map(item => {
					return (
						<FilterItem {...item}
						            key={item.name}
						            checked={checkedItems.has(item.name)}
						            onChange={this.onChange}
						>
							<button type="button"
							        className="filter__btn-only"
							        onClick={(e) => console.log('show only this: ' + e.target)}
							>
								Только
							</button>
						</FilterItem>
					);
				})}
			</ul>
		);
	};
}

export default Filter;
