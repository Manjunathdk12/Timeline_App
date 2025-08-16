import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = ({projectDetails}) => {
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} className="project-image" alt="project" />
      <div className="project-content">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar className="icon" />
          <p className="duration">{duration}</p>
        </div>
        <p className="description">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="visit"
          alt="purl"
        >
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
