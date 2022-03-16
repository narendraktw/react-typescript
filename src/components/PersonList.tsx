type PersonListProps = {
	name: { first: string; last: string }[];
};
const PersonList = (props: PersonListProps) => {
	const { name } = props;
	return (
		<div>
			{name.map((name) => {
				return (
					<h2 key={name.first}>
						{name.first} {name.last}
					</h2>
				);
			})}
		</div>
	);
};

export default PersonList;
