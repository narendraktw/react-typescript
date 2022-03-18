import React, { useState } from "react";

const LoggedIn = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const handleLogin = () => {
		setIsLoggedIn(true);
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
	};
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User is {isLoggedIn ? "logged in" : "logeed out"}</div>
		</div>
	);
};

export default LoggedIn;
