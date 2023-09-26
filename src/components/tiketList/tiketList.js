import { connect } from 'react-redux';

import Tiket from '../tiket/tiket';
import Button from '../UI/button/button';
import { getTiket } from '../../redux/action';

import cls from './tiketList.module.scss';

function TiketList({ getFiveTiket }) {
	return (
		<div className={cls.body}>
			<Tiket />
			<Button active="true" onClick={() => getFiveTiket()}>
				показать ещё 5 билетов
			</Button>
		</div>
	);
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
	getFiveTiket: () => dispatch(getTiket()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TiketList);
