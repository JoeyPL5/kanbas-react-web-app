import db from "../../Kanbas/Database";
import { useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import Grades from "../Grades";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses({ courses }) {
  const { courseId } = useParams();
  if (!courses || courses.length === 0) {
    // Handle the case where courses data is not available or empty.
    return <div>Loading...</div>; // or display an error message
  }

  const course = courses.find((course) => course._id === courseId);

  if (!course) {
    // Handle the case where the course with courseId is not found.
    return <div>Course not found</div>; // or display an error message
  }
  return (
    <div>
      <h1>Course {course.name}</h1>
      <CourseNavigation />

      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor />}
            />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default Courses;
