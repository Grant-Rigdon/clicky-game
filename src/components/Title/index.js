import React from "react";
import "./style.css";

function Title(props) {
  return(
    <nav className="navbar sticky-top navbar-primary bg-dark">
      <a className="navbar-brand" href="../../public/index.html">Clicky Game of Thrones</a>
      <span className="navbar-text">
        Score: {props.score} | Top Score: {props.top}
      </span>
    </nav>
  )
}

export default Title;
