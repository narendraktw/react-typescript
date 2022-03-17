import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Greet1 from "./components/Greet1";
import Heading from "./components/Heading";
import Input from "./components/Input";
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
			<Button
				handleClick={(event, id) => console.log("Button Clicked", event, id)}
			/>
			<Input value="" handleChange={(event) => console.log(event)} />
			<Container styles={{ border: "1px solid red", padding: "1rem" }} />
		</div>
	);
}

export default App;
