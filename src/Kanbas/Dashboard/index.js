import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import CourseCard from "./CourseCard";
import data from "../Database"; 

function Dashboard() {
  const { courses } = data;

  return (
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-md-9">
          <h1 className="black-title">
            <span style={{ fontWeight: "normal" }}>Dashboard</span>
          </h1>
          <hr />
          <h2 className="black-title">
            <span style={{ fontWeight: "normal", marginLeft: "25px" }}>
              Published Courses ({courses.length})
            </span>
          </h2>
          <hr style={{ marginLeft: "25px" }} />
          <div className="d-flex flex-row flex-wrap" style={{ marginLeft: "25px" }}>
            {courses.map((course) => (
              <Link to={`/Kanbas/Courses/${course._id}`} key={course._id}>
                <CourseCard course={course} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
