import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function InvoiceCard() {
  const animation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <Link to="/details">
      <motion.div className="invoice-card" variants={animation}>
        <div className="transaction-details">
          <div className="id">#RT3080</div>
          <div className="date">Due 19 Aug 2021</div>
          <div className="name">Tanay Van</div>
        </div>
        <div className="transaction-status">
          <div className="amount">₹500</div>
          <div className="status">Paid </div>
        </div>
      </motion.div>
    </Link>
  );
}
