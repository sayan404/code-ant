import React from "react";
import githubIcon from "../assets/githubIcon.svg";
import bitbucketIcon from "../assets/bitBucketIcon.svg";
import azureIcon from "../assets/azureIcon.svg";
import gitlabIcon from "../assets/gitLabIcon.svg";
import "../styles/SaasTab.css";

const SaasTab = () => {
  return (
    <div>
      {" "}
      <div className="login-buttons">
        <button className="login-btn">
          <img
            src={githubIcon}
            alt="ant-code-logo"
            className="ant-code-logo-small"
          />
          <span>Sign in with GitHub</span>
        </button>

        <button className="login-btn">
          <img
            src={bitbucketIcon}
            alt="ant-code-logo"
            className="ant-code-logo-small"
          />
          <span>Sign in with Bitbucket</span>
        </button>

        <button className="login-btn">
          <img
            src={azureIcon}
            alt="ant-code-logo"
            className="ant-code-logo-small"
          />
          <span>Sign in with Azure Devops</span>
        </button>

        <button className="login-btn">
          <img
            src={gitlabIcon}
            alt="ant-code-logo"
            className="ant-code-logo-small"
          />
          <span>Sign in with GitLab</span>
        </button>
      </div>
    </div>
  );
};

export default SaasTab;
