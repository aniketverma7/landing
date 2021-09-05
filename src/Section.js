import React from 'react'
import "./section.css"
const Section = ({limg,title,gameDesc,rimg,lcolor,dcolor}) => {
    const radient ={
        background: `radial-gradient(${lcolor},${dcolor})`
    }
    return (
        <div className="section-container" style={radient}>
            {
                limg&& <img src={limg} alt='limg'></img>
            }
            <div className="desc">
                <h2 className="title">{title}</h2>
                <p className="game-desc">{gameDesc}</p>
                <button className="play-btn">Play</button>
            </div>
            {
                rimg&& <img src={rimg} alt='rimg'></img>
            }
        </div>
    )
}

export default Section 
