import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ImageCard from "../Component/ImageCard";
import SearchBar from "../Component/SearchBar";

const SearchPage = () => {
	const [pokeData, setPokeData] = useState([]);

	const [listPokemon, setListPokemon] = useState([]);
	const [pokemon, setPokemon] = useState("");

	const [showPokemon, setShowPokemon] = useState(false);

	const [showFilter, setShowFilter] = useState(false);

	const [limit, setLimit] = useState(0);
	const handleFilter = useCallback((type) => {
		fetch(`https://pokeapi.co/api/v2/typr/${type}`)
			.then((response) => response.json())
			.then((data) => setListPokemon(data?.pokemon));

		setShowFilter(true);
	}, []);

	const pokemonData = useCallback((limit) => {
		fetch(`https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=20`)
			.then((response) => {
				console.log(response);
				response.json();
			})
			.then((data) => setListPokemon(data?.results));
	}, []);

	const pokeList = useCallback(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
			.then((response) => {
				console.log(response);
				response.json();
			})
			.then((data) => setPokeData(data));
	}, [pokemon]);

	function pickPokenon(name) {
		setPokemon(name);
		pokeList();
	}

	useEffect(() => {
		pokemonData(limit);
	}, [limit, pokemonData]);

	console.log(listPokemon);
	return (
		<div>
			<div>
				<SearchBar handleSubmit={handleFilter} />
			</div>
			{!showFilter
				? listPokemon?.map((element) => (
						<div onClick={() => pickPokenon(element.name)}>{element.name}</div>
				  ))
				: listPokemon?.map((element) => (
						<div onClick={() => pickPokenon(element.pokemon.name)}>
							{element.pokemon.name}
						</div>
				  ))}
			<div onClick={() => setLimit(limit + 20)}>Show More Pokemon</div>
			{showPokemon && <ImageCard />}
		</div>
	);
};

export default SearchPage;
