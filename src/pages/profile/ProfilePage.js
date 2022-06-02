import "../../stylesheets/Profile.css";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import SideMenu from "../sidemenu/SideMenu";

export default function ProfilePage() {
  const navigate = useNavigate();

  const userName = JSON.parse(sessionStorage.getItem("userName"));

  const onLogOut = () => {
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("userName");
    navigate("/");
  };

  const [id, setId] = useState(JSON.parse(sessionStorage.getItem("id")));

  const { t } = useTranslation("pages");

  useEffect(() => {
    setId(JSON.parse(sessionStorage.getItem("id")));
  }, []);

  if (id !== null)
    return (
      <>
        <SideMenu page="profile" />
        <div className="page-content">
          <h1 className="page-header">{t("profile.my_profile")}</h1>
          <div className="profile-window">
            <div className="profile-info">
              <div className="profile-picture">
                <img
                  src="https://via.placeholder.com/300x300"
                  alt="profile"
                  className="profile-picture"
                />
              </div>
              <h3 className="profile-name">{userName}</h3>
            </div>
            <button className="log-out-button" onClick={onLogOut}>
              {t("profile.log_out")}
            </button>
          </div>
        </div>
      </>
    );
  else return <h1>Go away</h1>;
}
