import React, { useContext, useState } from "react";
import "../../styles/ContactForm.css";
import "../../styles/index.scss";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

const AddContact = () => {
	const { store, actions } = useContext(Context);
	let history = useHistory();

	//initial state
	const [values, setValues] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: ""
	});

	const handleInputChange = e => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		actions.addContact(values);
		history.push("/");
	};

	return (
		<div>
			<h2>Add a Contact</h2>
			<form onSubmit={handleSubmit} className="contact-form">
				<label>
					Name
					<input
						name="full_name"
						value={values.full_name}
						placeholder="Full Name"
						onChange={handleInputChange}
					/>
				</label>
				<label>
					Email
					<input name="email" value={values.email} placeholder="Email" onChange={handleInputChange} />
				</label>
				<label>
					Phone
					<input name="phone" value={values.phone} placeholder="Phone Number" onChange={handleInputChange} />
				</label>
				<label>
					Address
					<input name="address" value={values.address} placeholder="Address" onChange={handleInputChange} />
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AddContact;
