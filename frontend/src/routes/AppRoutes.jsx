import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import LoginPage from '../pages/LoginPage'

import DashboardPage from '../pages/DashboardPage'

import UploadPage from '../pages/UploadPage'


function AppRoutes() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<LoginPage />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />

        <Route
          path="/upload"
          element={<UploadPage />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes