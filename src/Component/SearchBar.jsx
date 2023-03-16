import { useState } from "react";

const SearchBar = ({ handleSubmit }) => {
	const [poke, setPoke] = useState("");

	return (
		<div style={{ marginBottom: "5vw" }}>
			<input
				placeholder="filter by type"
				onChange={(event) => {
					setPoke(event.target.value);
				}}
			/>
			<button style={{ marginLeft: "2vw" }} onClick={() => handleSubmit(poke)}>
				Filter
			</button>
		</div>
	);
};

export default SearchBar;
