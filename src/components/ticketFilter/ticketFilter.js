import { connect } from 'react-redux';

import { getTiketFilter } from '../../redux/action';

import cls from './ticketFilter.module.scss';

function TicketFilter({ ticketFilterReducer, onFilterChange }) {
	const buttons = [
		{ name: 'theCheapest', label: 'самый дешёвый' },
		{ name: 'theFastest', label: 'самый быстрый' },
		{ name: 'optimal', label: 'оптимальный' },
	];
	const button = buttons.map(({ name, label }) => {
		const isActive = ticketFilterReducer.stateFilter === name;
		return (
			<li key={name}>
				<button
					type="button"
					className={`${cls.body__item} ${isActive ? cls.active : ''}`}
					onClick={() => onFilterChange(name)}
				>
					{label}
				</button>
			</li>
		);
	});

	return (
		<div className={cls.body}>
			<ul className={cls.body__items}>{button}</ul>
		</div>
	);
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	onFilterChange: (name) => dispatch(getTiketFilter(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TicketFilter);
