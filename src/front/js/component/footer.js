import React, { Component } from "react";
import "../../styles/home.css";

export const Footer = () => (
  <div className="fixed-bottom container-fluid">
    <div className="linea-azul-footer"></div>
    <footer className="py-3 text-center footerColor ">
      <div className="RR.SS pb-1">
        <a href="https://www.gmail.com" target="_blank">
          <i
            className="fa-regular fa-envelope textoTamañoGrande footerFontColor mx-2"
            alt="Correo"
          ></i>
        </a>
        <a href="https://facebook.com" target="_blank">
          <i
            className="fa-brands fa-facebook textoTamañoGrande footerFontColor mx-2"
            alt="Facebook"
          ></i>
        </a>
        <a href="https://www.linkedin.com/home" target="_blank">
          <i
            className="fa-brands fa-linkedin textoTamañoGrande footerFontColor mx-2"
            alt="Linkedin"
          ></i>
        </a>
        <a href="https://instagram.com" target="_blank">
          <i
            className="fa-brands fa-instagram textoTamañoGrande footerFontColor mx-2"
            alt="Instagram"
          ></i>
        </a>
        <a href="https://twitter.com" target="_blank">
          <i
            className="fa-brands fa-twitter textoTamañoGrande footerFontColor mx-2"
            alt="Twitter"
          ></i>
        </a>
      </div>
      <p className="p-0 m-0">
        <i className="fa-regular fa-copyright m-2" /> Todos los derechos
        reservados by{" "}
        <a href="http://www.4geeksacademy.com" target="_blank">
          4Geeks Academy
        </a>
      </p>
    </footer>
  </div>
);
