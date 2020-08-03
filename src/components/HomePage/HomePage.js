import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";

import Image from "material-ui-image";
import {transparent} from "material-ui/styles/colors";

import PhotoGallery from "../PhotoGallery/PhotoGallery";
import {setDate} from "../../actions";

import {getPreviousDay} from "../../utils/helperFunctions";

function HomePage() {
	const dispatch = useDispatch();
	const choosenDate = useSelector((state) => state);

	const [mainImage, setMainImage] = useState("");

	useEffect(() => {
		fetch(
			`https://api.nasa.gov/planetary/apod?date=${choosenDate}&api_key=wAPiFsefOy4RQSsHYgWPXReZA2k4GnpNF3hkg33o`
		)
			.then((res) => {
				if (!res.ok) {
					if (res.status === 404) {
						dispatch(setDate(getPreviousDay(choosenDate)));
					}
					throw new Error("Network response was not ok");
				}
				return res.json();
			})
			.then((result) => {
				setMainImage(result.url);
			})
			.catch((error) => {
				console.error("Error:", error);
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
			)
			<PhotoGallery />
		</>
	);
}

export default HomePage;
