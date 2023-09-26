/* eslint-disable default-param-last */
/* eslint-disable indent */
/* eslint-disable import/prefer-default-export */
import { TIKETS_LOAD, GET_TIKET } from './types';

const initionalState = {
	numShowTicket: 5,
};

export const tiketsLoadReducer = (state = initionalState, action) => {
	switch (action.type) {
		case TIKETS_LOAD:
			// eslint-disable-next-line no-case-declarations
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
