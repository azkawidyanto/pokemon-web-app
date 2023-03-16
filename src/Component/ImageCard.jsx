import { useCallback, useEffect, useState } from "react";

const ImageCard = ({ data }) => {
	const [image, setImage] = useState("");

	const imageData = useCallback(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon-form/${data?.id}/`)
			.then((response) => response.json())
			.then((data) => setImage(data?.sprites?.front_default));
	}, [data]);

	useEffect(() => {
		imageData();
	}, [data, imageData]);
	const abilityData = data?.abilities;
	const typeData = data?.types;
	return (
		<div style={{ fontSize: "20px" }}>
			<img src={image} alt={data?.id} style={{ width: "10vw" }} />
			<div>{data?.name}</div>
			<div>
				{abilityData?.map((element, index) => {
					console.log(element);
					return <div>{`Ability ${index + 1} ${element?.ability.name}`}</div>;
				})}
			</div>
			<div>{`Height ${data?.height}`}</div>
			<div>{`Weight ${data?.weight}`}</div>
			<div>
				{typeData?.map((element, index) => {
					console.log(element);
					return <div>{`Type ${index + 1} ${element?.type.name}`}</div>;
				})}
			</div>
		</div>
	);
};

export default ImageCard;
