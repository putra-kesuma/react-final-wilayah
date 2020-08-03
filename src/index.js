import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {store} from "./reducers/storeConfig";
import Routes from "./routes/Routes";
import "semantic-ui-css/semantic.min.css"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Routes/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
