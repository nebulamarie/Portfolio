import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <ul className="nav">
            <li>
                <Link to={'/home'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                 <Link to={'/work'}>Work</Link>
            </li>
            <li>
                <Link to={'/projects'}>Projects</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
        </ul>
    );   
}