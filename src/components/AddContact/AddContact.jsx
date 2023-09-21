import React, { useContext, useState } from "react";
import { contactsContext } from "../../context/ContactContext";
import { ToastContainer, toast } from "react-toastify";
import Home from "../Home/Home";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { addContact } = useContext(contactsContext);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactImg, setContactImg] = useState("");

  const notify = () => toast.error("Заполните поля");

  const navigate = useNavigate();

  const handleClick = () => {
    if (!contactName.trim() || !contactPhone.trim() || !contactImg.trim()) {
      notify();
      return;
    }

    let newContact = {
      contactName,
      contactPhone,
      contactImg,
    };

    addContact(newContact);

    setContactName("");
    setContactPhone("");
    setContactImg("");

    navigate("/");
  };

  return (
    <div className="flex flex-col w-1/4 mx-auto">
      <input
        className="p-3 my-3 text-center rounded-md border-solid border-2 border-black"
        type="text"
        value={contactName}
        onChange={(e) => setContactName(e.target.value)}
        placeholder="имя"
      />
      <input
        className="p-3 my-3 text-center rounded-md border-solid border-2 border-black"
        type="text"
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
        placeholder="номер"
      />
      <input
        className="p-3 my-3 text-center rounded-md border-solid border-2 border-black"
        type="text"
        value={contactImg}
        onChange={(e) => setContactImg(e.target.value)}
        placeholder="изображение"
      />
      <button
        className="p-3 my-3 font-bold text-center rounded-md w-32 mx-auto bg-pink-300"
        onClick={handleClick}
      >
        Добавить
      </button>
      <ToastContainer position="top-center" pauseOnHover={true} />
    </div>
  );
};

export default AddContact;
