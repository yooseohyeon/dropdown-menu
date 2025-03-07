import React, { useState } from "react";
import './Dropdown.css'
import SubMeun from './SubMeun.jsx';

export default function TopMeun() {
  const [isOpen, setIsOpen] = useState(false);

  const viewDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <div className="meun-header">
        <h3>고객센터</h3>
        <button onClick={viewDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368" transform={isOpen ? "rotate(180)" : undefined}>
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
          </svg>
        </button>
      </div>
      {isOpen && <SubMeun />}
    </>
  );
}
