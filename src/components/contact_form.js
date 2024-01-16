// function validator() {
//   var validRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z.0-9-]+)*$/;

//   // Check if the first name is filled and valid
//   var fName = document.getElementById("fName").value;
//   if (fName.trim() === "") {
//     alert("Please fill in your first name.");
//     document.getElementById("fName").focus();
//     return false;
//   } else if (!/^[a-zA-Z]*$/g.test(fName)) {
//     alert("First name must be a valid name. Please enter actual characters.");
//     document.getElementById("fName").focus();
//     return false;
//   }

//   // Check if the last name is filled and valid
//   var lName = document.getElementById("lName").value;
//   if (lName.trim() === "") {
//     alert("Please fill in your last name.");
//     document.getElementById("lName").focus();
//     return false;
//   } else if (!/^[a-zA-Z]*$/g.test(lName)) {
//     alert("Last name must be a valid name. Please enter actual characters.");
//     document.getElementById("lName").focus();
//     return false;
//   }

//   // Check if the email is filled and valid
//   var userEmail = document.getElementById("userEmail").value;
//   if (userEmail.trim() === "") {
//     alert("Please fill in your email.");
//     document.getElementById("userEmail").focus();
//     return false;
//   } else if (!validRegex.test(userEmail.trim())) {
//     alert("Email is not valid. Please enter a valid email address.");
//     document.getElementById("userEmail").focus();
//     return false;
//   } else {
//     alert(userEmail + " your email was valid");
//   }

//   // Additional validation for other fields can be added here

//   // If all validations pass, you can submit the form
//   alert("Form validation passed. Submitting form...");
//   return true;
// }
