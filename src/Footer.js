import React from "react";

const Footer = (props) => {
  return (
    <>
      <ul>
        {props.contact.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </>
  );
};

export default Footer;
