import React from "react";
import "../styles/MainScreen.css";
import storageIcon from "../assets/storageIcon.svg";
import refreshIcon from "../assets/refreshIcon.svg";
import addIcon from "../assets/addIcon.svg";
import searchIcon from "../assets/searchIcon.svg";
import SideBar from "./SideBar";
import repositories from "../data/repoInfo";


function MainScreen() {
  return (
    <div className="app">
      <SideBar />
      <main className="content">
        <header className="header">
          <div className="actions">
            <div className="repo-tag">
              <h2>Repositories</h2>
              <span>33 total repositories</span>
            </div>
            <div className="action-buttons">
              {" "}
              <button className="btn refresh">
                <img
                  src={refreshIcon}
                  className="refresh-logo"
                  alt="refresh-logo"
                />
                Refresh All
              </button>
              <button className="btn add">
                <img src={addIcon} className="add-logo" alt="add-logo" /> Add
                Repository
              </button>
            </div>
          </div>
          <div class="search-container">
            <img src={searchIcon} class="search-logo" alt="search-logo" />
            <input
              type="text"
              placeholder="Search Repositories"
              class="search-input"
            />
          </div>
        </header>
        <div className="repository-list">
          {repositories.map((repo, index) => (
            <div className="repository-card" key={index}>
              <div className="repo-info">
                <p>{repo.name}</p>
                <span className="badge">{repo.visibility}</span>
              </div>
              <p>
                <span>
                  {repo.language} <span className="blue-dot"></span>
                </span>
                <span>
                  <img src={storageIcon} className="storage-icon" alt="logo" />
                  {repo.size} <span className="blue-dot"></span>
                </span>
                Updated {repo.updated}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
