import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div classNme="container-fluid">
            <a className="navbar-brand" href="#">COURSE MODULE</a>
            <Link type="button" class="btn btn-outline-info" to="/addcourse">Add courses</Link>
            <Link className="btn btn-outline-danger mx-2" to="/">
              LogOut
            </Link>


        </div>
    </nav>
  )
}
