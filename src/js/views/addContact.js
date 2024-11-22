import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contact } from "./Contact";
import react, { useEffect, useState } from "react";
import { Context } from "../store/appContext";


export const AddContact = () => {
    const [contacts, setContacts] = useState([]);
    const [newContact, setnewContact] = useState([]);
    const [Contacto, setNewContacto] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });
    const navigate = useNavigate ()

    const { store, actions } = useContext(Context);

    const handleChange = (e) => {
        setNewContacto(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.createContact(Contacto).then(console.log)
        navigate("/")
    }

    useEffect(() => {
        // createUser()
    }, [])

    return (
        <div className="">
            <h1 className="d-flex justify-content-center">Add a new contact</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input
                    value={Contacto.name}
                    onChange={handleChange}
                    name="name"
                    type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input
                    value={Contacto.email}
                    onChange={handleChange}
                    name="email"
                    type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input
                    value={Contacto.phone}
                    onChange={handleChange}
                    name="phone"
                    type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                <input
                    value={Contacto.address}
                    onChange={handleChange}
                    name="address"
                    type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
            </div>

            <div className="d-grid gap-2">
                <Link to="/">
                    <button className="btn btn-primary" onClick={handleSubmit} type="button">save</button>
                </Link>
                <p>
                    <a href="./">or get back to contacts</a>
                </p>

            </div>
        </div>
    )
}







//   const editContact = async (id) => {
//     try {
//       const response = await fetch('https://playground.4geeks.com/todo/todos/'+id, {
//         method: 'PUT',
//         body: JSON.stringify({
//           "label": newContact,
//           "is_done": true
//         }),
//         headers: {
//           "accept": "application/json",
//           "content-type": "application/json"
//         }
//       });
//       const result = await response.json();
//       loadContacts();
//       setnewContact("");
//       return result
//     } catch (error) {
//       console.log(error)
//     }
//   }

// const deleteContact = async (id) =>{
//   try {
//       const response = await fetch('https://playground.4geeks.com/todo/todos/'+id,{
//         method:'DELETE',
//         body:JSON.stringify([]),
//         headers: {
//           "content-type": "application/json"
//         }
//       });
//       loadContact();
//       return true
//   } catch (error) {
//       console.log(error)
//   }
// }