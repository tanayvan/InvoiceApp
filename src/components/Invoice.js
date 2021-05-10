import React, { useState } from "react";
import Form from "./Form";
import InvoiceCard from "./InvoiceCard";
import { motion } from "framer-motion";
export default function Invoice() {
  const [isOpen, setIsOpen] = useState(false);
  const animation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  return (
    <motion.div
      className="invoice-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        x: "-50%",
        opacity: 0,
        transition: {
          type: "tween",
          ease: "easeIn",
          duration: 0.5,
        },
      }}
    >
      <div className="invoice-header">
        <div className="" style={{ marginRight: "auto" }}>
          <h1>Invoice</h1>
          <p>There are total 7 Headers</p>
        </div>

        <button
          className="add-button"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          New Invoice
        </button>
      </div>
      <Form isOpen={isOpen} setIsOpen={setIsOpen} />
      <motion.div
        className="card-container"
        variants={animation}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4, 5, 6].map((map) => {
          return <InvoiceCard />;
        })}
      </motion.div>
    </motion.div>
  );
}
