import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import injectContext from "./store/appContext.js";
import "../styles/index.scss";
import Navbar from "./component/Navbar.jsx";
import ContactsList from "./views/ContactsList.jsx";
import EditContact from "./views/EditContact.jsx";
import AddContact from "./views/AddContact.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<Navbar />
				<div className="contact-app">
					<Switch>
						<Route exact path="/">
							<ContactsList />
						</Route>
						<Route exact path="/add-contact">
							<AddContact />
						</Route>
						<Route path="/edit-contact/:id" component={EditContact} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
