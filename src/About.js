import React from 'react'
import ImageSection from './ImageSection'
import Internship from './Internship'
import SkillSection from './SkillSection'
import Title from './Title'

function About() {
    const text1=`In this internship I work as front-end developer in html css js and script writting in python`;
    const text2=`In this internship I work as front-end developer in react js and some api integration part`;
    return (
        <div className="AboutPage">
           
            <Title title={"About Me"} span={"About me"}></Title>
            <ImageSection></ImageSection>
            <Title title={"My Skills"} span={"My skills"}></Title>
            <SkillSection skill={"Javascript"} progress={"70%"}></SkillSection> 
            <Title title={"InternShips"} span={"Intern"}></Title>
            <div className="intership-section">   
                <Internship text={text1} title={"Mentor Live"} image={"https://thementor.live/wp-content/uploads/2021/03/The-Mentor.png"} ></Internship>
                <Internship text={text2} title={"Darwin Digitech"} image={"data:image/png;base64,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"}></Internship>
            </div>    
        </div>
    )
}

export default About