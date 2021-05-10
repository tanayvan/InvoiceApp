import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function InvoiceDetails() {
  const [isOpen, setIsOpen] = useState(false);
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
        <button className="edit-btn">Edit</button>
        <button
          className="delete-btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Delete
        </button>
      </div>

      <motion.div
        className="backdrop"
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
