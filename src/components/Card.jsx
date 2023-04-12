import React from "react";
import Avatar from "./Avatar";
import Contact from "./Contact";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        {/* "imgS" is a property which is picked up in Avatar.jsx */}
        <Avatar imgS={props.img} />
      </div>
      <div className="bottom">
        <Contact detail={props.tel} />
        <Contact detail={props.email} />
        {/* "Contact" from above is a component, "detail" = property  */}
        {/* <Contact information={props.tel} />
        <Contact information={props.email} /> */}
        {/* <p className="info">{props.information}</p>; */}
      </div>
    </div>
  );
}

export default Card;
