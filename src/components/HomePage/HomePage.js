import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";

import Image from "material-ui-image";
import PhotoGallery from "../PhotoGallery/PhotoGallery";

import {transparent} from "material-ui/styles/colors";

function HomePage() {
	const [mainImage, setMainImage] = useState("");
	const choosenDate = useSelector((state) => state);
	
	useEffect(() => {
		fetch(
			`https://api.nasa.gov/planetary/apod?date=${choosenDate}&api_key=wAPiFsefOy4RQSsHYgWPXReZA2k4GnpNF3hkg33o`
		)
			.then((res) => res.json())
			.then((result) => {
				setMainImage(result.url);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [choosenDate]);

	return (
		<>
			<Image
				aspectRatio={16 / 9}
				imageStyle={{width: "100%", height: "auto", maxHeight: "100%"}}
				color={transparent}
				style={{marginBottom: "2rem"}}
				src={mainImage}
			/>
			<PhotoGallery />
		</>
	);
}

export default HomePage;
