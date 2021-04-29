import React from 'react'
import '../styles/Info.css'

function Info(props) {
    return (
        <div ref={props.rf}>
            <h2>- It is also -</h2>
            <h5></h5>
            <div className="info">
                <div className="info-column">
                    <div id="convinient">
                        <h3>Convenient</h3>
                    </div>
                    <p>Convenient discord bot that has many features like calculator, image converter or color picker</p>
                </div>
                <div className="info-column">
                    <div id="open-src">
                        <h3>Open source</h3>
                    </div>
                    <p>It is open source on github and it is fully written in PYTHON. You can find Boribay repository <a onClick={() => window.open('https://github.com/Dositan/Boribay', 'blank')}>here</a></p>
                </div>
                <div className="info-column">
                    <div id="unique">
                        <h3>Unique</h3>
                    </div>
                    <p>Boribay is the unique bot that represents culture of nomad warriors</p>
                </div>
            </div>
        </div>
    )
}

export default Info