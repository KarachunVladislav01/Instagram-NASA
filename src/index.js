import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./reducer/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
	<React.Fragment>
		<Provider store={store}>
			<App />
		</Provider>
	</React.Fragment>,
	document.getElementById("root")
);

serviceWorker.unregister();
