import React from "react";
import Terminal from "terminal-in-react";
function Terminals({removepath}) {
  return (
    <div className="Terminal">
         <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'open-homepage': () => {
                removepath("rm")
                localStorage.setItem('path',"rm")
                window.open('/homepage', '_self')},
                'whoami':()=> "I am Rajeev Kumar a innovative developer and cyber security enthusitic student",
                 "downloadcv":()=>{window.open("https://drive.google.com/file/d/18OcUOpaKB2yWSVjNuZA8640d683F-iIQ/view","_blank")},
                 "list-projects":()=>{ return `
|----------- MY PROJECTS ---------------|   

    1.social-media
    2.online directory
    3.movie website
    4.online meeting calling
    5.youtube clone   
                 `},
                 "contactme":()=>`
    email:rajeevupadhyay608@gmail.com
    phone:8595134071
                 `,
                 "Locations":()=>{
                   return 'Gurugram HR'},
                 "Intern":()=>`
    1. MentorLive 2-months
    Role-Code & development  
            &&      
    2.darwinDigi-tech 1.5 months
    Role-Front Developer
                 `,
                 "tell-me-about-intern-work":()=>{

                    return `

    1. In the first internship i designed front end pages in 
    html ,css,javascript and  I built a tool which scrap data 
    from telegram group and send messages to large number of users
                        ***
    2. In 2nd internship I specifically work as front end
    developer where i worked in react js to developed 
    website.
                                        `},
    "skill":()=>`

    ____  _    _ _ _ 
    / ___|| | _(_) | |
    \___ \| |/ / | | |
     ___) |   <| | | |
    |____/|_|\_\_|_|_|

     mern     ****
     javascript
     c        **
     c++      ***
     python   ***
     firebase **
     mysql    ***
     mongodb  **        
    `                                    

                 }}
          descriptions={{
              'open-homepage': 'opens Homepage in secret manner',
              'whoami': 'shows a message',
              "skill":"this show my all skills",
              "contactme":"contact me",
              "list-projects":"listing my projects",
              "Intern":"show all my prior interns",
               "whoami":"introduce my self",
               "Locations":"Show my locations",
               "tell-me-about-intern-work":"this show my works"
        
          }}
          msg='Type help'
        />
    </div>
  );
}

export default Terminals;


