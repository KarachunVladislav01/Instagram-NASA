import "date-fns";
import DateFnsUtils from "@date-io/date-fns";

import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppBar, Toolbar, Typography, Box} from "@material-ui/core";

import {
	MuiPickersUtilsProvider,
	KeyboardDatePicker,
} from "@material-ui/pickers";
import InstagramIcon from "@material-ui/icons/Instagram";

import {setDate} from "../../actions";
import {useStyles} from "./HeaderStyles";

const moment = require("moment");

function Header() {
	const dispatch = useDispatch();
	const classes = useStyles();

	const choosenDate = useSelector((state) => state);

	useEffect(() => {
		if (choosenDate !== moment(new Date()).format("YYYY-MM-DD"))
			localStorage.setItem("choosenDate", JSON.stringify(choosenDate));
	}, [choosenDate]);

	const handleChoosenDate = (choosenDate) => {
		const date = moment(choosenDate).format("YYYY-MM-DD");
		dispatch(setDate(date));
		window.scrollTo({top: 0, left: 0, behavior: "smooth"});
	};

	return (
		<AppBar className={classes.root}>
			<Toolbar>
				<MuiPickersUtilsProvider utils={DateFnsUtils}>
					<Box className={classes.pageTitle}>
						<InstagramIcon />
						<Typography variant="h6" noWrap>
							NASA
						</Typography>
					</Box>
					<KeyboardDatePicker
						disableToolbar
						variant="inline"
						format="MM/dd/yyyy"
						margin="normal"
						id="date-picker-inline"
						label="Choose date"
						disableFuture
						value={choosenDate}
						onChange={handleChoosenDate}
					/>
				</MuiPickersUtilsProvider>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
