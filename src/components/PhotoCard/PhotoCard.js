import React from "react";
import {useDispatch} from "react-redux";

import {makeStyles} from "@material-ui/core/styles";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
} from "@material-ui/core";

import {setDate} from "../../actions";

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

function PhotoCard(props) {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleChoosePhoto = () => {
		dispatch(setDate(date));
		window.scrollTo({top: 0, left: 0, behavior: "smooth"});
	};

	const {title, explanation, url, date} = props;

	return (
		<>
			<Card className={classes.root}>
				<CardActionArea onClick={handleChoosePhoto}>
					<CardMedia className={classes.media} image={url} title={title} />
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{title}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{explanation}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		</>
	);
}

export default PhotoCard;
