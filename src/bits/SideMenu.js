import React from "react";
import SideLink from "./SideLink";
import classNames from "classnames";

export default function SideMenu(props) {
  const id = JSON.parse(localStorage.getItem("id"));

  const sideMenuClass = classNames("side-menu",
    {
      "side-menu-news": props.page === "news",
      "side-menu-chat": props.page === "chat",
      "side-menu-profile": props.page === "profile",
    })

  return (
    <ol className={sideMenuClass}>
      <SideLink className="side-link-text" text="News" link={"/" + id + "/news"} />
      <SideLink className="side-link-text" text="Chat" link={"/" + id + "/chat"} />
      <SideLink className="side-link-text" text="My profile" link={"/" + id + "/my_profile"} />
    </ol>
  );
}
