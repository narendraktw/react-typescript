import "./App.css";
import Greet from "./components/Greet";
import Greet1 from "./components/Greet1";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
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
			<Greet name="Narendra" messageCount={20} isLoggedIn={true} />
			<Person name={personName} />
			<PersonList name={nameList} />
			<Status status="success" />
			<Oscar>
				<Heading>Oscar goes to Narendra Bisht</Heading>
			</Oscar>
			<Greet1 name="Narendra" isLoggedIn={true} />
		</div>
	);
}

export default App;
