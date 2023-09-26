import Service from '../components/utils/service';

import {
	GET_TIKET_FILTER,
	GET_SIDE_FILTER,
	TIKETS_LOAD,
	GET_TIKET,
	LOADER_DISPLAY_OFF,
	LOADER_DISPLAY_ON,
} from './types';

export const getTiketFilter = (name) => ({
	type: GET_TIKET_FILTER,
	name,
});

export const getSideFilter = (name, status) => ({
	type: GET_SIDE_FILTER,
	name,
	status,
});

export const loaderOn = () => ({
	type: LOADER_DISPLAY_ON,
});

export const loaderOff = () => ({
	type: LOADER_DISPLAY_OFF,
});

export const tiketsLoad = () => {
	const serv = new Service();
	return async (dispatch) => {
		dispatch(loaderOn());
		const id = await serv.getID();
		const data = await serv.getInfo(id);
		let { tickets, stop } = data;
		const jsonData = tickets;
		dispatch({
			type: TIKETS_LOAD,
			data: { jsonData },
		});
		while (stop === false) {
			const newData = await serv.getInfo(id);
			jsonData.push(...newData.tickets);
			stop = newData.stop;
		}
		dispatch({
			type: TIKETS_LOAD,
			data: { jsonData },
		});
		dispatch(loaderOff());
	};
};

export const getTiket = () => ({
	type: GET_TIKET,
});
