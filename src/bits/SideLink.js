import "../stylesheets/SideMenu.css";
import React from "react";
import { Link } from "react-router-dom";
import { MdPerson, MdEmail, MdFeed } from "react-icons/md";

export default function SideLink(props) {
  const id = JSON.parse(localStorage.getItem("id"));

  return (
    <li className="side-link">
      <Link to={props.link} className="side-link-text">
        {(() => {
          switch (props.link) {
            case "/" + id + "/news":
              return <MdFeed />;
            case "/" + id + "/chat":
              return <MdEmail />;
            case "/" + id + "/my_profile":
              return <MdPerson />;
            default:
              return <></>
          }
        })()}
        {props.text}
      </Link>
    </li>
  );
}
