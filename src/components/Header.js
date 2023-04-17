import '../styles/header.css';
import React from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    return( 
        <nav>
            <div className="div-header">
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            </div>
        </nav>
    );
}