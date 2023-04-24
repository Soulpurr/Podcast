import { useRouter } from "next/router";
import { getCookie } from "cookies-next";
import React, { useEffect, useState } from "react";

function SignUp() {
  const [recieved, setrecieved] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user") || getCookie("user")) {
      router.push("/");
    }
  }, []);
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    email: "",
    isAdmin: false,
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
    console.log(formValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setrecieved(false);
    const errors = validateForm(formValues);
    if (Object.keys(errors).length === 0) {
      console.log(formValues);
      // Your API call or database integration logic here
      let data = await fetch("/api/signUp", {
        method: "POST",
        body: JSON.stringify(formValues),
      });
      let res = await data.json();
      setrecieved(true);
      router.push("/login");
      console.log(res);
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (values) => {
    const errors = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.fname.trim()) {
      errors.fname = "First name is required";
    }
    if (!values.lname.trim()) {
      errors.lname = "Last name is required";
    }
    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.password.trim()) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  return (
    <div className="min-h-screen  bg-gray-100 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-md w-[70%]">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="fname"
            >
              First Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.fname ? "border-red-500" : ""
              }`}
              type="text"
              id="fname"
              name="fname"
              placeholder="Your first name"
              value={formValues.fname}
              onChange={handleChange}
            />
            {formErrors.fname && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.fname}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="lname"
            >
              Last Name
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.lname ? "border-red-500" : ""
              }`}
              type="text"
              id="lname"
              name="lname"
              placeholder="Your last name"
              value={formValues.lname}
              onChange={handleChange}
            />
            {formErrors.lname && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.lname}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.email ? "border-red-500" : ""
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="Your email address"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.email}
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="isAdmin"
            >
              Are you an admin?
            </label>
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              id="isAdmin"
              name="isAdmin"
              checked={formValues.isAdmin}
              onChange={handleChange}
            />
            <span className="text-gray-700 font-normal">Yes, I am.</span>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                formErrors.password ? "border-red-500" : ""
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={formValues.password}
              onChange={handleChange}
            />
            {formErrors.password && (
              <span className="text-red-500 text-sm mt-1">
                {formErrors.password}
              </span>
            )}
          </div>
          <div className="flex justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <div
              className={`${
                recieved ? "hidden" : "flex"
              } justify-center items-center`}
            >
              <div className="w-8 h-8 border-4 border-t-4 border-red-800 rounded-full animate-spin"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
