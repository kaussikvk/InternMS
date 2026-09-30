import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Components-Auth/Login';
import { ForgetPassword } from './Components-Auth/Forget Password';
import { OtpForgetPassword } from './Components-Auth/OTP Forget Password';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/forgot-password',
    element: <ForgetPassword />,
  },
  {
    path: '/otp',
    element: <OtpForgetPassword />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;