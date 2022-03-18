import { useContext } from "react";
import { UserContext } from "./UserContext";

const User = () => {
	const userContext = useContext(UserContext);
	const handeleLogin = () => {
		userContext.setUser({
			name: "Narendra Bisht",
			email: "narendraktw@gmail.com",
		});
	};
	const handleLogout = () => {
		userContext.setUser(null);
	};
	return (
		<div>
			<button onClick={handeleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User name is {userContext.user?.name}</div>
			<div>User email is {userContext.user?.email}</div>
		</div>
	);
};

export default User;
