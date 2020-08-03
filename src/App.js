import React from "react";
import {Grid} from "@material-ui/core";

import HomePage from "./components/HomePage/HomePage";
import Header from "./components/Header/Header";

import {
	ThemeProvider,
	createMuiTheme,
	responsiveFontSizes,
} from "@material-ui/core/styles";
import {darkThemeProperties} from "./utils/theme";

import {useStyles} from "./components/HomePage/HomePageStyles";

function App() {
	const classes = useStyles();
	let darkTheme = createMuiTheme(darkThemeProperties);
	darkTheme = responsiveFontSizes(darkTheme);

	return (
		<>
			<ThemeProvider theme={darkTheme}>
				<Header />
				<Grid container>
					<Grid item xs={false} lg={1} />
					<Grid item xs={12} lg={10} className={classes.root}>
						<HomePage />
					</Grid>
					<Grid item xs={false} lg={1} />
				</Grid>
			</ThemeProvider>
		</>
	);
}

export default App;
