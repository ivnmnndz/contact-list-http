import React, { useState, useContext, useEffect } from "react";
import "../../styles/ContactForm.css";
import "../../styles/index.scss";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const EditContact = props => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	const contact = store.contacts.filter(c => c.id === props.match.params.id)[0];
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
		<div>
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
				<div>
					<button type="submit">Submit</button>
					<button>Cancel</button>
				</div>
			</form>
		</div>
	) : (
		<div>loading</div>
	);
};

EditContact.propTypes = {
	full_name: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string,
	address: PropTypes.string,
	match: PropTypes.object
};

export default EditContact;
