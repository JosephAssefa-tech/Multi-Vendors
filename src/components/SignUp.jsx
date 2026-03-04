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
    
    <div className="min-h-screen flex items-center justify-center  ">
          <div className="min-h-screen  bg-gray-100 px-4">

    </div>
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
      
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600  py-2.5 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>

          {message && (
            <p className="text-center text-sm mt-3">
              {message}
            </p>
          )}

        </form>
      </div>
    </div>
  )
}