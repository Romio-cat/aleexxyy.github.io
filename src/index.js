import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import Root from './components/app/';
import store from './store';
import "./style.css";
import "./reset.css"



ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.querySelector("#root")
)