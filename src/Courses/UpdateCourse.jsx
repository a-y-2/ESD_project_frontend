import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useNavigate , useParams} from "react-router-dom";
import Navbar from "../layout/Navbar";

export default function UpdateCourse() {

  let navigate = useNavigate()

  const {course_id} = useParams();

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

  const{capacity,coursecode,credits,description,name,term,year,faculty} = course //destructuring assignment:accessing capacity is done directly rather than using course.capacity.

  const onInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCourse();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();//to prevent weird url on clicking submit button
    await axios.put(`http://localhost:8080/course/${course_id}`, course);
    navigate("/home");
  };

  const loadCourse = async () => {
    const result = await axios.get(`http://localhost:8080/course/${course_id}`);
    setCourse(result.data);
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container">
    <div className="row">
      <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
        <h2 className="text-center m-4">UPDATE COURSE</h2>

        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <label htmlFor="Capacity" className="form-label">Capacity</label>
            <input type={"text"} className="form-control" placeholder='enter the capacity' 
            name='capacity' value={capacity}
            onChange={(e) => onInputChange(e)}
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="Coursecode" className="form-label">Course code</label>
            <input type={"text"} className="form-control" placeholder='enter the course code' name='coursecode'
            value={coursecode}
            onChange={(e) => onInputChange(e)}
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="Credits" className="form-label">Credits</label>
            <input type={"text"} className="form-control" placeholder='enter the no. of credits' name='credits'
            value={credits}
            onChange={(e) => onInputChange(e)}
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="Description" className="form-label">Description</label>
            <input type={"text"} className="form-control" placeholder='course description' name='description'
            value={description}
            onChange={(e) => onInputChange(e)}
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="Name" className="form-label">Name</label>
            <input type={"text"} className="form-control" placeholder='enter the course name' name='name'
            value={name}
            onChange={(e) => onInputChange(e)}
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="Term" className="form-label">Term</label>
            <input type={"text"} className="form-control" placeholder='enter the term' name='term'
            value={term}
            onChange={(e) => onInputChange(e)}
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="Year" className="form-label">Year</label>
            <input type={"text"} className="form-control" placeholder='enter the year' name='year'
            value={year}
            onChange={(e) => onInputChange(e)}
            />            
          </div>
          <div className="mb-3">
            <label htmlFor="Faculty" className="form-label">Faculty</label>
            <input type={"text"} className="form-control" placeholder='enter the name of the faculty' name='faculty'
            value={faculty}
            onChange={(e) => onInputChange(e)}
            />            
          </div>
          
          <button type="submit" class="btn btn-success">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to="/home">
              Cancel
            </Link>
        </form>
      </div>
    </div>
  </div>
    </div>
    
  );
}
