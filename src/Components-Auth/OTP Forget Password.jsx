import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OTP Forget Password.css';
import graduationcap from '../assets/Auth/Otpcap.png';
import illustration from '../assets/Auth/Otpart.png';
import shield from '../assets/Auth/Shield.png';
import lock from '../assets/Auth/Encrypted.png';
import handshake from '../assets/Auth/Handshake.png';
import rightarrow from '../assets/Auth/Sendarrow.png';
const CODE_LENGTH = 6;

export function OtpForgetPassword() {
  const navigate = useNavigate();
  const inputs = useRef([]);
  const [digits, setDigits] = useState(() => Array(CODE_LENGTH).fill(''));
  const [seconds, setSeconds] = useState(55);

  useEffect(() => {
    if (seconds <= 0) return undefined;
    const timer = setTimeout(() => setSeconds((value) => value - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const clock = `00:${String(seconds).padStart(2, '0')}`;

  const updateDigit = (index, value) => {
    const next = digits.slice();
    next[index] = value;
    setDigits(next);
  };

  const handleChange = (index, event) => {
    const value = event.target.value.replace(/\D/g, '').slice(-1);
    updateDigit(index, value);
    if (value && index < CODE_LENGTH - 1) inputs.current[index + 1].focus();
  };

  const handleKeyDown = (index, event) => {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handlePaste = (event) => {
    const text = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, CODE_LENGTH);
    if (!text) return;
    event.preventDefault();
    const next = Array(CODE_LENGTH).fill('');
    text.split('').forEach((char, index) => {
      next[index] = char;
    });
    setDigits(next);
    inputs.current[Math.min(text.length, CODE_LENGTH) - 1].focus();
  };

  const handleVerify = (event) => {
    event.preventDefault();
    navigate('/login');
  };

  return (
    <div className="otp-page">
      <div className="otp-panel">
        <div className="otp-brand">
          <img className="otp-logo" src={graduationcap} alt="Internship Management System" />
          <div className="otp-brandtext">
            <h3 className="otp-brandname">Internship Management System</h3>
            <p className="otp-tagline">Learn • Grow • Build Your Future</p>
          </div>
        </div>

        <h1 className="otp-title">
          Verify Identity &amp; Enter
          <br />
          Security Code
        </h1>
        <p className="otp-desc">
          A 6-digit one-time password has been transmitted to your registered
          <br />
          institutional credentials.
        </p>

        <img className="otp-art" src={illustration} alt="Identity verification" />

        <div className="otp-note">
          <img className="otp-noteicon" src={shield} alt="" />
          <div className="otp-notetext">
            <p className="otp-notebody">
              “Credential change verified across university registrars, Dean approvals, and enterprise partner portals.”
            </p>
            <p className="otp-notemeta">
              <span className="otp-protocol">Enterprise IAM &amp; Security Operations</span>
              <span className="otp-verified"> — Zero Trust Protocol Active</span>
            </p>
          </div>
        </div>
      </div>

      <form className="otp-form" onSubmit={handleVerify}>
        <h2 className="otp-heading">Enter Verification Code</h2>
        <p className="otp-subhead">
          We’ve sent a 6-digit code to your registered Email and phone number. The code
          <br />
          will expire in <span className="otp-expire">09:59</span> minutes.
        </p>

        <div className="otp-codes">
          {digits.map((digit, index) => (
            <input
              key={index}
              ref={(node) => {
                inputs.current[index] = node;
              }}
              className="otp-digit"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={1}
              value={digit}
              aria-label={`Digit ${index + 1}`}
              onChange={(event) => handleChange(index, event)}
              onKeyDown={(event) => handleKeyDown(index, event)}
              onPaste={handlePaste}
            />
          ))}
        </div>

        <button type="submit" className="otp-verify">
          Verify and Continue
          <img src={rightarrow} alt="" />
        </button>

        <p className="otp-resend">
          <span className="otp-prompt">Didn’t receive the code?</span>
          <button type="button" className="otp-link" onClick={() => setSeconds(55)}>
            Resend
          </button>
          <span className="otp-timer">(in {clock})</span>
        </p>

        <div className="otp-divider" />

        <div className="otp-badges">
          <span className="otp-badge">
            <img className="otp-badgeicon" src={lock} alt="" />
            End-to-end encrypted
          </span>
          <span className="otp-badge">
            <img className="otp-badgeicon" src={handshake} alt="" />
            Secure handshake
          </span>
        </div>
      </form>
    </div>
  );
}

export default OtpForgetPassword;
