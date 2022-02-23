import "./App.css";
import React, { useState } from "react";
import classNames from "classnames";
import NewsPage from "./bits/NewsPage";
import SwitchingButton from "./bits/SwitchingButton";

function App() {
  return (
    <>
      <SwitchingButton />
      <NewsPage />
    </>
  );
}

export default App;
