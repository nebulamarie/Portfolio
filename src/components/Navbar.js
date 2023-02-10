import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <ul className="nav">
            <li>
                <Link to={'/'}>Home</Link>
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
            <li>
                <input
                placeholder="enter email"
                onChange={ (e) =>{
                    setSearchQuery(e.target.value);
                    console.log(e.target.value);
                }}
                Message ="Message:"
                onClick={ (e) =>{
                    setSearchQuery(e.target.value);
                    console.log(e.target.value);
                }}
                />
                <Link to ={`/user/${searchQuery}`}>Submit</Link>
            </li>
        </ul>
    );   
}