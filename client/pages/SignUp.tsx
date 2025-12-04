import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";

export default function SignUp() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      agreed: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (!form.agreed) {
      alert("You must agree to the terms");
      return;
    }
    console.log("Sign up submitted:", form);
    navigate("/");
  };

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-12">Sign in</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium mb-3">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black bg-white text-black focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-3">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black bg-white text-black focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-3">Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black bg-white text-black focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-lg font-medium mb-3">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black bg-white text-black focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <input
                type="checkbox"
                id="agree"
                checked={form.agreed}
                onChange={handleCheckboxChange}
                className="w-4 h-4 border border-black bg-white cursor-pointer"
                required
              />
              <label htmlFor="agree" className="text-base cursor-pointer">
                I agree to the terms
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 px-8 py-4 bg-black text-white text-lg font-medium hover:bg-gray-800 min-w-[200px]"
            >
              Send
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-black hover:underline font-medium"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
