
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

function Home() {
    return (
        <h1>
            Home Page
            <Link to="/about">
                <button>
                    About
                </button>
            </Link>
        </h1>
    );
}

export default Home;
