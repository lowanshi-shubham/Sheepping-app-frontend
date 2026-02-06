// login.validation.js
export default function Validate(userDetails) {
  const errors = {};

  // Name
  if (!userDetails.name) {
    errors.name = "Name is required";
  } else if (userDetails.name.length < 2) {
    errors.name = "Name must be at least 2 characters";
  } else if (userDetails.name.length > 50) {
    errors.name = "Name must be maximum 50 characters";
  }

  // Email
  if (!userDetails.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
    errors.email = "Invalid email format";
  }

  // Password
  if (!userDetails.password) {
    errors.password = "Password is required";
  } else if (userDetails.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  // Mobile
  if (!userDetails.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!/^[6-9]\d{9}$/.test(userDetails.mobile)) {
    errors.mobile = "Mobile number must be 10 digits and start with 6-9";
  }

  // Address (optional but length check)
  if (userDetails.address) {
    if (
      userDetails.address.length < 5 ||
      userDetails.address.length > 150
    ) {
      errors.address =
        "Address must be between 5 and 150 characters";
    }
  }

  // City
  if (!userDetails.city) {
    errors.city = "City is required";
  }

  // Gender
  if (!userDetails.gender) {
    errors.gender = "Gender is required";
  }

  // Captcha (ONLY if you are actually sending it)
  if (userDetails.userCaptchaInput !== undefined) {
    if (!userDetails.userCaptchaInput) {
      errors.userCaptchaInput = "Captcha is required";
    } else if (
      userDetails.userCaptchaInput !== userDetails.captcha
    ) {
      errors.userCaptchaInput = "Captcha is incorrect";
    }
  }

  return errors;
}
