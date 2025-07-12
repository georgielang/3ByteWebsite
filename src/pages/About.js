
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

import { IoHome } from "react-icons/io5";

import "./About.css";


function About() {
    return (
        <div className="container">
            <div className="section">
                <Link to="/">
                    <button className="home-page-button">
                        <IoHome className="button-icon" /> 
                    </button>
                </Link>
            </div>

            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
            <div className="section"></div>
        </div>
    );
}

export default About;
