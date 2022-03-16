import "./App.css";
import { Greet } from "./components/Greet";

function App() {
	return (
		<div className="App">
			<div>
				<Greet name="Narendra" messageCount={20} isLoggedIn={true}></Greet>
			</div>
		</div>
	);
}

export default App;
