import "./Register.css";
import { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../../API_URL";
import Validate from "../ValidationComponent/login.validation";

function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  // const [ password , setPassword ] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();
  const[error,setError]=useState({})

  const handleSubmit = () => {
    const userDetails = {
      name: name,
      email: email,
      // password: password,
      mobile: mobile,
      address: address,
      city: city,
      gender: gender,
    };
    //console.log(userDetails);
const validationErrors=Validate(userDetails)

     if (Object.keys(validationErrors).length > 0) {
    setError(validationErrors);
    // return;
  } else {
    setError({});
  }

    axios
      .post(__userapiurl + "save", userDetails)
      .then(() => {
        setName("");
        setEmail("");
        // setPassword("");
        setMobile("");
        setCity("");
        setAddress("");
        setOutput("User register successfully....");
      })
      .catch(() => {
        setOutput("User register failed....");
      });
  };

  return (
    <>
      {/* About Start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-12">
              <h2 style={{ color: "orange" }}>{output}</h2>
              <h1 class="mb-4">
                Register{" "}
                <span class="text-primary text-uppercase">Here!!!</span>
              </h1>
              <form>
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                          {error.name && <span style={{ color: "red" }}>{error.name}</span>}

                </div>
                <br />
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input
                    type="email"
                    class="form-control"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                          {error.email && <span style={{ color: "red" }}>{error.email}</span>}

                </div>
                <br />
                {/* <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={(e)=>{ setPassword(e.target.value)}} />
  </div> */}
                <br />
                <div class="form-group">
                  <label for="mobile">Mobile:</label>
                  <input
                    type="text"
                    class="form-control"
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value);
                    }}
                  />
                          {error.mobile && <span style={{ color: "red" }}>{error.mobile}</span>}

                </div>
                <br />
                <div class="form-group">
                  <label for="address">Address:</label>
                  <textarea
                    rows="5"
                    class="form-control"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  ></textarea>
                          {error.address && <span style={{ color: "red" }}>{error.address}</span>}

                </div>
                <br />
                <div class="form-group">
                  <label for="city">City:</label>
                  <select
                    class="form-control"
                    value={city}
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  >
                    <optgroup label="Madhya Pradesh">
                      <option>Select city</option>
                      <option>Indore</option>
                      <option>Bhopal</option>
                      <option>Ujjain</option>
                    </optgroup>
                    <optgroup label="Maharashtra">
                      <option>Mumbai</option>
                      <option>Pune</option>
                      <option>Nasik</option>
                    </optgroup>
                  </select>
                          {error.city && <span style={{ color: "red" }}>{error.city}</span>}

                </div>
                <br />
                <div class="form-group">
                  <label for="gender">Gender:</label>
                  &nbsp;&nbsp; Male{" "}
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  &nbsp;&nbsp;&nbsp; Female{" "}
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />

                </div>
      {error.gender && <span style={{ color: "red" }}>{error.gender}</span>}
                <br /> <br/>
                <button
                  type="button"
                  class="btn btn-warning"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
    </>
  );
}

export default Register;
