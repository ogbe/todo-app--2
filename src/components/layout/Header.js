import React from "react";
import { Link } from "react-router-dom";
const headerStyle = {
    background: "#333333",
    color: "#FFFFFF",
    textAlign: "center",
    padding: "10px"
}

const linkStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    textAlign: "center",
    textTransform: "capitalize"
}

export default function Header() {
    return(
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link to="/" style={linkStyle}>home</Link> | <Link to="/about" style={linkStyle}>about</Link>
        </header>
    )
}