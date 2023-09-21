import React, { useContext, useState } from "react";
import { contactsContext } from "../../context/ContactContext";

const EditContact = () => {
  const { editedContact, saveEditedContact } = useContext(contactsContext);

  const [editName, setEditName] = useState(editedContact.contactName);
  const [editPhone, setEditPhone] = useState(editedContact.contactPhone);
  const [editImg, setEditImg] = useState(editedContact.contactImg);

  function handleSave() {
    if (!editName.trim() || !editPhone.trim() || !editImg.trim()) {
      alert("empty");
      return;
    }

    let newContact = {
      contactName: editName,
      contactPhone: editPhone,
      contactImg: editImg,
    };

    saveEditedContact(newContact);
    setEditName("");
    setEditPhone("");
    setEditImg("");
  }

  return (
    <div className="flex flex-col w-1/4 mx-auto">
      <input
        className="p-3 my-3 text-center rounded-md border-solid border-2 border-black"
        type="text"
        value={editName}
        onChange={(e) => setEditName(e.target.value)}
        placeholder="имя"
      />
      <input
        className="p-3 my-3 text-center rounded-md border-solid border-2 border-black"
        type="text"
        value={editPhone}
        onChange={(e) => setEditPhone(e.target.value)}
        placeholder="номер"
      />
      <input
        className="p-3 my-3 text-center rounded-md border-solid border-2 border-black"
        type="text"
        value={editImg}
        onChange={(e) => setEditImg(e.target.value)}
        placeholder="изображение"
      />
      <button
        className="p-3 my-3 font-bold text-center rounded-md w-32 mx-auto bg-black text-white"
        onClick={handleSave}
      >
        Изменить
      </button>
  
    </div>
  );
};

export default EditContact;
