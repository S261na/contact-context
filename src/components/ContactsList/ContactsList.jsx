import React, { useContext, useEffect } from "react";
import { contactsContext } from "../../context/ContactContext";

const ContactsList = () => {
  const { contacts, getContacts, deleteContact, getEditedContact } =
    useContext(contactsContext);

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="w-1/2 flex mx-auto flex-wrap justify-center">
      {contacts.map((item) => (
        <div
          className="m-3 p-7 text-center rounded-md border-black shadow-xl"
          key={item.id}
        >
          <img className="w-40 h-48 rounded-md" src={item.contactImg} alt="" />
          <p className="font-bold">{item.contactName}</p>
          <p>{item.contactPhone}</p>
          <button
            className="m-1 py-1 px-3 bg-pink-500 text-white rounded-md"
            onClick={() => deleteContact(item.id)}
          >
            Delete
          </button>
          <button
            className="m-1 py-1 px-3 bg-black text-white rounded-md"
            onClick={() => getEditedContact(item.id)}
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
