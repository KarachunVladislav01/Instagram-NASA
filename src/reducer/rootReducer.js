import {SET_DATE} from "../actions";

const moment = require("moment");

const initialState =
	JSON.parse(localStorage.getItem("choosenDate")) ||
	moment(new Date()).format("YYYY-MM-DD");

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case SET_DATE:
			return action.payload;
		default:
			return state;
	}
}

export default rootReducer;
