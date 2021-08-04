import React from "react"
import "./Layout.css"
import Logo from "../images/logo-white.svg";

export default function Layout({ children }) {
  return (
    <>
      <header class="logo">
        <img src={Logo} alt="Essence" />
      </header>
      <section>
       <div>{children}</div>
      </section>
    </>
  )
}