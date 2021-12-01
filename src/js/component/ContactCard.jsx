import React, { useContext } from "react";
import "../../styles/ContactCard.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactCard = props => {
	const { store, actions } = useContext(Context);

	const deleteHandler = () => {
		if (window.confirm("are you sure?")) {
			actions.deleteContact(props.item.id);
		}
	};

	return (
		<div className="contact-card">
			<div className="card-prop">
				<img src={props.item.avatar} />
			</div>
			<div className="card-prop">
				<h3>{props.item.full_name}</h3>
			</div>
			<div className="card-prop">
				<span>
					<i className="fas fa-map-marker-alt" />
				</span>
				<span>{props.item.address}</span>
			</div>
			<div className="card-prop">
				<span>
					<i className="fas fa-phone" />
				</span>
				<span>{props.item.phone}</span>
			</div>
			<div className="card-prop">
				<span>
					<i className="fas fa-envelope" />
				</span>
				<span>{props.item.email}</span>
			</div>
			<button>
				<Link to={`/edit-contact/${props.item.id}`}>
					<span>
						<i className="fas fa-pencil-alt" />
					</span>
				</Link>
			</button>
			<button onClick={deleteHandler}>
				<span>
					<i className="fas fa-trash-alt" />
				</span>
			</button>
		</div>
	);
};

ContactCard.propTypes = {
	item: PropTypes.object
};

export default ContactCard;
