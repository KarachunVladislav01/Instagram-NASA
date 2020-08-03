const moment = require("moment");

export const getPreviousDay = (date) => {
	const previous = moment(date).subtract(1, "days");
	return moment(previous).format("YYYY-MM-DD");
};

export const getDateLastThirtyDays = () => {
	let day = new Date();
	const DateLastThirtyDays = [];
	for (let i = 0; i < 30; i++) {
		DateLastThirtyDays.push(moment(day).format("YYYY-MM-DD"));
		day = moment(day).subtract(1, "days");
	}
	return DateLastThirtyDays;
};
