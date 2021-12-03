import React, { useState, useContext, useEffect } from "react";
import "../../styles/ContactForm.css";
import "../../styles/index.scss";
import { Context } from "../store/appContext";
import { useHistory, useParams } from "react-router-dom";

const EditContact = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const { id } = useParams();
	const contact = store.contacts.filter(c => c.id === id)[0];
	const [values, setValues] = useState(contact || {});

	useEffect(
		() => {
			if (contact) setValues(contact);
		},
		[contact]
	);

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		actions.updateContact(contact.id, values);
		history.push("/");
	};

	return Object.keys(values).length ? (
		<>
			<h2>Edit</h2>
			<form className="contact-form" onSubmit={handleSubmit}>
				<label>
					Full Name
					<input name="full_name" value={values.full_name} onChange={handleInputChange} />
				</label>
				<label>
					Email
					<input name="email" value={values.email} onChange={handleInputChange} />
				</label>
				<label>
					Phone
					<input name="phone" value={values.phone} onChange={handleInputChange} />
				</label>
				<label>
					Address
					<input name="address" value={values.address} onChange={handleInputChange} />
				</label>
				<div className="button-box">
					<button className="button" type="submit">
						Submit
					</button>
					<button
						className="button"
						onClick={e => {
							e.preventDefault();
							history.goBack();
						}}>
						Go Back
					</button>
				</div>
			</form>
		</>
	) : (
		<div>loading</div>
	);
};

export default EditContact;
