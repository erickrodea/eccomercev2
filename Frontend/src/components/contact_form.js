import React, { useState } from "react";

const MyForm = () => {
  // State variables to keep track of form data, errors, and success message
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    userEmail: "",
    comments: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle form validation
  const handleValidation = (e) => {
    e.preventDefault();

    // Validation logic
    const newErrors = {};
    if (!formData.fName) {
      newErrors.fName = "First name is required";
    }
    if (!formData.lName) {
      newErrors.lName = "Last name is required";
    }
    if (!formData.userEmail) {
      newErrors.userEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.userEmail)) {
      newErrors.userEmail = "Invalid email address";
    }

    if (Object.keys(newErrors).length === 0) {
      // If no errors, update success message and clear errors

      setSuccessMessage("Form submitted successfully!");

      // Reset form data after successful submission
      setFormData({
        fName: "",
        lName: "",
        userEmail: "",
        comments: "",
      });

      // Clear success message after 3 seconds (adjust as needed)
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } else {
      // If there are errors, update the state with the error messages
      setSuccessMessage("");
      setErrors(newErrors);

      // Clear errors after 3 seconds (adjust as needed)
      setTimeout(() => {
        setErrors("");
      }, 3000);
    }
  };

  // Function to update form data as the user types
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    // Form section with a unique class for styling
    <section className="content">
      {/* Form with an id for identification and onSubmit event to trigger validation */}
      <form id="myForm" onSubmit={handleValidation}>
        {/* Input field for the first name with placeholder and onChange event */}
        <label htmlFor="fName">Your First Name</label>
        <input
          type="text"
          id="fName"
          placeholder="Erick"
          value={formData.fName}
          onChange={handleChange}
        />
        {/* Display error message for first name if it exists */}
        {errors.fName && <p>{errors.fName}</p>}

        {/* Input field for the last name with placeholder and onChange event */}
        <label htmlFor="lName">Your Last Name</label>
        <input
          type="text"
          id="lName"
          placeholder="Rodea"
          value={formData.lName}
          onChange={handleChange}
        />
        {/* Display error message for last name if it exists */}
        {errors.lName && <p>{errors.lName}</p>}

        {/* Input field for the email with placeholder and onChange event */}
        <label htmlFor="userEmail">Your Email</label>
        <input
          id="userEmail"
          placeholder="rodea.erick97@gmail.com"
          value={formData.userEmail}
          onChange={handleChange}
        />
        {/* Display error message for email if it exists */}
        {errors.userEmail && <p>{errors.userEmail}</p>}

        {/* Input field for comments with placeholder and onChange event */}
        <label htmlFor="comments">Comments</label>
        <input
          type="text"
          id="comments"
          placeholder="Your Concerns"
          value={formData.comments}
          onChange={handleChange}
        />

        {/* Submit button to trigger form validation */}
        <input type="submit" value="submit" />

        {/* Display success message if it exists */}
        {successMessage && <p>{successMessage}</p>}
      </form>
    </section>
  );
};

// Export the component for use in other parts of the application
export default MyForm;
