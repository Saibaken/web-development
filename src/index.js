import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';

// Файлы локализаций

// Ru
import login_ru from './translations/ru/login.json';
import registr_ru from './translations/ru/registr.json';
import pages_ru from './translations/ru/pages.json';
import side_menu_ru from './translations/ru/side_menu.json'

//En
import login_en from './translations/en/login.json';
import registr_en from './translations/en/registr.json';
import pages_en from './translations/en/pages.json';
import side_menu_en from './translations/en/side_menu.json'


// Инициализация i18next
i18next.init({
  interpolation: { escapeValue: false },
  lng: navigator.language || navigator.userLanguage,
  resources: {
    en: {
      login: login_en,
      registr: registr_en,
      pages: pages_en,
      side_menu: side_menu_en
    },
    ru: {
      login: login_ru,
      registr: registr_ru,
      pages: pages_ru,
      side_menu: side_menu_ru
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode >,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
