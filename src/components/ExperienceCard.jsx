import experience from "../experience.json";
import React from "react";
const ExperienceCard = () =>{
    return(
      <div className="experience-container">
        {experience.map((exp, index) => (
          <div key={index} className="experience-card">
            <h2>{exp.name}</h2>
            <p><i>{exp.timeline}</i></p>
            <p>{exp.description}</p>
            <a href={exp.link} target="blank">Company Link</a>
          </div>
        ))}
      </div>
    )
}

export default ExperienceCard;