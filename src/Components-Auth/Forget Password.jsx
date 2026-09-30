import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forget Password.css';
import graduationcap from '../assets/Auth/Forgotcap.png';
import illustration from '../assets/Auth/Forgotart.png';
import shield from '../assets/Auth/Shield.png';
import lockreset from '../assets/Auth/Lockreset.png';
import emailIcon from '../assets/Auth/Dropdown.png';
import phone from '../assets/Auth/Phone.png';
import rightarrow from '../assets/Auth/Sendarrow.png';
import backarrow from '../assets/Auth/Backarrow.png';

export function ForgetPassword() {
  const navigate = useNavigate();
  const [method, setMethod] = useState('email');

  const handleSend = (e) => {
    e.preventDefault();
    navigate('/otp');
  };

  return (
    <div className="forgot-page">
      <div className="forgot-panel">
        <div className="forgot-brand">
          <img className="forgot-logo" src={graduationcap} alt="Internship Management System" />
          <div className="forgot-brandtext">
            <h3 className="forgot-brandname">Internship Management System</h3>
            <p className="forgot-tagline">Learn • Grow • Build Your Future</p>
          </div>
        </div>

        <h1 className="forgot-title">
          Secure Account Recovery &
          <br />
          Identity Protection
        </h1>
        <p className="forgot-desc">
          Quickly regain access to your verified internship credentials, university approvals,
          <br />
          and active corporate placements.
        </p>

        <img className="forgot-art" src={illustration} alt="Account recovery" />

        <div className="forgot-note">
          <img className="forgot-noteicon" src={shield} alt="" />
          <div className="forgot-notetext">
            <p className="forgot-notebody">
              All password reset requests are cryptographically signed and logged according to institutional
              FERPA &amp; SOC-2 compliance standards.
            </p>
            <p className="forgot-notemeta">
              <span className="forgot-protocol">
                Campus Identity &amp; Access Management (IAM) Protocol
              </span>
              <span className="forgot-verified"> • Verified Institutional Security</span>
            </p>
          </div>
        </div>
      </div>

      <form className="forgot-form" onSubmit={handleSend}>
        <div className="forgot-lock">
          <img src={lockreset} alt="" />
        </div>

        <h2 className="forgot-heading">Forgot Password?</h2>
        <p className="forgot-subhead">
          Choose your preferred method to receive a one-time
          <br />
          verification code.
        </p>

        <p className="forgot-label">Verification Method</p>

        <button
          type="button"
          className={`forgot-method${method === 'email' ? ' forgot-selected' : ''}`}
          onClick={() => setMethod('email')}
        >
          <span className="forgot-methodicon">
            <img src={emailIcon} alt="" />
          </span>
          <span className="forgot-methodtext">
            <span className="forgot-methodtitle">Email Verification</span>
            <span className="forgot-methodinfo">a***n@g***.com</span>
          </span>
          <span className={`forgot-radio${method === 'email' ? ' forgot-checked' : ''}`} />
        </button>

        <button
          type="button"
          className={`forgot-method${method === 'sms' ? ' forgot-selected' : ''}`}
          onClick={() => setMethod('sms')}
        >
          <span className="forgot-methodicon forgot-phone">
            <img src={phone} alt="" />
          </span>
          <span className="forgot-methodtext">
            <span className="forgot-methodtitle">SMS / Text Message</span>
            <span className="forgot-methodinfo">Send code to +91 9****5678</span>
          </span>
          <span className={`forgot-radio${method === 'sms' ? ' forgot-checked' : ''}`} />
        </button>

        <button type="submit" className="forgot-send">
          Send Verification Code
          <img src={rightarrow} alt="" />
        </button>

        <button type="button" className="forgot-back" onClick={() => navigate('/login')}>
          <img src={backarrow} alt="" />
          Back to Login
        </button>
      </form>
    </div>
  );
}

export default ForgetPassword;
