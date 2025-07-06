import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

// Add icons to the library
library.add(faFacebookF, faGooglePlusG, faLinkedinIn);

const AuthForm = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}>
      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <form>
          <h1>Create Account</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
          </div>
          <span>or use your email for registration</span>
          <div className="infield">
            <input type="text" placeholder="Name" />
            <label className="underline"></label>
          </div>
          <div className="infield">
            <input type="email" placeholder="Email" />
            <label className="underline"></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" />
            <label className="underline"></label>
          </div>
          <button>Sign Up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <form>
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
            </a>
            <a href="#" className="social">
              <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
            </a>
          </div>
          <span>or use your account</span>
          <div className="infield">
            <input type="email" placeholder="Email" />
            <label className="underline"></label>
          </div>
          <div className="infield">
            <input type="password" placeholder="Password" />
            <label className="underline"></label>
          </div>
          <a href="#" className="forgot">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>

      {/* Overlay Section */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(false)}>
              Sign In
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost" onClick={() => setIsRightPanelActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>

      </footer>
    </div>
  );
};

export default AuthForm;
