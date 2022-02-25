import "../stylesheets/News.css";
import React from "react";
import NewsCard from "../bits/NewsCard";


function NewsPage() {
  return (
    <>
    <div className="page-content">
      <h1 className="page-header">News</h1>
      <NewsCard video="true"/>
      <NewsCard image="true"/>
    </div>
    </>
  );
}

export default NewsPage;
