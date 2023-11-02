import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard() {
  const [courses, setCourses] = useState(db.courses);
  
  const course = {
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  };
  const addNewCourse = () => {
    setCourses([...courses,
              { ...course,
                _id: new Date().getTime() }]);
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={addNewCourse} >
        Add
      </button>
      <div className="list-group">
        {courses.map((course) => ({courses.map((course) => (
          <div key={course._id} className="list-group-item">
            <h3>{course.name}</h3>
            <p>Course Number: {course.number}</p>
            <p>Start Date: {course.startDate}</p>
            <p>End Date: {course.endDate}</p>
          </div>
        ))}))}
      </div>
    </div>
  );
}
