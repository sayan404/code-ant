import React from "react";
import "../styles/SelfHosted.css";
import gitLabIcon from "../assets/gitLabIcon.svg";
import keyIcon from "../assets/keyIcon.svg";
const SelfHostedTab = () => {
  return (
    <div className="self-hosted-container">
      <div className="login-buttons">
        <button className="login-btn ">
          <img
            src={gitLabIcon}
            alt="ant-code-logo"
            className="ant-code-logo-small"
          />
          <span>Self Hosted GitLab</span>
        </button>

        <div className="sso-button">
          <button className="login-btn sso-btn">
            <img
              src={keyIcon}
              alt="ant-code-logo"
              className="ant-code-logo-small"
            />
            <span>Sign in with SSO</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfHostedTab;
