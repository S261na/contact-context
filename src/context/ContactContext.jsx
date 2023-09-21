import axios from "axios";
import React, { createContext, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";

export const contactsContext = createContext();

const API = "http://localhost:8001/contacts";

const INIT_STATE = {
  contacts: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };

    default:
      break;
  }
};

const ContactContextProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const navigate = useNavigate();
  const addContact = async (contact) => await axios.post(API, contact);

  const getContacts = async () => {
    const { data } = await axios.get(API);
    dispatch({
      type: "GET_CONTACTS",
      payload: data,
    });
  };

  const deleteContact = async (id) => {
    await axios.delete(`${API}/${id}`);
    getContacts();
  };

  const [editedContact, setEditedContact] = useState({
    contactName: "",
    contactPhone: "",
    contactImg: "",
  });

  const getEditedContact = async (id) => {
    const { data } = await axios.get(`${API}/${id}`);
    setEditedContact(data);
    navigate("/edit");
  };

  const saveEditedContact = async (updateContact) => {
    await axios.patch(`${API}/${editedContact.id}`, updateContact);
    navigate("/");
  };

  return (
    <contactsContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
        getContacts,
        deleteContact,
        editedContact,
        getEditedContact,
        saveEditedContact,
      }}
    >
      {children}
    </contactsContext.Provider>
  );
};

export default ContactContextProvider;
