/* eslint-disable global-require */
import { connect } from 'react-redux';
import { useState } from 'react';

import TicketFilter from '../ticketFilter/ticketFilter';
import SideFilter from '../sideFilter/sideFilter';
import TiketList from '../tiketList/tiketList';
import LoaderSpiner from '../UI/loaderSpiner/loaderSpiner';
import Modal from '../UI/modal/modal';
import { useResize } from '../utils/useResize';
import Button from '../UI/button/button';

import cls from './app.module.scss';

function App({ loaderReducer }) {
	const [modalVisibleTiketFilter, setModalVisibleTiketFilter] = useState(false);
	const [modalVisibleSideFilter, setModalVisibleSideFilter] = useState(false);
	const size = useResize();

	return (
		<>
			<div className={cls.wrapper}>
				<div className={cls.logo}>
					<img src={require('./logo.png')} alt="Logo" />
				</div>
				<div className={cls.main}>
					{size > 768 ? <SideFilter /> : null}
					<div className={cls.content}>
						{size > 768 ? <TicketFilter /> : null}
						{size < 768 ? (
							<div className={cls.button}>
								<Button onClick={() => setModalVisibleTiketFilter(true)}>Пересадки</Button>
								<Button onClick={() => setModalVisibleSideFilter(true)}>Сортировка</Button>
							</div>
						) : null}
						{loaderReducer.loading ? (
							<div className={cls.loader}>
								<LoaderSpiner>Загружаем все билеты</LoaderSpiner>
							</div>
						) : null}
						<TiketList />
					</div>
				</div>
			</div>

			<Modal visible={modalVisibleTiketFilter} setVisible={setModalVisibleTiketFilter}>
				<TicketFilter />
			</Modal>
			<Modal visible={modalVisibleSideFilter} setVisible={setModalVisibleSideFilter}>
				<SideFilter />
			</Modal>
		</>
	);
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
