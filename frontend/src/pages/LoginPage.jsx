import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import API from '../api/axios'


function LoginPage() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('')

  const [password, setPassword] = useState('')


  const handleLogin = async () => {

    try {

      const response = await API.post(
        'token/',
        {
          username,
          password
        }
      )

      localStorage.setItem(
        'token',
        response.data.access
      )

      navigate('/dashboard')

    } catch (err) {

      console.log(err)

      alert('Invalid Credentials')
    }
  }

  return (

    <div
  className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center bg-no-repeat relative"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=2070&auto=format&fit=crop')"
  }}
>

      <div className="grid md:grid-cols-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl max-w-6xl w-full">

        <div className="hidden md:flex flex-col justify-center p-16 bg-gradient-to-br from-emerald-500 to-emerald-700 text-white">

          <h1 className="text-5xl font-extrabold leading-tight">

            Breathe ESG

          </h1>

          <p className="mt-6 text-lg text-emerald-50 leading-relaxed">

            Enterprise-grade ESG emissions intelligence platform for ingestion, normalization, review and audit workflows.

          </p>

          <div className="mt-10 space-y-4">

            <div className="bg-white/10 p-4 rounded-2xl">
              ✅ Multi-source ESG ingestion
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              ✅ Automated emissions calculations
            </div>

            <div className="bg-white/10 p-4 rounded-2xl">
              ✅ Analyst review & approval workflows
            </div>

          </div>

        </div>

        <div className="bg-white p-12 flex flex-col justify-center">

          <div className="mb-10">

            <h2 className="text-4xl font-extrabold text-gray-900">

              Welcome Back

            </h2>

            <p className="text-gray-500 mt-3">

              Login to access your ESG dashboard.

            </p>

          </div>

          <div className="space-y-5">

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) =>
                  setUsername(e.target.value)
                }
                className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />

            </div>

            <div>

              <label className="text-sm font-semibold text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                className="w-full mt-2 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
              />

            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300"
            >

              Login to Dashboard

            </button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default LoginPage