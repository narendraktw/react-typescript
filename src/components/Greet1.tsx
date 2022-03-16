type GreetProps = {
	name: string;
	messageCount?: number; //optional
	isLoggedIn: boolean;
};
const Greet1 = (props: GreetProps) => {
	const { name, messageCount = 0, isLoggedIn } = props;
	return (
		<>
			{isLoggedIn
				? `Welcome ${name}! You have ${messageCount} unread messages`
				: "Welcome Guest"}
		</>
	);
};

export default Greet1;
