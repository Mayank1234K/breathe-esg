import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()

  const logout = () => {

    localStorage.removeItem('token')

    navigate('/')
  }

  return (

    <nav className="bg-gradient-to-r from-slate-950 via-gray-900 to-slate-950 border-b border-gray-800 shadow-2xl sticky top-0 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <div>

          <h1 className="text-3xl font-extrabold text-white tracking-wide">
            Breathe ESG
          </h1>

          <p className="text-gray-400 text-sm mt-1">
            Enterprise Emissions Intelligence Platform
          </p>

        </div>

        <div className="flex gap-4">

          <Link to="/dashboard">

            <button className="bg-white/10 hover:bg-white/20 text-white border border-gray-700 px-5 py-2 rounded-xl transition-all duration-300">

              Dashboard

            </button>

          </Link>

          <Link to="/upload">

            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-xl transition-all duration-300 font-semibold shadow-lg">

              Upload Data

            </button>

          </Link>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-xl transition-all duration-300 font-semibold shadow-lg"
          >

            Logout

          </button>

        </div>

      </div>

    </nav>
  )
}

export default Navbar