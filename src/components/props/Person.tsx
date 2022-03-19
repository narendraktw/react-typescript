import { Name } from "./Person.types";
type PersonProps = {
	name: Name;
};
const Person = (props: PersonProps) => {
	const { first, last } = props.name;
	return (
		<div>
			{first} {last}
		</div>
	);
};

export default Person;
