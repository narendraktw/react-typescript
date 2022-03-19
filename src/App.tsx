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
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import { UserContextProvider } from "./components/context/UserContext";
import Counter from "./components/state/Counter";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/context/User";
import Status from "./components/Status";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import Private from "./components/auth/Private";
import Profile from "./components/auth/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restricting/RandomNumber";

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
			{/* <Greet name="Narendra" messageCount={20} isLoggedIn={true} />
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
			<LoggedIn />
			<User />
			<Counter /> */}
			{/* <ThemeContextProvider>
				<Box />
			</ThemeContextProvider>
			<UserContextProvider>
				<User />
			</UserContextProvider> */}
			{/* <DomRef />
			<MutableRef /> */}
			{/* <Private isLoggedIn={true} component={Profile} /> */}
			{/* <List
				items={["Batman", "Superman", "Wonder Woman"]}
				onClick={(item) => console.log(item)}
			/>
			<List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
			{/* <RandomNumber value={10} isPositive /> */}
		</div>
	);
}

export default App;
