import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
//import { Contact } from "../views/Contact";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { HiIdentification } from "react-icons/hi";
PropTypes


export const ContactCard = (props) => {
    const [newContact, setnewContact] = useState([]);
    const [Contacto, setNewContacto] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });
    const navigate = useNavigate ()

    const { store, actions } = useContext(Context);
    console.log(store)
    const handleChange = (e) => {
        setNewContacto(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    useEffect(() => {
        actions.getContacts()        
        // createUser()
    }, [])
    return (

        <div className="contactCard">
            <div className="card mt-3 ">
                <div className="row">
                    <div className="col-4 w-25">
                        <img src="https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png" className="img-fluid rounded-circle " alt="..." />
                    </div>
                    <div className="col-md-9">
                        <div className="card-body row">
                            <div className="cardInfo col-9">
                                <ul>
                                        <h5 className="card-title mb-4 "><HiIdentification /> {props.name}  </h5>
                                        <p className="text mb-2" > <FaPhoneAlt />  {props.phone}</p>
                                        <p className="text mb-2"> <MdOutlineAlternateEmail />  {props.email}</p>
                                        <p className="text mb-1"> <IoLocationSharp />  {props.address}</p>
                                </ul>
                            </div>
                            <div className="cardButton col-3">

                                <button type="button" 
                                onClick = {() => {
                                actions.seeContact(props);
                                console.log(props)
                                navigate("/editContact");
                                }}
                                className="btn me-3"><FaEdit /></button>
                                <button type="button"
                                  onClick = {() => {
                                    actions.deleteContact(props.id);
                                    window.location.reload();
                                    }}
                                className="btn ms-3" ><MdDelete /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}