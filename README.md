CCBP Timeline

A responsive timeline web application built with React and react-chrono, showcasing the journey of CCBP 4.0 courses and projects.

<br/> <div align="center"> <img src="https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-output.gif" alt="ccbp timeline output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)"> </div>
📌 Features

Displays a timeline of Courses & Projects using react-chrono.

CourseTimelineCard:

Shows course details, description, duration.

Includes a clock icon from react-icons.

ProjectTimelineCard:

Displays project details with image preview.

Includes a calendar icon from react-icons.

Provides a Visit link to project URL.

Fully responsive design for all screen sizes.

📂 Project Structure
```
src/
│── components/
│   ├── TimelineView/
│   │   ├── index.js
│   │   └── index.css
│   ├── CourseTimelineCard/
│   │   ├── index.js
│   │   └── index.css
│   └── ProjectTimelineCard/
│       ├── index.js
│       └── index.css
│── App.js
│── index.js
```

🎨 Design Reference
Extra Small (Size < 576px) and Small (Size >= 576px)

Medium, Large and Extra Large (Size >= 768px)

⚙️ Installation & Setup
```
Clone the repository

git clone https://github.com/your-username/ccbp-timeline.git
cd ccbp-timeline
```

Install dependencies
```
npm install
```

Start the development server
```
npm start

```
Open http://localhost:3000 in your browser 🚀

🛠️ Technologies Used
```
React

react-chrono (for timeline)

react-icons (for clock & calendar icons)

CSS3 (responsive styling)
```
📝 Completion Instructions
```
Render timeline items using Chrono custom rendering.

Based on categoryId, render either CourseTimelineCard or ProjectTimelineCard.

items prop in Chrono must receive the timelineItemsList.

Accessibility-friendly design with semantic HTML.
```
🎯 Output Preview
<p align="center"> <img src="https://assets.ccbp.in/frontend/content/react-js/ccbp-timeline-component-structure-breakdown.png" alt="component structure breakdown" style="max-width:100%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)"> </p>

🎨 Resources
```
Colors

#171f46

#1e293b

#ffffff

#0967d2

#2b237c

Font

Roboto
```
📄 License
```
This project is licensed under the MIT License – you are free to use, modify, and distribute with attribution.
```
