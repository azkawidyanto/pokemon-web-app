import { useCallback, useEffect, useState } from "react";
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
		fetch(`https://pokeapi.co/api/v2/type/${type}`)
			.then((response) => response.json())
			.then((data) => setListPokemon(data?.pokemon));

		setShowFilter(true);
	}, []);

	const pokemonData = useCallback((limit) => {
		fetch(
			`https://pokeapi.co/api/v2/pokemon?offset=${limit}&limit=${20 + limit}`,
		)
			.then((response) => response.json())
			.then((data) => setListPokemon(data?.results));
	}, []);

	const pokeList = useCallback(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
			.then((response) => response.json())
			.then((data) => setPokeData(data));
	}, [pokemon]);

	function pickPokemon(name) {
		setPokemon(name);
		pokeList();
		console.log(pokemon, pokeData);

		setShowPokemon(true);
	}

	useEffect(() => pokemonData(limit), [limit, pokemonData]);

	return (
		<div>
			<div>
				<SearchBar handleSubmit={handleFilter} />
			</div>
			<div
				classname="Poke-page"
				style={{
					display: "flex",
					width: "100vw",
					alignItems: "stretch",
					justifyContent: "space-evenly",
				}}
			>
				<div>
					{!showFilter
						? listPokemon?.map((element) => (
								<div onClick={() => pickPokemon(element.name)}>
									{element.name}
								</div>
						  ))
						: listPokemon?.map((element) => (
								<div onClick={() => pickPokemon(element?.pokemon?.name)}>
									{element?.pokemon?.name}
								</div>
						  ))}
				</div>
				{showPokemon && <ImageCard data={pokeData} />}
			</div>

			<div onClick={() => setLimit(limit + 20)}>Show More Pokemon</div>
		</div>
	);
};

export default SearchPage;
