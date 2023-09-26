/* eslint-disable indent */
/* eslint-disable default-param-last */
/* eslint-disable import/prefer-default-export */
import { LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON } from './types';

const initionalState = {
	loading: false,
};

export const loaderReducer = (state = initionalState, action) => {
	switch (action.type) {
		case LOADER_DISPLAY_ON:
			return {
				...state,
				loading: true,
			};
		case LOADER_DISPLAY_OFF:
			return {
				...state,
				loading: false,
			};

		default:
			return state;
	}
};
