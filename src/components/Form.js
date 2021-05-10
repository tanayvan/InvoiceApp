import React from "react";
import { motion } from "framer-motion";

export default function Form({ isOpen, setIsOpen }) {
  return (
    <div>
      {setIsOpen && (
        <motion.div
          className="backdrop"
          initial={{ opacity: 0, display: "none" }}
          animate={
            isOpen
              ? { opacity: 1, display: "block" }
              : { opacity: 0, transition: { delay: 0.1 }, display: "none" }
          }
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        ></motion.div>
      )}
      <motion.div
        className="form"
        initial={{ x: -700 }}
        animate={
          isOpen
            ? { x: 0, opacity: 1, transition: { delay: 0.1, type: "tween" } }
            : {
                x: -700,
                opacity: 0,
                transition: { duration: 0.5 },
              }
        }
        exit={{ x: -700 }}
      >
        <h1>Create Invoice</h1>
        <div className="input-fields">
          <div className="input-container">
            <div className="label">Name</div>
            <input type="text" name="" id="" />
          </div>
          <div className="input-container">
            <div className="label">Client Phone Number</div>
            <input type="text" name="" id="" />
          </div>
          <div className="input-container">
            <div className="label">Client Email</div>
            <input type="text" name="" id="" />
          </div>
          <div className="location-container">
            <div className="input-container city">
              <div className="label">City</div>
              <input type="text" name="" id="" />
            </div>
            <div className="input-container city">
              <div className="label">Country</div>
              <input type="text" name="" id="" />
            </div>
            <div className="input-container city">
              <div className="label">Post Code</div>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className="input-container">
            <div className="label">Description</div>
            <input type="text" name="" id="" />
          </div>
          <div className="item-list">
            <div className="">Item List</div>
            <button className="add-item-button">Add New Item</button>
          </div>
        </div>
        <div className="components-button">
          <button
            className="discard-btn"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Discard
          </button>
        </div>
      </motion.div>
    </div>
  );
}
