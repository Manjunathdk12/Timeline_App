import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = ({courseDetails}) => {
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <h1 className="course-title">{courseTitle}</h1>
      <div className="duration-container">
        <AiFillClockCircle className="icon" />
        <p className="duration">{duration}</p>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(tag => (
          <li className="tag-item" key={tag.id}>
            <p className="tag-name">{tag.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
