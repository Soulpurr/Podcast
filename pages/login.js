import { useEffect, useState } from "react";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Link from "next/link";

function Login() {
  const [recieved, setrecieved] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("user") || getCookie("user")) {
      router.push("/Podcast/trending");
    }
  }, []);

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setrecieved(true);
    const errors = validateForm(formValues);
    if (Object.keys(errors).length === 0) {
      let data = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(formValues),
      });
      let res = await data.json();
      console.log(res);
      if (res.success) {
        setrecieved(false);
        localStorage.setItem("user", res.token.toString());
        setCookie("user", res.token, { maxAge: 60 * 60 * 24 * 365 });
        localStorage.setItem("isAdmin", res.isAdmin);
        setCookie("user", res.token, { maxAge: 60 * 60 * 24 * 365 });
        toast("Logged In ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        if (res.isAdmin) {
          router.push("/admin/dashboard");
        } else {
          router.push("/Podcast/trending");
        }
      }
      console.log(formValues);
    } else {
      toast("🦄 Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setFormErrors(errors);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="m-auto sm:w-1/3 text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-900 to-purple-700">
        <form className="m-5 w-10/12" onSubmit={handleSubmit}>
          <h1 className="w-full text-4xl tracking-widest text-center my-6">
            Login
          </h1>
          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
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
              className="block text-gray-200 text-sm font-bold mb-2"
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
              Login
            </button>
            <div
              className={`${
                recieved ? "hidden" : "flex"
              } justify-center items-center`}
            >
              <div className="w-8 h-8 border-4 border-t-4 border-red-800 rounded-full animate-spin"></div>
            </div>
            <Link
              href={"/signUp"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SignUp
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
