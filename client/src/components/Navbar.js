import React from "react";
import { BrowserRouter as Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light col-12">
      <a class="navbar-brand" href="https://www.reddit.com/r/popular">
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
          <li class="nav-item " />
          <li class="nav-item ">
            <Link to="/main">
              <a class="nav-link d-inline-block mx-4">
                <i class="fa fa-home mr-2" aria-hidden="true" /> Home{" "}
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
          class="navbar-text"
        >
          <i class="fa fa-github mx-2" aria-hidden="true" />Check it out on
          Github
        </a>
      </div>
    </nav>
  </div>
);

export default Navbar;
