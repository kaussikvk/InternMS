import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

import graduationCap from '../assets/Auth/Graduation Cap.png';
import loginBg from '../assets/Auth/Login-BG Img.png';
import shieldBlue from '../assets/Auth/Approved sheild blue.png';
import quoteTextshield from '../assets/Auth/Approved sheild white.png';
import uptrendArrow from '../assets/Auth/Uptrend Arrow.png';
import mailIcon from '../assets/Auth/mail.png';
import lockIcon from '../assets/Auth/Lock.png';
import eyeOpen from '../assets/Auth/Eye open.png';
import rightArrow from '../assets/Auth/Right Arrow.png';
import googleIcon from '../assets/Auth/Googleicon.png';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log({ email, password, keepSignedIn });
  };

  return (
    <div className="ims-login-page">
      
      <div className="ims-login-left">
        <div className="ims-title">
          <div className="ims-title-logo">
            <img src={graduationCap} alt="logo" />
          </div>
          <div className="ims-title-text">
            <h3>Internship Management System</h3>
            <p>Learn • Grow • Build Your Future</p>
          </div>
        </div>

        <h1 className="login-illustration-title"> 
          Connecting academic talent with
          <br />
          career-defining corporate internship
        </h1>
        <p className="login-illustration-desc">
          The verified enterprise portal synchronizing university dean approvals, experiential learning hours,
          <br />
          and Fortune 500 mentorship agreements
        </p>

        <div className="active-intern-card active-intern-card-1">
          <h2>14,200+</h2>
          <span className="active-intern-label">ACTIVE INTERNS</span>
          <span className="active-intern-trend green">
            <img src={uptrendArrow} alt="" /> +24% YoY
          </span>
        </div>

        <div className="active-intern-card active-intern-card-2">
          <h2>98.4%</h2>
          <span className="active-intern-label">CREDIT VERIFIED</span>
          <span className="active-intern-trend blue">
            <img src={shieldBlue} alt="" /> Deans Approved
          </span>
        </div>

        <div className="active-intern-card active-intern-card-3">
          <h2>14,200+</h2>
          <span className="active-intern-label">ACTIVE INTERNS</span>
          <span className="active-intern-trend green">
            <img src={uptrendArrow} alt="" /> +24% YoY
          </span>
        </div>

        <img className="login-illustration-img" src={loginBg} alt="Internship portal" />

        <div className="quote-card">
          <div className="quote-text-sheild-img">
            <img src={quoteTextshield} alt="" />
          </div>
          <div className="quote-text">
            <p>
              “Automated audit trails cut academic credit clearance time from 14
              days to under 48 hours.”
            </p>
            <span>
              Dr. Elena Vance — <b>Dean of Experiential Education, Northeastern Consortium</b>
            </span>
          </div>
        </div>
      </div>

      {/* ---------- RIGHT SIDE ---------- */}
      <form className="login-right" onSubmit={handleSignIn}>
        <h2 className="login-welcome-text">Welcome Back</h2>
        <p className="login-welcome-text-sub">Manage your career journey</p>

        <label className="ims-login-field-label email-label">Email Address</label>
        <div className="ims-login-input-box">
          <img className="ims-input-icon" src={mailIcon} alt="" />
          <input
            type="email"
            placeholder="Enter Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="login-password-row">
          <label className="login-field-label">Password</label>
          <button type="button" className="ims-login-forgot" onClick={() => navigate('/forgot-password')}>
  Forgot Password?
</button>
        </div>
        <div className="ims-login-input-box">
          <img className="ims-input-icon" src={lockIcon} alt="" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            className="ims-eye-icon"
            src={eyeOpen}
            alt="show password"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <label className="ims-login-keep-signed-checkbox">
          <input
            type="checkbox"
            checked={keepSignedIn}
            onChange={(e) => setKeepSignedIn(e.target.checked)}
          />
          <span>Keep me signed in</span>
        </label>

        <button type="submit" className="ims-login-signin-btn">
          Sign In <img src={rightArrow} alt="" />
        </button>

        <div className="divider-line">
          <span>OR CONTINUE WITH</span>
        </div>

        <button type="button" className="ims-login-google-btn">
          <img src={googleIcon} alt="" />
          Google
        </button>

        <p className="ims-login-create-acc">
          Don't have an account? <a href="#">Create Account</a>
        </p>

        <div className="footer-links">
          <a href="#">Help</a>
          <i></i>
          <a href="#">Privacy</a>
          <i></i>
          <a href="#">Terms</a>
        </div>
      </form>
    </div>
  );
}


