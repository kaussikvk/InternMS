import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './Components-Login/Login';
import { ForgetPassword } from './Components-Login/Forget Password';
import { OtpForgetPassword } from './Components-Login/OTP Forget Password';
import { ResetPassword } from './Components-Login/Reset Password';
import { PasswordResetSuccess } from './Components-Login/Password Reset Success';

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
  {
  path: '/reset-password',
  element: <ResetPassword />,
  },
  {
  path: '/reset-success',
  element: <PasswordResetSuccess />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;