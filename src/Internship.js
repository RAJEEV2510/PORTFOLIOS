import React from 'react';

function Internship({text,title,image}) {
    return (
        <div className="InternShip">
            <img src={image}></img>
            <u><h4 className="intern-title">{title}</h4></u>
            <br></br>
            <p className="intern-text">{text}</p>    
        </div>
    );
}

export default Internship;