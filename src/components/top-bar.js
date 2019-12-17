import React, { useState } from "react"

export default () => {
  let [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <div className="top-bar">
      <div className="top-bar-title">
        <a href="/" className="logo">
          <div className="logo-text"><span className="logo-name">Kelli Borgonia</span> <span className="logo-comma">,</span> <span className="logo-job-title">Product Designer</span></div>
        </a>
        <div className="mobile-menu-button hide-for-medium" data-responsive-toggle="responsive-menu">
          <button onClick={toggleMenu} className="menu-icon" type="button" data-toggle></button>
        </div>
      </div>

      <ul className={showMenu ? "accordion menu is-active" : "accordion menu"} data-accordion-menu>
        <li className="nav-work"><a href="/">Work</a></li>
        <li className="nav-resume"><a href="/resume">Résumé</a></li>
      </ul>
    </div>
  )
}
