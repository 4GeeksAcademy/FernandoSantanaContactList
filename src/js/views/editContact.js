import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { Contact } from "./Contact";
import react, { useEffect, useState } from "react";
import { Context } from "../store/appContext";


export const EditContact = () => {
    // const [contacts, setContacts] = useState([]);
    // const [newContact, setnewContact] = useState([]);
    const [editContact, seteditContact] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });
    const navigate = useNavigate ()

    const { store, actions } = useContext(Context);

    const handleChange = (e) => {
         seteditContact(prev => {
           return { ...prev, [e.target.name]: e.target.value }
         })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        actions.editContact(editContact)
        actions.getContacts()
        navigate("/")
       
    }

    useEffect(() => {
       seteditContact(store.contact)
    }, [])

    return (
        <div className="">
            <h1 className="d-flex justify-content-center">Edit contact</h1>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                <input
                    value={editContact.name}
                    onChange={handleChange}
                    name="name"
                    type="text" className="form-control" id="exampleFormControlInput1" placeholder="Full Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input
                    value={editContact.email}
                    onChange={handleChange}
                    name="email"
                    type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input
                    value={editContact.phone}
                    onChange={handleChange}
                    name="phone"
                    type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                <input
                    value={editContact.address}
                    onChange={handleChange}
                    name="address"
                    type="name" className="form-control" id="exampleFormControlInput1" placeholder="Enter address" />
            </div>

            <div className="d-grid gap-2">
               
                    <button className="btn btn-primary" onClick={handleSubmit} type="button">save</button>
               
                <p>
                    <a href="/">or get back to contacts</a>
                </p>

            </div>
        </div>
    )
}