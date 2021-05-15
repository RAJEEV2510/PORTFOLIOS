import React from 'react';
import About from  './mypic.jpg'
function ImageSection(props) {
    return (
        <div className="ImageSection">
            {/**Image */}
            <div className="img">
                <img src={About} ></img>
            </div>
            {/**About Info */}
            <div className="about-info">
                <h4> I am <span>Developer</span></h4>
                <p className="about-text">
                " If you wanna know how not secure you are, just take a look around. 
                Nothing's secure. Nothing's safe. 
                without those hackers we wouldn't solve the problems we need to solve, 
                especially security."
                </p>

                <div className="about-details">
                    <div className="name-details">
                           <p>Full Name</p>
                           <p>Rajeev</p>  
                    </div>
                    
                    <div className="name-details">
                           <p>AGE</p>
                           <p>21</p>  
                    </div>
                    <div className="name-details">
                           <p>Nationality</p>
                           <p> Indian</p>  
                    </div>
                    <div className="name-details" >
                           <p>Language</p>
                           <p>Hindi</p>  
                    </div>
                    <div className="name-details">
                           <p>Address</p>
                           <p>  Haryana</p>  
                    </div>
                    </div>
                <button className="btn">
                    <a href="https://drive.google.com/file/d/18OcUOpaKB2yWSVjNuZA8640d683F-iIQ/view"
                    style={{color:"white",textDecoration:"none"}}
                    >Download Cv</a>
                    </button>    
            </div>

            
        </div>
    );
} 

export default ImageSection;