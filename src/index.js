// Импорты React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Импорты для Redux
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { rootReducer } from './redux/rootReducer';

// Импорты собств. файлов/компонентов
import App from './components/app/app';

// ========================================
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
