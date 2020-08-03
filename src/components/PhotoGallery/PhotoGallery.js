import React, {useEffect} from "react";

import {Grid} from "@material-ui/core";

import PhotoCard from "../PhotoCard/PhotoCard";

import {getDateLastThirtyDays} from "../../utils/helperFunctions";

const arrOfPhotoInfo = [];

function PhotoGallery() {
	useEffect(() => {
		getDateLastThirtyDays().forEach((date) => {
			fetch(
				`https://api.nasa.gov/planetary/apod?date=${date}&api_key=wAPiFsefOy4RQSsHYgWPXReZA2k4GnpNF3hkg33o`
			)
				.then((res) => {
					if (!res.ok) {
						throw new Error("Network response was not ok");
					}
					return res.json();
				})
				.then((result) => {
					arrOfPhotoInfo.push(result);
				})
				.catch((error) => {
					console.error("Error:", error);
				});
		});
	}, []);

	return (
		<>
			<Grid container justify="center" spacing={4}>
				{arrOfPhotoInfo.map((item, key) =>
					item.code !== 400 && item["media_type"] === "image" ? (
						<Grid
							item
							xs={12}
							sm={6}
							md={4}
							xl={3}
							key={key}
							container
							justify="center"
						>
							<PhotoCard
								title={item.title}
								explanation={item.explanation}
								url={item.url}
								date={item.date}
							/>
						</Grid>
					) : null
				)}
			</Grid>
		</>
	);
}

export default PhotoGallery;
