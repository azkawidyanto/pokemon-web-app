import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageCard from "../Component/ImageCard";
import SearchBar from "../Component/SearchBar";
import { storePokemon } from "../redux/reducer";

const SearchPage = () => {
	const dispatch = useDispatch();
	const pokeData = useSelector((state) => state?.pokemon?.pokemon);
	const handleSubmit = useCallback(
		(poke) => {
			console.log(poke);
			fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
				.then((response) => response.json())
				.then((data) => dispatch(storePokemon(data)));
		},
		[dispatch],
	);

	return (
		<div>
			<div>
				<SearchBar handleSubmit={handleSubmit} />
			</div>
			{console.log(pokeData)}
			<div>
				<ImageCard />
			</div>
		</div>
	);
};

export default SearchPage;
