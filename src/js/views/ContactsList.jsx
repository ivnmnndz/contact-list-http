import React, { useContext } from "react";
import "../../styles/ContactsList.css";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext";

const ContactsList = () => {
	const { store } = useContext(Context);
	return (
		<>
			<h2>Contact List</h2>
			<div className="contact-list">
				{store.contacts &&
					store.contacts.map((item, index) => {
						return <ContactCard item={item} key={index} />;
					})}
			</div>
		</>
	);
};
export default ContactsList;
