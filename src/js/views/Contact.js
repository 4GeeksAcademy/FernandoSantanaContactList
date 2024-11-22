import React, { useContext, useEffect } from "react";
import { ContactCard } from "../component/ContactCard";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { FaPhone } from "react-icons/fa";


export const Contact = () => {
    const { store, actions } = useContext(Context);

    useEffect (() => {
        actions.createUser()
        actions.getContacts()
    },[])

    return (
        <div className="container ">
            <div className="newContact d-flex justify-content-end col-10">
                <Link to="/AddContact">
                    <button type="button" className="addButton btn btn-success" >Add new contact</button>
                </Link>
            </div>
            {store.contacts?.map((contact) => {
                return (
                    <div key={contact.id} className="d-flex justify-content-center col-12">                      
                            <ContactCard
                                name= {contact.name}
                                phone=  {contact.phone}
                                email={contact.email}
                                address={contact.address}
                                id={contact.id}                            />
                      
                    </div>
                )
            })}
        </div>
    )
}