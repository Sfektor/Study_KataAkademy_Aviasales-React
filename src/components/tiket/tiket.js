/* eslint-disable indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-useless-fragment */
import { connect } from 'react-redux';

import { tiketsLoad } from '../../redux/action';
import { flightEndDate, flightStartDate } from '../utils/formatDataForTiket';
import { theCheapest, theFastest, optimal, sideFilter } from '../utils/sort';

import cls from './tiket.module.scss';

function Tiket({ sideFilterReducer, tiketsLoadReducer, ticketFilterReducer }) {
	const filter = ticketFilterReducer.stateFilter;
	let newTikets = sideFilter(tiketsLoadReducer, sideFilterReducer);

	if (filter === 'theCheapest') newTikets = theCheapest(newTikets);
	if (filter === 'theFastest') newTikets = theFastest(newTikets);
	if (filter === 'optimal') newTikets = optimal(newTikets);

	const printTikets = newTikets?.map((el) => {
		const forward = el.segments[0];
		const back = el.segments[1];
		const startDateForward = flightStartDate(forward.date);
		const endDateForward = flightEndDate(forward.date, forward.duration);
		const startDateBack = flightStartDate(back.date);
		const endDateBack = flightEndDate(back.date, back.duration);
		const numberWithSpaces = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
		const getTimeFromMins = (mins) => {
			const hours = Math.trunc(mins / 60);
			const minutes = mins % 60;
			return `${hours}ч ${minutes}м`;
		};
		return (
			<div className={cls.body} key={Date.now() * Math.random()}>
				<div className={cls['row-header']}>
					<div className={cls['row-header__column']}>{`${numberWithSpaces(el.price)} P`}</div>
					<div className={cls['row-header__column']}>
						<img src={`https://pics.avs.io/99/36/${el.carrier}.png`} alt="Logo" />
					</div>
				</div>
				<div className={cls['row-main']}>
					<div className={cls['row-main__column']}>
						<div className={cls['row-main__block-text']}>
							<span>{`${forward.origin} - ${forward.destination}`}</span>
							<span>{`${startDateForward} - ${endDateForward}`}</span>
						</div>
						<div className={cls['row-main__block-text']}>
							<span>{`${back.origin} - ${back.destination}`}</span>
							<span>{`${startDateBack} - ${endDateBack}`}</span>
						</div>
					</div>
					<div className={cls['row-main__column']}>
						<div className={cls['row-main__block-text']}>
							<span>В пути</span>
							<span>{`${getTimeFromMins(forward.duration)}`}</span>
						</div>
						<div className={cls['row-main__block-text']}>
							<span>В пути</span>
							<span>{`${getTimeFromMins(back.duration)}`}</span>
						</div>
					</div>
					<div className={cls['row-main__column']}>
						<div className={cls['row-main__block-text']}>
							<span>{`${
								forward.stops.length === 1
									? `${forward.stops.length} Пересадка`
									: forward.stops.length > 1
									? `${forward.stops.length} Пересадки`
									: 'Прямой рейс'
							}`}</span>
							<span>{`${forward.stops.join(', ')}`}</span>
						</div>
						<div className={cls['row-main__block-text']}>
							<span>{`${
								back.stops.length === 1
									? `${back.stops.length} Пересадка`
									: back.stops.length > 1
									? `${back.stops.length} Пересадки`
									: 'Прямой рейс'
							}`}</span>
							<span>{`${back.stops.join(', ')}`}</span>
						</div>
					</div>
				</div>
			</div>
		);
	});

	return <>{printTikets?.slice(0, tiketsLoadReducer.numShowTicket)}</>;
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	load: dispatch(tiketsLoad()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tiket);
