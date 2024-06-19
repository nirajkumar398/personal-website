// src/Contact.js
import React, { useState } from "react";
import Modal from "../designSystem/Modal/Modal";
import Form from "../designSystem/Form/Form";
import Toast from "../designSystem/Toast/Toast"; // Adjust the import path as needed

const Contact = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const onSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      closeModal();
      setSubmitted(false);
    }, 1500);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="animate-pulse px-12 py-4 text-1.5xl bg-orange-600 rounded-full shadow-lg hover:bg-red-500 font-semibold"
      >
        Contact Me
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-center font-semibold text-2xl">Fill Details</h2>
          <Form onClose={onSubmit} />
        </Modal>
      )}
      {submitted && <Toast message="Details Saved Successfully!" />}
    </>
  );
};

export default Contact;
