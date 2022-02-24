import "../App.css";
import React, { useState } from "react";
import classNames from "classnames";
import SwitchingButton from "../bits/SwitchingButton";
import NewsCard from "../bits/NewsCard";
import SideMenu from "../bits/SideMenu";

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
