import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../layout/Navbar";

export default function Home() {
    const [courses,setCourses]=useState([]);

    const { course_id } = useParams();

    useEffect(()=>{
        loadCourses();
    },[]);

    const loadCourses=async()=>{
        const result=await axios.get("http://localhost:8080/courses")
        setCourses(result.data);
    }

    const deleteCourse = async (course_id) => {
        await axios.delete(`http://localhost:8080/course/${course_id}`);
        loadCourses();
      };

  return (
    <div>
        <Navbar></Navbar>
        <div className='container'>
        <h2 className="text-center m-4">Current Courses</h2>
        <div className='py-4'>
            <table className="table border shadow">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">course_id</th>
                    <th scope="col">capacity</th>
                    <th scope="col">code</th>
                    <th scope="col">credits</th>
                    <th scope="col">description</th>
                    <th scope="col">name</th>
                    <th scope="col">term</th>
                    <th scope="col">year</th>
                    <th scope="col">faculty</th>
                    <th scope="col">action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        courses.map((course,index)=>(
                            <tr>
                            <th scope="row" key={index}>{index+1}</th>
                            <td>{course.course_id}</td>
                            <td>{course.capacity}</td>
                            <td>{course.code}</td>
                            <td>{course.credits}</td>
                            <td>{course.description}</td>
                            <td>{course.name}</td>
                            <td>{course.term}</td>
                            <td>{course.year}</td>
                            <td>{course.faculty}</td>
                            <td>
                            <Link
                    className="btn btn-primary mx-2"
                    to={`/viewcourse/${course.course_id}`}
                  >
                    View</Link>

                                <Link className="btn btn-outline-success mx-2" 
                                to = {`/updatecourse/${course.course_id}`}
                                >update</Link>

                                <Link className="btn btn-outline-danger mx-2" onClick={()=>deleteCourse(course.course_id)}>delete</Link>
                            </td>
                            </tr>
                        ))
                    }
                   
                    
                </tbody>
            </table>
        </div>
    </div>

    </div>
    
    
  )
}
