import React, { useContext } from "react";
import AuthContext from "../../Store/auth-context";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
	const ctx = useContext(AuthContext);
	return (
		<AuthContext.Consumer>
			{() => {
				return (
					<nav className={classes.nav}>
						<ul>
							{ctx.isLoggedIn && (
								<li>
									<a href="/">Users</a>
								</li>
							)}
							{props.isLoggedIn && (
								<li>
									<a href="/">Admin</a>
								</li>
							)}
							{props.isLoggedIn && (
								<li>
									<button onClick={props.onLogout}>Logout</button>
								</li>
							)}
						</ul>
					</nav>
				);
			}}
		</AuthContext.Consumer>
	);
};

export default Navigation;
