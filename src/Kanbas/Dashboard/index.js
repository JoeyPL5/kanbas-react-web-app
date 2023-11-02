import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import db from "../Database";


function Dashboard(
  { courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }
  ) {
  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <button onClick={addNewCourse}>
        Add
      </button>
      <button onClick={updateCourse} >
        Update
      </button>
      <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">
            <h3>{course.name}</h3>
            <p>Course Number: {course.number}</p>
            <p>Start Date: {course.startDate}</p>
            <p>End Date: {course.endDate}</p>
            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>
            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard; 
