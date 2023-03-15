import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
	const [poke, setPoke] = useState("");

	return (
		<div>
			<input
				placeholder='filter by type'
				onChange={(event) => {
					setPoke(event.target.value);
				}}
			/>
			<button onClick={() => handleSubmit(poke)}>Filter</button>
		</div>
	);
};

export default SearchBar;
