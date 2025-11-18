// login.validation.js
export default function Validate(userDetails) {
  const errors = {};

  if(!userDetails.name){
  errors.name="name is required"
}else if(userDetails.name.length<2){
  errors.name="name length must be 2"
}else if(userDetails.name.length>50){
  errors.name="name length maximum 50"
}

  if (!userDetails.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
    errors.email = "Invalid email format";
  }

  if (!userDetails.password) {
    errors.password = "Password is required";
  } else if (userDetails.password.length < 5) {
    errors.password = "Password must be at least 6 characters";
  }

   if (!userDetails.userCaptchaInput) {
    errors.userCaptchaInput = "Capture is required";
  }else if(userDetails.userCaptchaInput!=userDetails.captcha){
    errors.userCaptchaInput="Capture is wrong"
  }

  if (!userDetails.mobile) {
  errors.mobile = "Mobile No. is required";
} else if (!/^[6-9]\d{9}$/.test(userDetails.mobile)) {
  errors.mobile = "Mobile number must be 10 digits and start with 6-9";
}


// if(!userDetails.address){
//   errors.address="address is required"
// }else if(userDetails.address.length>5 || userDetails.address.length<150){
//   errors.address="address must be 5 and maximum 150 character"
// }

if(!userDetails.city)
{
  errors.city="city is reuired "
}

if(!userDetails.gender){
  errors.gender="gender is reuired"
}
  return errors;
}

