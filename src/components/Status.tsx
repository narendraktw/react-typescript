type StatusProps = {
	status: "loading" | "success" | "error";
};
const Status = (props: StatusProps) => {
	const { status } = props;
	let message;
	if (status === "loading") {
		message = "loading...";
	} else if (status === "success") {
		message = "Data fetched successfully!";
	} else if (status === "error") {
		message = "Error fetching data";
	}
	return (
		<>
			<h2>Status - {message}</h2>
		</>
	);
};

export default Status;
