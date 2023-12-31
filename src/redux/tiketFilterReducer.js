/* eslint-disable indent */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { GET_TIKET_FILTER } from './types';

const initionalState = {
	stateFilter: 'theCheapest',
};

export const ticketFilterReducer = (state = initionalState, action) => {
	switch (action.type) {
		case GET_TIKET_FILTER:
			return {
				...state,
				stateFilter: action.name,
			};

		default:
			return state;
	}
};
