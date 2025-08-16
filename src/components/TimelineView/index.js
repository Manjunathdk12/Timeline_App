import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = ({timelineItemsList}) => (
  <div className="chrono-container">
    <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
    <Chrono
      items={timelineItemsList}
      mode="VERTICAL_ALTERNATING"
      cardHeight={250}
    >
      {timelineItemsList.map(item =>
        item.categoryId === 'COURSE' ? (
          <CourseTimelineCard key={item.id} courseDetails={item} />
        ) : (
          <ProjectTimelineCard key={item.id} projectDetails={item} />
        ),
      )}
    </Chrono>
  </div>
)

export default TimelineView
