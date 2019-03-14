import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="container">
            <header>
                <div className="header-branding">
                    <h1 className="animated bounce">Tweetreact</h1>
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Sign Out</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Navigation;