import React from "react"
import Link from "gatsby-link"

import styles from "./css/global.css"

export default () =>
    <div>
        <div className="heartContainer">
            <div className="heart"></div>
        </div>
        <div className="container">
            <Link to="/firstRound/" className="round">Runda Pierwsza</Link>
            <Link to="/secondRound/" className="round">Runda Druga</Link>
            <Link to="/thirdRound/" className="round">Runda Trzecia</Link>
            <Link to="/fourthRound/" className="round">Runda Koszerna</Link>
            <Link to="/finalRound/" className="round">Wielki Fianał</Link>
        </div>
    </div>
