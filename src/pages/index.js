import React from "react"
import Link from "gatsby-link"

import globalStyles from "./css/global.css"
import menuStyles from "./css/menu.css"
import boxStyles from "./css/box.css"

export default () =>
    <div>
        <div className="container">
            <div className="heartContainer">
                <div className="heart"></div>
            </div>
            <div className="menuContainer">
                <Link to="/firstRound/" className="round">Runda Pierwsza</Link>
                <Link to="/secondRound/" className="round">Runda Druga</Link>
                <Link to="/thirdRound/" className="round">Runda Trzecia</Link>
                <Link to="/fourthRound/" className="round">Runda Koszerna</Link>
                <Link to="/finalRound/" className="round">Wielki Fianał</Link>
            </div>
        </div>
    </div>
