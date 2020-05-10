import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import { Provider } from 'react-redux';
import { configureStore } from './todos/store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';


const store = configureStore();
const persist = persistStore(store);


ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={<div>loading...</div>}
            persistor={persist}>
            <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));