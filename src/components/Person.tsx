type PersonProps = {
	name: {
		first: string;
		last: string;
	};
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
