/* eslint-disable jsx-a11y/label-has-associated-control */
import { connect } from 'react-redux';

import { getSideFilter } from '../../redux/action';

import cls from './sideFilter.module.scss';

function SideFilter({ sideFilterReducer, filter }) {
	const checkbox = sideFilterReducer.filter.map((el) => (
		<form className={cls.body__checkbox} key={el.name}>
			<label className={cls['body__checkbox-custom']}>
				<input type="checkbox" name={el.name} onChange={() => filter(el.name)} checked={el.checked} />
				<span>{el.label}</span>
			</label>
		</form>
	));

	return (
		<div className={cls.body}>
			<h2 className={cls.body__title}>Количество пересадок</h2>
			<div>{checkbox}</div>
		</div>
	);
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	filter: (name) => dispatch(getSideFilter(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideFilter);
