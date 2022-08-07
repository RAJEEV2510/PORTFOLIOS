import React from "react";
import { Line, Circle } from 'rc-progress';
  

  

  
function SkillSection({ skill,progress }) {
    const percentage=progress
  return (
    <div className="SkillSection">
     <div className="allprogress">   
     <div className="progress-bar">   
        
        <Circle percent="80" strokeWidth="2" strokeColor="#036fff" />
        <h3>{skill}</h3>
    </div>   
        <div className="progress-bar">   
        
          <Circle percent="80" strokeWidth="2" strokeColor="#036fff" />
          <h3>Dotnet</h3>
        </div>     <div className="progress-bar">

          <Circle percent="80" strokeWidth="2" strokeColor="#036fff" />
          <h3>Angular</h3>
        </div>
        <div className="progress-bar">

        <Circle percent="76" strokeWidth="3" strokeColor="#B023CC" />
        <h3>C++</h3>
    </div>   
     <div className="progress-bar">   
        
        <Circle percent="50" strokeWidth="3" strokeColor="#F5CB42" />
        <h3>  &emsp;C</h3>
    </div>   
     <div className="progress-bar">   
        
        <Circle percent="60" strokeWidth="3" strokeColor="#C9ABFA" />

        <h3>Python</h3>
    </div>
     <div className="progress-bar">   
        
        <Circle percent="60" strokeWidth="3" strokeColor="#FF6347" />

        <h3>React js</h3>
    </div>
     <div className="progress-bar">   
        
        <Circle percent="60" strokeWidth="4" strokeColor="#23CC2E" />

        <h3>Node js</h3>
    </div>
    </div>   
    </div>
  );
}

export default SkillSection;
