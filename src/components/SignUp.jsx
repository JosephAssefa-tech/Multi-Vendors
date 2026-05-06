import { useState } from "react"
import Home from "./Home"
import { useNavigate } from "react-router-dom"

export default function SignUpForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const onGoogleLogin = () => {
  window.location.href = "https://your-api.com/auth/google";
};
const [isSucceded, setIsSucceded] = useState(true)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setIsSucceded(true)
    setMessage("")

    try {
      const response = await fetch("https://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        throw new Error("Something went wrong")
      }
     

      const data = await response.json()
     
      setMessage("Account created successfully ")
      
      console.log(data)

    } catch (error) {
      setMessage("Registration failed ")
      navigate("/home")
      console.error(error)
    } finally {
      setLoading(false)
      navigate("/home")
    }
  }

  return (
    
  <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        
      
        <h2 className="text-2xl font-bold text-center mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Start shopping with us
        </p>

     
        <button
          onClick={onGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border py-2.5 rounded-lg hover:bg-gray-50 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-400 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          {message && (
            <p className="text-center text-sm text-gray-600">
              {message}
            </p>
          )}
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Sign in
          </span>
        </p>
      </div>
    </div>
  )
}