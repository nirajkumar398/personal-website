// src/Toast.js
import React from 'react';
import './toast.css';

const Toast = ({ message }) => {
  return (
    <div className="toast">
      {message}
    </div>
  );
};

export default Toast;
