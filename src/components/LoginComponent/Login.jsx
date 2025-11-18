import './Login.css';
import { useState ,useEffect } from 'react';
import axios from 'axios';
import { __userapiurl } from '../../API_URL';
import { useNavigate } from 'react-router-dom';
import Validate from '../ValidationComponent/login.validation';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';



 function Login() {
    const { setAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const [ email , setEmail ] = useState();    
  const [ password , setPassword ] = useState();
  const [error,setError] = useState({})
  const [ output , setOutput ] = useState();

  const [captcha, setCaptcha] = useState("");
const [userCaptchaInput, setUserCaptchaInput] = useState("");

// Function to generate random captcha
const generateCaptcha = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  setCaptcha(code);
};
useEffect(() => {
  generateCaptcha();
}, []);
  
  

  const handleSubmit=()=>{
    const userDetails={"email":email,"password":password};
    const userDetailsValidation={"email":email,"password":password,"userCaptchaInput":userCaptchaInput,"captcha":captcha};
    // Validate(userDetails)
    // console.log(userDetails)

      const validationErrors = Validate(userDetailsValidation);
  
  if (Object.keys(validationErrors).length > 0) {
    setError(validationErrors);
    // return;
  } else {
    setError({});
  }

    if (captcha !== userCaptchaInput) {
    setOutput("Captcha does not match");
    generateCaptcha(); // regenerate captcha
    return;
  }
    setOutput("");



    axios.post(__userapiurl+"login",userDetails).then((response)=>{
        console.log(response.data);
        const user = response.data.userDetails;
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("name",user.name);
        localStorage.setItem("email",user.email);
        localStorage.setItem("mobile",user.mobile);
        localStorage.setItem("address",user.address);
        localStorage.setItem("city",user.city);
        localStorage.setItem("gender",user.gender);
        localStorage.setItem("role",user.role);
        localStorage.setItem("info",user.info);
        
        setAuth({
        token: response.data.token,
        role: user.role,
        email: user.email
      });
        (user.role=="admin")?navigate("/admin"):navigate("/user");
      }).catch((error)=>{
        console.log(error)
        setEmail("");
        setPassword("");
        setOutput("Invalid user or please verify your account....");  
              generateCaptcha("");
      });
  };

  return (
    <>
    {/* About Start */}
<div class="container-xxl py-5">
    <div class="container">
        <div class="row g-5 align-items-center">
<div class="col-lg-12">
<h2 style={{'color':'orange'}} >{output}</h2>              
<h1 class="mb-4">Login <span class="text-primary text-uppercase">Here!!!</span></h1>
<form>
  <div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" value={email} onChange={(e)=>{ setEmail(e.target.value)}} />
        {error.email && <span style={{ color: "red" }}>{error.email}</span>}

  </div>
  <br/>
  <div class="form-group">
    <label for="pwd">Password:</label>
    <input type="password" class="form-control" value={password} onChange={(e)=>{ setPassword(e.target.value)}} />
        {error.password && <span style={{ color: "red" }}>{error.password}</span>}

  </div>
  <br/>


<br/>
<div className="form-group">
  <label>Captcha Code:</label>
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <input
      type="text"
      className="form-control"
      value={captcha}
      disabled
      style={{ width: '120px', fontWeight: 'bold', textAlign: 'center', backgroundColor: '#e9ecef', marginRight: '10px' }}
    />
    <button type="button" className="btn btn-sm btn-secondary" onClick={generateCaptcha}>⟳</button>
  </div>
</div>
<br/>
<div className="form-group">
  <label>Enter Captcha:</label>
  <input
    type="text"
    className="form-control"
    value={userCaptchaInput}
    onChange={(e) => setUserCaptchaInput(e.target.value)}
  />
          {error.userCaptchaInput && <span style={{ color: "red" }}>{error.userCaptchaInput}</span>}

</div>
<br/>


  <button type="button" class="btn btn-warning" onClick={handleSubmit}>Submit</button>


</form>    
</div>
        </div>
    </div>
</div>
{/* About End */}
    </>
  )
}

export default Login;








