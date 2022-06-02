import "../../stylesheets/News.css";
import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { useTranslation } from "react-i18next";
import SideMenu from "../sidemenu/SideMenu";

function NewsPage() {
  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));

  const { t } = useTranslation("pages");

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
  }, []);

  if (id !== null)
    return (
      <>
        <SideMenu page="news" />
        <div className="page-content">
          <h1 className="page-header">{t("news.news_header")}</h1>
          <NewsCard video="true" />
          <NewsCard image="true" />
        </div>
      </>
    );
  else return <h1>Go away</h1>;
}

export default NewsPage;
