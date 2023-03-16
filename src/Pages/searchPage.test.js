import {  render, screen } from "@testing-library/react";
import SearchPage from "./SearchPage";

test("Search Page", () => {
	render(<SearchPage />);

	const filter = screen.getByText("Filter");
	const showMore = screen.getByText("Show More Pokemon");

	expect(filter).toBeInTheDocument();
	expect(showMore).toBeInTheDocument();
});
