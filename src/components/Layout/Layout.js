import React from "react";
import Aux from "../../hoc/Aux";

const Layout = props => {
  return (
    <Aux>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a class="navbar-brand" href="http://google.com">
            Burger App
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="http://google.com">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://google.com">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="http://google.com">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Aux>
  );
};

export default Layout;
