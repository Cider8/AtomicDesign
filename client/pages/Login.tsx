import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import AppLayout from "@/components/AppLayout";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", form);
    navigate("/");
  };

  return (
    <AppLayout>
      <div className="min-h-[calc(100vh-400px)] flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <h1 className="text-4xl font-bold mb-12">login in</h1>

          <form onSubmit={handleSubmit} className="space-y-8">
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
              <label className="block text-lg font-medium mb-3">Passwword</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black bg-white text-black focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="mt-8 px-8 py-4 bg-black text-white text-lg font-medium hover:bg-gray-800 min-w-[200px]"
            >
              Send
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-black hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </AppLayout>
  );
}
