import "./App.css";
import Greet from "./components/Greet";
import Person from "./components/Person";
function App() {
	const personName = {
		first: "Narendra",
		last: "Bisht",
	};
	return (
		<div className="App">
			<div>
				<Greet name="Narendra" messageCount={20} isLoggedIn={true} />
				<Person name={personName} />
			</div>
		</div>
	);
}

export default App;
