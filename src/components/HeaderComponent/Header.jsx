import "./Header.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Auth from "../AuthComponent/Auth";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {
  const [HeaderContent, setHeaderContent] = useState();
  const {auth} = useContext(AuthContext)
 
  
  useEffect(() => {
    const updateHeader = () => {
      
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role"); 
        const email = localStorage.getItem("email");

      const sharedTopBar = (
        <div className="row gx-0 bg-white d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-2 me-4">
              <i className="fa fa-envelope text-primary me-2"></i>
              <p className="mb-0">Welcome : {email}</p>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end"></div>
        </div>
      );

      const commonNavBrand = (
        <Link to="#" className="navbar-brand d-block d-lg-none">
          <h1 className="m-0 text-primary text-uppercase">Shipping War</h1>
        </Link>
      );

      const getNavItems = () => {
        if (role === "admin") {
          return (
            <>
              <Link className="nav-item nav-link active" to="/admin">Admin Home</Link>
              <Link className="nav-item nav-link" to="/manageusers">Manage Users</Link>
              <div className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" style={{ color: "#FDA117" }}>Manage Category</Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link className="dropdown-item" to="/addcategory">Add Category</Link>
                  <Link className="dropdown-item" to="/addsubcategory">Add SubCategory</Link>
                </div>
              </div>
              <div className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" style={{ color: "#FDA117" }}>Settings</Link>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link className="dropdown-item" to="/epadmin">Edit Profile</Link>
                  <Link className="dropdown-item" to="/cpadmin">Change Password</Link>
                </div>
              </div>
            </>
          );
        } else if (role === "user") {
          return (
            <>
              <Link className="nav-item nav-link active" to="/user">User Home</Link>
              <Link className="nav-item nav-link" to="/addproduct">Add Shipping Product</Link>
              <Link className="nav-item nav-link" to="/search">Search</Link>
            </>
          );
        } else { 
          return (
            <>
              <Link className="nav-item nav-link active" to="/">Home</Link>
              <Link className="nav-item nav-link" to="/about">About</Link>
              {/* <Link className="nav-item nav-link" to="/demo">Demo</Link> */}
              <Link className="nav-item nav-link" to="/service">Services</Link>
              <Link className="nav-item nav-link" to="/contact">Contact</Link>
              
              <Link className="nav-item nav-link" for="/register" to="/register">Register</Link>
            </>
          );
        }
      };

      const getLogoutOrLoginButton = () => {
        if (token) {
          return (
            <Link className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block" id="login" to="/logout">
              Logout <i className="fa fa-arrow-right ms-3 L-arrow"></i>
            </Link>
          );
        } else {
          return (
            <Link className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block " id="login" to="/login">
              Login <i className="fa fa-arrow-right ms-3  L-arrow"></i>
            </Link>
          );
        }
      };

      const header = (
        <div className="container-fluid bg-dark px-0">
          <div className="row gx-0">
            <div className="col-lg-3 bg-dark d-none d-lg-block">
              <Link to="#" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                <h2 className="m-0 text-primary text-uppercase">Shipping War</h2>
              </Link>
            </div>
            <div className="col-lg-9">
              {token ? sharedTopBar : null}
              <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                {commonNavBrand}
                <button
                  type="button"
                  className="navbar-toggler"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarCollapse"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                  <div className="navbar-nav mr-auto py-0">
                    {getNavItems()}
                  </div>
                  {getLogoutOrLoginButton()}
                </div>
              </nav>
            </div>
          </div>
        </div>
      );

      setHeaderContent(header);
    };

    updateHeader();
  }, [auth]);

  return (
    <>
      <Auth />
      {HeaderContent}
    </>
  );
}

export default Header;
