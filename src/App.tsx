import './App.css';
import Button from './components/props/Button';
import Container from './components/props/Container';
import Greet from './components/props/Greet';
import Greet1 from './components/props/Greet1';
import Heading from './components/props/Heading';
import Input from './components/props/Input';
import Oscar from './components/props/Oscar';
import Person from './components/props/Person';
import PersonList from './components/props/PersonList';
import Box from './components/context/Box';
import Counter from './components/state/Counter';
import LoggedIn from './components/state/LoggedIn';
import User from './components/context/User';
import Status from './components/props/Status';
import DomRef from './components/ref/DomRef';
import MutableRef from './components/ref/MutableRef';
import Private from './components/auth/Private';
import Profile from './components/auth/Profile';
import List from './components/generics/List';
import RandomNumber from './components/restricting/RandomNumber';
import Toast from './templateLiterals/Toast';
import CustomButton from './html/Button';
import { Text } from './components/polymorphic/Text';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
function App() {
	// const personName = {
	// 	first: 'Narendra',
	// 	last: 'Bisht',
	// };

	// const nameList = [
	// 	{
	// 		first: 'Narendra',
	// 		last: 'Bisht',
	// 	},
	// 	{
	// 		first: 'Ramesh',
	// 		last: 'Kumar',
	// 	},
	// 	{
	// 		first: 'Pankaj',
	// 		last: 'Gupta',
	// 	},
	// ];
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

			{/* <Toast position="center" /> */}
			{/* <CustomButton variant="primary" onClick={() => console.log('Clicked')}>
				Primary Button
			</CustomButton> */}
			<Text size="lg" as="h1">
				Heading
			</Text>
			<Text size="md" as="p">
				Paragraph
			</Text>
			<Text size="sm" color="secondary" as="label" htmlFor="someId">
				Label
			</Text>
		</div>
	);
}

export default App;
