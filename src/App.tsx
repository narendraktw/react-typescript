import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
function App() {
	const personName = {
		first: "Narendra",
		last: "Bisht",
	};

	const nameList = [
		{
			first: "Narendra",
			last: "Bisht",
		},
		{
			first: "Ramesh",
			last: "Kumar",
		},
		{
			first: "Pankaj",
			last: "Gupta",
		},
	];
	return (
		<div className="App">
			<div>
				<Greet name="Narendra" messageCount={20} isLoggedIn={true} />
				<Person name={personName} />
				<PersonList name={nameList} />
			</div>
		</div>
	);
}

export default App;
