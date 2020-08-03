import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles({
	root: {
		"& > *:first-child": {
			"justify-content": " space-between",
		},
	},
	pageTitle: {
		display: "flex",
		"justify-content": "space-around",
		"align-items": "center",
		width: "6rem",
	},
});
