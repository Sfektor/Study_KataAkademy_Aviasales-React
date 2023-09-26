import { TIKETS_LOAD, GET_TIKET } from './types';

const initionalState = {
	numShowTicket: 5,
};

export const tiketsLoadReducer = (state = initionalState, action) => {
	switch (action.type) {
	case TIKETS_LOAD:
		const data = action.data?.jsonData;

		return {
			...state,
			data,
		};

	case GET_TIKET:
		return {
			...state,
			numShowTicket: state.numShowTicket + 5,
		};

	default:
		return state;
	}
};
