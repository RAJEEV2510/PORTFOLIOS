import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGit} from '@fortawesome/free-brands-svg-icons'
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {Link} from 'react-router-dom'
import Typical from 'react-typical'
function Homepage() {
    return (
        <div className="HomePage">
 

            {/**header */}
            <header className="hero">
                {/** contains h1 p icons */}
                <h1 className="hero-text">
                    Hi, I m
                    <span> Software Engineer
                       
                    </span><br></br>
                    <span className="cyber" style={{color:"green"}}>
                        And Innotive Developer
                    </span>

                </h1>
                <Typical
                    steps={['"Knowledge is <  Imagination"', 4000, "-Rajeev Kumar", 4000]}
                loop={Infinity}
                wrapper="h3"
                />
               
                <div className="icons">

                    <a className="icon-holder" href="https://github.com/RAJEEV2510/">  <FontAwesomeIcon icon={faGit} className="icon gh"></FontAwesomeIcon></a>
                    <a herf="https://www.linkedin.com/in/rajeev-kumar-a23791193/" className="icon-holder" >   <FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin"></FontAwesomeIcon></a>
                

                </div>
            </header>

             

        </div>
    )
}

export default Homepage
