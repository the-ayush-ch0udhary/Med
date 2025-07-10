// TrendModal.jsx
import React from "react";

const TrendModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // <- This line hides it by default

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default TrendModal;