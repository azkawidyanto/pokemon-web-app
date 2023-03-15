import { useCallback, useEffect, useState } from "react";

const ImageCard = ({ id }) => {
	const [image, setImage] = useState("");

	const imageData = useCallback(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}/`)
			.then((response) => response.json())
			.then((data) => setImage(data?.sprites?.front_default));
	}, [id]);

	useEffect(() => {
		imageData();
	}, [id, imageData]);

	return (
		<div>
            <img src={image} alt={id} />

            <div></div>
		</div>
	);
};

export default ImageCard;
