import React, { useState } from "react";
import { Link } from "react-router-dom";

const ToggleButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleLinkClick = () => {
    closeModal();
  };

  return (
    <>
      <button className="toggle-button" onClick={openModal}>
        <span className="toggle-button__bar" />
        <span className="toggle-button__bar" />
        <span className="toggle-button__bar" />
      </button>

      {isModalOpen && (
        <div className="modal open">
          <ul>
            <li>
              <Link to="/products" onClick={handleLinkClick}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact Page
              </Link>
            </li>
          </ul>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </>
  );
};

export default ToggleButton;
