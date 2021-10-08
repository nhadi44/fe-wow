import React from "react";
import logo from '../assets/img/icon.png';
import bookread from '../assets/img/readbook.png'

import { Container } from 'react-bootstrap'
import './style.css'

import { Link } from 'react-router-dom'
export default function ReadBook() {
    return (
        <div className="read-book">
            <div className="logo-wow">
                <Link to="/homepage">
                    <img src={logo} alt="logo" className="logo-read" />
                </Link>
            </div>
            <img src={bookread} alt="logo" className="book-page text-center" />
        </div>
    )
}