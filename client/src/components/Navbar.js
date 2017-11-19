import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import SavedPage from "./SavedPage";

const Navbar = () => (
  <Router>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
        <a
          class="navbar-brand"
          href="https://www.reddit.com/r/popular"
          target="_blank"
        >
          <i class="fa fa-reddit" aria-hidden="true" /> reddit.com/r/popular
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ">
              <button
                type="button"
                id="scrape-btn"
                class="btn btn-success d-inline-block"
              >
                <i class="fa fa-plus mr-2" aria-hidden="true" /> Get more
                articles!
              </button>
            </li>
            <li class="nav-item ">
              <Link to="/main">
                <a class="nav-link d-inline-block mx-4">
                  <i class="fa fa-bookmark mr-2" aria-hidden="true" /> Home{" "}
                </a>
              </Link>
            </li>
            <li class="nav-item ">
              <Link to="/saved">
                <a class="nav-link d-inline-block mx-4">
                  <i class="fa fa-bookmark mr-2" aria-hidden="true" /> Saved
                  Articles
                </a>
              </Link>
            </li>
          </ul>
          <a
            href="https://github.com/itkazmi814/MongoDB-Mongoose-Scraping"
            target="_blank"
            class="navbar-text"
          >
            <i class="fa fa-github mx-2" aria-hidden="true" />Check it out on
            Github
          </a>
        </div>
      </nav>

      <Route path="/main" component={MainPage} />
      <Route path="/saved" component={SavedPage} />
    </div>
  </Router>
);

export default Navbar;
