import { Routes, Route } from 'react-router-dom'
import MainPage from './components/screens/home/mainPage'
import LoginPage from './components/screens/log-in/loginPage'
import RegistrationPage from './components/screens/registration/registrationPage.jsx'
import MyTracks from './components/screens/myTracks/myTracks'
import Collections from './components/screens/collections/collections'
import NotFound from './components/screens/notFound/notFound'
import ProtectedRoute from './components/protectedRoutes'
const AppRoutes = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/mytracks" element={<MyTracks />} />
      </Route>

      <Route path="/collections" element={<Collections />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
