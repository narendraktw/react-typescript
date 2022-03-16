type GreetProps = {
	name: string;
	messageCount: number;
	isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
	const { name, messageCount, isLoggedIn } = props;
	return (
		<>
			{isLoggedIn
				? `Welcome ${name}! You have ${messageCount} unread messages`
				: "Welcome Guest"}
		</>
	);
};
