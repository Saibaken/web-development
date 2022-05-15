import React, { useEffect, useState } from "react";
import SideLink from "./SideLink";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

export default function SideMenu(props) {
  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));
  const { t } = useTranslation('side_menu');

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
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
        <SideLink className="side-link-text" text={t("menu.news")} link={"/news"} />
        <SideLink className="side-link-text" text={t("menu.chat")} link={"/chat"} />
        <SideLink className="side-link-text" text={t("menu.my_profile")} link={"/my_profile"} />
      </ol>
    );
  else
    return (<></>);
}
