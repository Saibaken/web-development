import "../../stylesheets/SideMenu.css";
import React from "react";
import { Link } from "react-router-dom";
import { MdPerson, MdEmail, MdFeed } from "react-icons/md";

export default function SideLink(props) {
  return (
    <li className="side-link">
      <Link to={props.link} className="side-link-text">
        {(() => {
          switch (props.link) {
            case "/news":
              return <MdFeed />;
            case "/chat":
              return <MdEmail />;
            case "/my_profile":
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
