import { useState } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import "./App.css";

const App = () => {

	const [] = useState();			// Gives back an array of two values

	const onSearchChange = (e) => {
			const searchField = e.target.value.toLocaleLowerCase();
			this.setState(() => {
				return { searchField };
			});
		};
	};

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

// ---------------------------------------------------------------

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: "",
// 		};
// 	}

// 	componentDidMount() {
// 		fetch("https://jsonplaceholder.typicode.com/users")
// 			.then((r) => r.json())
// 			.then((users) =>
// 				this.setState(() => {
// 					return { monsters: users };
// 				})
// 			);
// 	}

// 	onSearchChange

// 	render() {
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// 		const filteredMonsters = monsters.filter((monster) => {
// 			return monster.name.toLocaleLowerCase().includes(searchField);
// 		});

// 		return (
// 			<div className="App">
// 				<h1 className="app-title"> Monsters Rolodex</h1>
// 				<SearchBox
// 					className="monsters-search-box"
// 					onChangeHandler={onSearchChange}
// 					placeholder="search monsters"
// 				/>
// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

export default App;
