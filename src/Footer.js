import React from "react";
import "./Footer.css";
import tmdbIcon from "./assets/tmdb.svg";

function Footer() {
  return (
    <div className="footer">
			<img src={tmdbIcon} />
			<p>
				<a href="#">@divya06 </a> | <a href="https://github.com/DIVYA-0605"> GitHub</a>
			</p>
		</div>
  )
}
export default Footer;