import React from "react";
import '../styles/Footer.css';

function Footer() {
    return (
        <div className="footer">
            <h5>Website was made with ❤️ by <a onClick={() => window.open('https://github.com/EraOfCoding', 'blank')}>Yerassyl</a></h5>
            <h5>Bot was made with 🐍 by <a onClick={() => window.open('https://github.com/Dositan', 'blank')}>Dositan</a></h5>
        </div>
    )
}

export default Footer