import React from "react";
import "./styling/footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>copyright © {year}</p>
    </div>
  );
}

export default Footer;
