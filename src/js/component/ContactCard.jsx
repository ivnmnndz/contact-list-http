import React, { useContext } from "react";
import "../../styles/ContactCard.css";
import image from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

const ContactCard = props => {
	const { actions } = useContext(Context);
	let history = useHistory();

	const editHandler = () => {
		history.push(`/edit-contact/${props.item.id}`);
	};

	const deleteHandler = () => {
		if (window.confirm("are you sure?")) {
			actions.deleteContact(props.item.id);
		}
	};

	return (
		<div className="contact-card">
			<div className="card-header">
				<img className="profile-img" src={image} />
				<h3>{props.item.full_name}</h3>
			</div>
			<div className="card-prop">
				<div className="card-icon">
					<i className="fas fa-map-marker-alt" />
				</div>
				<span>{props.item.address}</span>
			</div>
			<div className="card-prop">
				<div className="card-icon">
					<i className="fas fa-phone" />
				</div>
				<span>{props.item.phone}</span>
			</div>
			<div className="card-prop">
				<div className="card-icon">
					<i className="fas fa-envelope" />
				</div>
				<span>{props.item.email}</span>
			</div>
			<div className="button-box">
				<button className="button" onClick={editHandler}>
					<span>Edit</span>
				</button>
				<button className="button" onClick={deleteHandler}>
					<span>Delete</span>
				</button>
			</div>
		</div>
	);
};

ContactCard.propTypes = {
	item: PropTypes.object
};

export default ContactCard;
