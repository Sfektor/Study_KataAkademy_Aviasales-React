import { combineReducers } from 'redux';

import { ticketFilterReducer } from './tiketFilterReducer';
import { sideFilterReducer } from './sideFilterReducer';
import { tiketsLoadReducer } from './tiketsLoadReducer';
import { loaderReducer } from './loaderReducer';

export const rootReducer = combineReducers({
	ticketFilterReducer,
	sideFilterReducer,
	tiketsLoadReducer,
	loaderReducer,
});
