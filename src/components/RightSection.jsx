import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectsCard';
const RightSection = () => {
    return (
        <div className="right-section">
            <h2>Experience</h2>
            <ExperienceCard />
            <h2>Projects</h2>
            <ProjectCard />
        </div>
    )
}

export default RightSection;