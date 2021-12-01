const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/ivan_agenda")
					.then(res => {
						if (!res.ok) {
							throw new Error(err);
						}
						return res.json();
					})
					.then(data => {
						getStore(setStore({ contacts: data }));
					});
			},

			addContact: ({ full_name, email, phone, address }) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "ivan_agenda",
						address: address,
						phone: phone
					})
				})
					.then(res => {
						if (!res.ok) {
							throw new Error("error");
						}
					})
					.then(() => {
						getActions().getContacts();
					});
			},

			deleteContact: contact_id => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${contact_id}`, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				}).then(res => {
					if (!res.ok) {
						throw new Error("error");
					}
					getActions().getContacts();
				});
			},

			updateContact: (id, { full_name, email, phone, address }) => {
				fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						full_name: full_name,
						email: email,
						agenda_slug: "ivan_agenda",
						address: address,
						phone: phone
					})
				}).then(res => {
					if (!res.ok) {
						throw new Error("error");
					}
					getActions().getContacts();
				});
			}
		}
	};
};

export default getState;
