import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { AddContact } from "./views/addContact";
import { Contact } from "./views/Contact";
import { ContactCard } from "./component/ContactCard";
import { EditContact } from "./views/editContact";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<BrowserRouter basename={basename}>

			{/* <Navbar /> */}
			<Routes>
				<Route path="/" element={<Contact />} />
				<Route path="/addContact" element={<AddContact />} />
				<Route path="/contactCard" element={<ContactCard />} />
				<Route path="/editContact" element={<EditContact />} />
				<Route path="*" element={<h1>Not found!</h1>} />
			</Routes>


		</BrowserRouter>

	);
};

export default injectContext(Layout);
