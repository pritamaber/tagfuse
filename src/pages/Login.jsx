import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { ThemeContext } from "../context/ThemeContext"; // Import your theme context

/**
 * Login Page - theme-aware, using Formik for handling and Firebase Auth
 */
export default function Login() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  // Themed classes for input and label
  const inputClass = `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
    theme === "dark"
      ? "bg-zinc-900 text-zinc-100 border-zinc-700 focus:ring-blue-600 placeholder-zinc-400"
      : "bg-white text-zinc-900 border-gray-300 focus:ring-blue-400 placeholder-gray-400"
  }`;
  const labelClass = `block text-sm font-medium mb-1 transition ${
    theme === "dark" ? "text-zinc-200" : "text-gray-700"
  }`;
  const buttonClass = `w-full text-sm px-3 py-2 rounded font-semibold transition ${
    theme === "dark"
      ? "bg-blue-700 text-white hover:bg-blue-800"
      : "bg-blue-100 text-blue-600 hover:bg-blue-200"
  }`;

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "At least 6 characters")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await signInWithEmailAndPassword(auth, values.email, values.password);
        navigate("/"); // redirect on success
      } catch (err) {
        setErrors({ password: "Invalid email or password" });
        setSubmitting(false);
      }
    },
  });

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Don't have an account?"
      linkText="Signup"
      linkTo="/signup"
    >
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={inputClass}
            placeholder="Enter your email"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-sm text-red-500">{formik.errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div>
          <label className={labelClass}>Password</label>
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={inputClass}
            placeholder="Enter your password"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-red-500">{formik.errors.password}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={buttonClass + " disabled:opacity-50"}
        >
          {formik.isSubmitting ? "Logging in..." : "Login"}
        </button>
      </form>
    </AuthLayout>
  );
}
