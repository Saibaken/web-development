import React, { useEffect, useState } from "react";
import SideLink from "./SideLink";
import classNames from "classnames";

export default function SideMenu(props) {
  const [id, setId] = useState(JSON.parse(localStorage.getItem("id")));

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")));
  }, []);

  const sideMenuClass = classNames("side-menu",
    {
      "side-menu-news": props.page === "news",
      "side-menu-chat": props.page === "chat",
      "side-menu-profile": props.page === "profile"
    });

  if (id !== null)
    return (
      <ol className={sideMenuClass}>
        <SideLink className="side-link-text" text="News" link={"/news"} />
        <SideLink className="side-link-text" text="Chat" link={"/chat"} />
        <SideLink className="side-link-text" text="My profile" link={"/my_profile"} />
      </ol>
    );
  else
    return (<></>);
}
