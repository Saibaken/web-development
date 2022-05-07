import "../stylesheets/Profile.css"
import React, { useEffect, useState } from "react";
import ProfileCard from "../bits/ProfileCard";
import { useTranslation } from "react-i18next";


export default function ProfilePage() {
  const [id, setId] = useState(JSON.parse(localStorage.getItem("id")));
  const { t } = useTranslation('pages'); 
  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")));
  }, []);

  if (id !== null)
    return (
      <div className="page-content">
        <h1 className="page-header">{t("profile.my_profile")}</h1>
        <ProfileCard />
      </div>
    );
  else
    return (<h1>Go away</h1>);
}
