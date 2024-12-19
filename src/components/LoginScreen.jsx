import React, { useState } from "react";
import "../styles/LoginScreen.css";
import antCodeLogoLarge from "../assets/antCodeLogoLarge.svg";
import antCodeLogo from "../assets/logo.svg";

import styledCard from "../assets/styledCards.svg";
import SelfHostedTab from "./SelfHostedTab";
import SaasTab from "./SaasTab";
import { motion, AnimatePresence } from "framer-motion";
const LoginScreen = () => {
  const [activeTab, setActiveTab] = useState("SAAS");
  return (
    <div className="login-container">
      <div className="left-section">
        <div className="background-logo">
          <img
            src={antCodeLogoLarge}
            alt="ant-code-logo"
            className="ant-code-logo"
          />
        </div>
        <img src={styledCard} alt="styled-card" className="styled-card" />
      </div>

      {/* Right Section */}
      <div className="right-section">
        <div className="login-box">
          <div className="welcome-section">
            <div className="welcome-header">
              <img
                src={antCodeLogo}
                alt="ant-code-logo"
                className="ant-code-logo-small"
              />

              <span>Welcome to CodeAnt AI</span>
            </div>

            <div className="toggle-buttons">
              <button
                className={`toggle-btn ${activeTab === "SAAS" ? "active" : ""}`}
                onClick={() => setActiveTab("SAAS")}
              >
                SAAS
              </button>
              <button
                className={`toggle-btn ${
                  activeTab === "SELF_HOSTED" ? "active" : ""
                }`}
                onClick={() => setActiveTab("SELF_HOSTED")}
              >
                Self Hosted
              </button>
            </div>
          </div>
          {/* <div > */}
            <AnimatePresence mode="wait" className="tab-content">
              <motion.div
                key={activeTab}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
              >
                {activeTab === "SAAS" ? <SaasTab /> : <SelfHostedTab />}
              </motion.div>
            </AnimatePresence>
          {/* </div> */}
        </div>
        <p className="privacy-text">
          By signing up you agree to the{" "}
          <span className="bold-privacy-policy">Privacy Policy.</span>
        </p>
      </div>
    </div>
  );
};

export default LoginScreen;
