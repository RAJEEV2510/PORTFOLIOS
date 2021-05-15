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
                    <span> Inovative Developer and
                       
                    </span><br></br>
                    <span className="cyber" style={{color:"green"}}>
                           Cyber Security Enthusiastic
                    </span>

                </h1>
                <Typical
                steps={['"If you think You Are Safe', 1000, ' , Then You are Wrong"', 500,"-Rajeev Kumar",1500]}
                loop={Infinity}
                wrapper="h3"
                />
               
                <div className="icons">
                    <Link className="icon-holder">
                   <img src="https://camo.githubusercontent.com/0d8e111fa2d1f1743ca909becc6448691f0d2ee3935a2d3ad82d260f0b046311/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f652f65382f4861636b657245617274685f6c6f676f2e706e67" 
                   style={{height:"50px"}}
                    className="icon"
                   ></img>
                   </Link>
                   <Link className="icon-holder" to="/git">  <FontAwesomeIcon icon={faGit}   className="icon gh"></FontAwesomeIcon></Link>
                    <Link to="/linkedin" className="icon-holder" >   <FontAwesomeIcon icon={faLinkedinIn}   className="icon linkedin"></FontAwesomeIcon></Link>
                

                </div>
            </header>

             

        </div>
    )
}

export default Homepage
