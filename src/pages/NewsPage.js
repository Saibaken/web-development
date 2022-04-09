import "../stylesheets/News.css";
import React, { useEffect, useState } from "react";
import NewsCard from "../bits/NewsCard";


function NewsPage() {
  const [id, setId] = useState(JSON.parse(localStorage.getItem("id")));

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")));
  }, []);

  if (id !== null)
    return (
      <div className="page-content">
        <h1 className="page-header">News</h1>
        <NewsCard video="true" />
        <NewsCard image="true" />
      </div>
    );
  else
      return(<h1>Go away</h1>);
}

export default NewsPage;
