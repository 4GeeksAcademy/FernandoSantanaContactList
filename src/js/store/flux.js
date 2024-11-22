import { Contact } from "../views/Contact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [],//coge un contacto	(sirve para editar)
			contacts: []//coge todos los contactos (sirve para ver los contactos)
		},

		actions: {
			seeContact : (Contacto) =>{
				setStore({contact:Contacto})
			},

			createUser: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Fernando', {
						method: 'POST',
						headers: {
							"content-type": "application/json"
						}
					});
					const result = await response.json();
					// console.log(result)
					return result
				} catch (error) {
					console.log(error)
				}
			},

			createContact: async (Contacto) => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Fernando/contacts', {
						method: 'POST',
						body: JSON.stringify(
							Contacto
						),
						headers: {
							"accept": "application/json",
							"content-type": "application/json"
						}
					});
					const result = await response.json();
					//   console.log(getStore())
					setStore({ Contact: [...getStore().Contact, result] })
				} catch (error) {
					console.log(error)
				}
			},

			getContacts: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Fernando/contacts');
					if (!response.ok) throw new Error("Error al obtener los contactos");
					const result = await response.json();
					console.log(result)
					setStore({
						contacts: result.contacts,
					});
				} catch (error) {
					console.error(error);
				}
			},

			editContact: async (Contacto) => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Fernando/contacts/' + Contacto.id, {
						method: 'PUT',
						body: JSON.stringify(
							Contacto
						),
						headers: {
							"accept": "application/json",
							"content-type": "application/json"
						}
					});
					const result = await response.json();
					//   console.log(getStore())
					setStore({ Contact: [...getStore().Contact, result] })
					getContacts()
				} catch (error) {
					console.log(error)
				}
			},

			saveEdit: async (Contacto) => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Fernando/contacts/' + Contacto.id, {
						method: 'PUT',
						body: JSON.stringify(
							Contacto
						),
						headers: {
							"accept": "application/json",
							"content-type": "application/json"
						}
					});
					const result = await response.json();
					//   console.log(getStore())
					setStore({ Contact: [...getStore().Contact, result] })
				} catch (error) {
					console.log(error)
				}
			},
			
			deleteContact: async (id) => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/Fernando/contacts/' + id,{
						method: 'DELETE',
						headers: {
							"accept": "application/json",
							"content-type": "application/json"
						}
					});
					if (!response.ok) throw new Error("Error al borrar el contacto");
					const result = await response.json();										
					getContacts();
					return result
				} catch (error) {
					console.error(error);
				}
			},

		}
	}
};



export default getState;
