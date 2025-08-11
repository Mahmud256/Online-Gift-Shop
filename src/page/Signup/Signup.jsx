import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SignupFormFields from "./SignupFormFields";

const Signup = () => {
  const { createUser } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", password: "", confirmPassword: ""
  });
  const [message, setMessage] = useState({ text: "", isMatch: true });
  const [loading, setLoading] = useState(false); // ✅ Loading state

  const handleSignup = async () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      return setMessage({ text: "Passwords do not match", isMatch: false });
    }

    try {
      setLoading(true); // ✅ Start loading
      const { user } = await createUser(email, password);
      const displayName = `${firstName} ${lastName}`;

      await updateProfile(user, { displayName });
      await axiosPublic.post("/users", { email: user.email, name: displayName });

      setMessage({ text: "Signup successful!", isMatch: true });
      navigate(location?.state || "/");
    } catch (error) {
      setMessage({ text: error.message, isMatch: false });
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white p-9 space-y-6">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Create Your OGS Account
        </h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <SignupFormFields formData={formData} setFormData={setFormData} />
          <button
            type="submit"
            disabled={loading} // ✅ Disable button while loading
            className={`w-full py-2 px-4 text-white bg-black rounded-md 
                        ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
            onClick={handleSignup}
          >
            {loading ? "Creating account..." : "Sign Up"} {/* ✅ Change text */}
          </button>
        </form>
        {message.text && (
          <p className={`${message.isMatch ? "text-green-500" : "text-red-500"} text-sm`}>
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Signup;
