import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {
	const [searchField, setSearchField] = useState(""); // [value, setValue]
	const [monsters, setMonsters] = useState([]);

	console.log("render");

	const onSearchChange = (e) => {
		const searchFieldString = e.target.value.toLocaleLowerCase();
		setSearchField(searchFieldString);
	};

	const filteredMonsters = monsters.filter((m) => {
		return m.name.toLocaleLowerCase().includes(searchField);
	});

	fetch("https://jsonplaceholder.typicode.com/users")
		.then((r) => r.json())
		.then((u) => setMonsters(u));

	return (
		<div className="App">
			<h1 className="app-title"> Monsters Rolodex</h1>
			<SearchBox
				className="monsters-search-box"
				onChangeHandler={onSearchChange}
				placeholder="search monsters"
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
