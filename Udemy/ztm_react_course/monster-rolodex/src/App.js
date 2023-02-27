import { Component } from "react";

import "./App.css";

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
		console.log("1. Constructor");
	}

	componentDidMount() {
		console.log("3. Component Did Mount");
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((r) => r.json())
			.then((users) =>
				this.setState(
					() => {
						return { monsters: users };
					},
					() => {
						console.log(this.state);
					}
				)
			);
	}

	onSearchChange = (e) => {
		const searchField = e.target.value.toLocaleLowerCase();
		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		console.log("2. Render");

		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		return (
			<div className="App">
				<input
					className="search-box"
					type="search"
					placeholder="Search Monsters"
					onChange={onSearchChange}
				/>
				{filteredMonsters.map((monster) => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					);
				})}
			</div>
		);
	}
}

export default App;
