import { useState } from 'react';
import './Login.css';

import graduationCap from '../assets/Auth/Graduation Cap.png';
import loginBg from '../assets/Auth/Login-BG Img.png';
import shieldBlue from '../assets/Auth/Approved sheild blue.png';
import shieldWhite from '../assets/Auth/Approved sheild white.png';
import uptrendArrow from '../assets/Auth/Uptrend Arrow.png';
import mailIcon from '../assets/Auth/mail.png';
import lockIcon from '../assets/Auth/Lock.png';
import eyeOpen from '../assets/Auth/Eye open.png';
import rightArrow from '../assets/Auth/Right Arrow.png';
import googleIcon from '../assets/Auth/Googleicon.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log({ email, password, keepSignedIn });
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="brand">
          <div className="brand-icon">
            <img src={graduationCap} alt="logo" />
          </div>
          <div className="brand-text">
            <h3>Internship Management System</h3>
            <p>Learn • Grow • Build Your Future</p>     
          </div>
        </div>

        <h1 className="hero-title">
          Connecting academic talent with
          <br />
          career-defining corporate internships
        </h1>
        <p className="hero-desc">
          The verified enterprise portal synchronizing university dean approvals, experiential learning hours,
          <br />
          and Fortune 500 mentorship agreements
        </p>

        <div className="stat-card stat-1"> 
          <h2>14,200+</h2>
          <span className="stat-label">ACTIVE INTERNS</span>
          <span className="stat-trend green">
            <img src={uptrendArrow} alt="" /> +24% YoY
          </span>
        </div>

        <div className="stat-card stat-2">
          <h2>98.4%</h2>
          <span className="stat-label">CREDIT VERIFIED</span>
          <span className="stat-trend blue">
            <img src={shieldBlue} alt="" /> Deans Approved
          </span>
        </div>

        <div className="stat-card stat-3"> /* active intern card */
          <h2>14,200+</h2>
          <span className="stat-label">ACTIVE INTERNS</span>
          <span className="stat-trend green">
            <img src={uptrendArrow} alt="" /> +24% YoY
          </span>
        </div>

        <img className="hero-img" src={loginBg} alt="Internship portal" /> /* illustration img */

        <div className="quote-card">
          <div className="quote-icon">
            <img src={shieldWhite} alt="" /> /*change*/
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
        <h2 className="welcome">Welcome Back</h2>
        <p className="welcome-sub">Manage your career journey</p>

        <label className="field-label email-label">Email Address</label>
        <div className="input-box">
          <img className="input-icon" src={mailIcon} alt="" />
          <input
            type="email"
            placeholder="Enter Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="password-row">
          <label className="field-label">Password</label>
          <a href="#" className="forgot">Forgot Password?</a>
        </div>
        <div className="input-box">
          <img className="input-icon" src={lockIcon} alt="" />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <img
            className="eye-icon"
            src={eyeOpen}
            alt="show password"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <label className="keep-signed">
          <input
            type="checkbox"
            checked={keepSignedIn}
            onChange={(e) => setKeepSignedIn(e.target.checked)}
          />
          <span>Keep me signed in</span>
        </label>

        <button type="submit" className="signin-btn">
          Sign In <img src={rightArrow} alt="" />
        </button>

        <div className="divider">
          <span>OR CONTINUE WITH</span>
        </div>

        <button type="button" className="google-btn">
          <img src={googleIcon} alt="" />
          Google
        </button>

        <p className="create-acc">
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

export default Login;
