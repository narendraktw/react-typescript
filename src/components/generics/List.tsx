type ListProps<T> = {
	items: T[];
	onClick: (value: T) => void;
};

//generic types...
const List = <T extends {}>({ items, onClick }: ListProps<T>) => {
	return (
		<>
			<h2>List of Items:</h2>
			{items.map((item, index) => {
				return (
					<div key={index} onClick={() => onClick(item)}>
						{item}
					</div>
				);
			})}
		</>
	);
};

export default List;
