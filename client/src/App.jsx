import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/UserView/Home'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './store/authSlice';
import LoadingSpinner from './components/ui/LoadingSpinner';
import CheckAuth from './components/common/check-auth';
import AuthLayout from './components/auth/AuthLayout';
import AuthLogin from './pages/auth/AuthLogin';
import AuthRegister from './pages/auth/AuthRegister';
import HomeLayout from './components/UserComponents/HomeLayout';
import AdminLayout from './components/AdminComponents/AdminLayout';
import AdminDashboard from './pages/AdminView/AdminDashboard';

function App() {


  const { isAuthenticated, user, isLoading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  // Global Loading Animation for all pages
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <LoadingSpinner /> {/* Add your custom loading spinner here */}
      </div>
    );
  }


  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        <Route path="/" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
          </CheckAuth>
        } />
        {/* auth */}
        <Route path="/auth" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <AuthLayout />
          </CheckAuth>
        }>
          <Route path="login" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLogin />
            </CheckAuth>
          } />
          <Route path="register" element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthRegister />
            </CheckAuth>
          } />
        </Route>


        {/* user  */}
        <Route path="/user" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>
            <HomeLayout />
          </CheckAuth>
        }>
          <Route path="home" element={<Home />} />
          

        </Route>

        {/* admin */}

        {/* admin */}
        <Route path="/admin" element={
          <CheckAuth isAuthenticated={isAuthenticated} user={user}>  
            <AdminLayout />
          </CheckAuth>
        }>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>

      
      </Routes>
    </div>
  )
}

export default App
