import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function InvoiceDetails() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <motion.div
      className="details-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.1 } }}
      exit={{
        x: "50%",
        opacity: 0,
        transition: {
          type: "tween",
          ease: "easeIn",
          duration: 0.5,
          when: "beforeChildren",
        },
      }}
    >
      <Link className="back-link" to="/">
        Go Back
      </Link>
      <div className="status-container">
        <div className="status-line">Status</div>
        <div className="status-btn">Paid</div>
        <button
          className="edit-btn"
          onClick={() => {
            setIsFormOpen(!isFormOpen);
          }}
        >
          Edit
        </button>
        <button
          className="delete-btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Delete
        </button>
      </div>
      <div className="invoice-details-container">
        <div className="id-wrap">
          <div className="id">#RT3080</div>
          <div className="city-details">
            <div className="city">Navsari</div>
            <div className="country">India</div>
          </div>
        </div>
        <div className="date-wrap">
          <div className="date">
            <div className="label">Invoice Date</div>
            <div className="date">18 Aug 2021</div>
          </div>
          <div className="date">
            <div className="label">Bill To</div>
            <div className="date">Malhar Lumbhani</div>
          </div>
          <div className="date">
            <div className="label">Sent to</div>
            <div className="email">malharlumbhani1432@gmail.com</div>
          </div>
        </div>
      </div>
      <motion.div
        className="modal-backdrop"
        initial={{ zIndex: -10, opacity: 0 }}
        animate={
          isOpen
            ? {
                opacity: 1,
                zIndex: 100,
                transition: { duration: 0, when: "beforeChildren" },
              }
            : {
                opacity: 0,
                zIndex: -10,
                transition: { duration: 0.1 },
              }
        }
      >
        <motion.div
          className="modal"
          initial={{ scale: 0 }}
          animate={
            isOpen
              ? { scale: 1, transition: { delay: 0.2 } }
              : { scale: 0, transition: { delay: 0.2 } }
          }
        >
          <h1>Confirm delete</h1>
          <p>
            Are you sure you want to delete invoice RT3080? This action cannot
            be undone.
          </p>
          <div className="btn-container">
            <button
              className="btn-close"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
