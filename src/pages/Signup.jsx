import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import { ThemeContext } from "../context/ThemeContext"; // Theme context

/**
 * Signup Page - allows new users to register using Firebase Auth, theme-aware
 */
export default function Signup() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  // Theme-aware classes
  const inputClass = `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 transition ${
    theme === "dark"
      ? "bg-zinc-900 text-zinc-100 border-zinc-700 focus:ring-green-600 placeholder-zinc-400"
      : "bg-white text-zinc-900 border-gray-300 focus:ring-green-400 placeholder-gray-400"
  }`;
  const labelClass = `block text-sm font-medium mb-1 transition ${
    theme === "dark" ? "text-zinc-200" : "text-gray-700"
  }`;
  const buttonClass = `w-full text-sm px-3 py-2 rounded font-semibold transition ${
    theme === "dark"
      ? "bg-green-700 text-white hover:bg-green-800"
      : "bg-green-100 text-green-700 hover:bg-green-200"
  }`;

  // Formik config
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(6, "Minimum 6 characters")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        navigate("/"); // ✅ Redirect after signup
      } catch (error) {
        setErrors({ email: "Email already in use" });
        setSubmitting(false);
      }
    },
  });

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Already have an account?"
      linkText="Login"
      linkTo="/login"
    >
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        {/* Email Field */}
        <div>
          <label className={labelClass}>Email</label>
          <input
            type="email"
            name="email"
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

        {/* Password Field */}
        <div>
          <label className={labelClass}>Password</label>
          <input
            type="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className={inputClass}
            placeholder="Create a password"
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-sm text-red-500">{formik.errors.password}</p>
          )}
        </div>

        {/* Confirm Password Field */}
        <div>
          <label className={labelClass}>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
            className={inputClass}
            placeholder="Re-enter your password"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className={buttonClass + " disabled:opacity-50"}
        >
          {formik.isSubmitting ? "Creating account..." : "Signup"}
        </button>
      </form>
    </AuthLayout>
  );
}
