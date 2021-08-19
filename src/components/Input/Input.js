import React from "react";

import "./Input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <div className="inputContainer">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <button type="button" onClick={(e) => sendMessage(e)}>
        Send
      </button>
    </div>
  );
};

export default Input;
