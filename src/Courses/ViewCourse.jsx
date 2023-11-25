import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";
export default function ViewCourse() {
    const [course,setCourse]=useState({
        capacity:"",
        coursecode:"",
        credits:"",
        description:"",
        name:"",
        term:"",
        year:"",
        faculty:""
      })

  const { course_id } = useParams();

  useEffect(() => {
    loadCourse();
  }, []);

  const loadCourse = async () => {
    const result = await axios.get(`http://localhost:8080/course/${course_id}`);
    setCourse(result.data);
  };

  return (
    <div>
      <Navbar/>
      <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Course Details</h2>

          <div className="card">
            <div className="card-header">
              Details of course id : {course.course_id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b>
                  {course.name}
                </li>
                <li className="list-group-item">
                  <b>Capacity:</b>
                  {course.capacity}
                </li>
                <li className="list-group-item">
                  <b>Code:</b>
                  {course.coursecode}
                </li>
                <li className="list-group-item">
                  <b>faculty:</b>
                  {course.faculty}
                </li>
                <li className="list-group-item">
                  <b>Credits:</b>
                  {course.credits}
                </li>
                <li className="list-group-item">
                  <b>description:</b>
                  {course.description}
                </li>
                <li className="list-group-item">
                  <b>term:</b>
                  {course.term}
                </li>
                <li className="list-group-item">
                  <b>year:</b>
                  {course.year}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/home"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
    </div>
   
  );
}