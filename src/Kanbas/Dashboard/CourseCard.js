import React from "react";

function CourseCard({ course }) {
  const startDate = new Date(course.startDate).toDateString();
  const endDate = new Date(course.endDate).toDateString();

  return (
    <div className="card" style={{ margin: "30px", width: "250px", border: "1px solid rgb(195, 195, 195)" }}>
      <div className="card-title" style={{ float: "right", marginRight: "5px" }}>
        {course.number}
      </div>
      <img
        src={course.image} 
        alt={course.name} 
        style={{ minWidth: "250px", maxHeight: "140px" }}
        className="card-img-top"
      />
      <div className="card-body">
        <h5 className="card-title">{course.name}</h5>
        <p className="card-text" style={{ fontSize: "xx-small" }}>
          Start Date: {startDate}
          <br />
          End Date: {endDate}
        </p>
      </div>
    </div>
  );
}

export default CourseCard;
