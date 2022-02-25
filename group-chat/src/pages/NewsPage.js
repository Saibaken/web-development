import "../App.css";
import React from "react";
import NewsCard from "../bits/NewsCard";


function NewsPage() {
  return (
    <>
    <div className="page-content">
      <h1 className="page-header">News</h1>
      <NewsCard/>
      <NewsCard/>
    </div>
    </>
  );
}

export default NewsPage;
