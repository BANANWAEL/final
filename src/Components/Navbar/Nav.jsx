import React, { Component, Fragment } from "react";
import styles from "./nav.module.css";
import img from "../../assets/logoo2.png"

export default class Navbar extends Component {
  render() {
    return (
      <Fragment>
        <div className={`${styles.navbar}`}>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <a
                className={`navbar-brand fs-1 ${styles.navbarbrand}`}
                href="/"
              >
                <img src={img} alt="" width={80} height={60} />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="/navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div
                  className={`navbar-nav ms-auto mb-2 mb-lg-0 fs-6 pt-2 fw-lighter ${styles.navbarnav}`}
                >
                  <a
                    className={`nav-link  active mt-2 mx-2 ${styles.navlink}`}
                    href="/home"
                  >
                    Home
                  </a>

                  <a
                    className={`nav-link  active mt-2 m-2 ${styles.navlink}`}
                    href="/ProfileForm"
                  >
                    Find talent
                  </a>

                  
                  <a
                    className={`nav-link  active mt-2 mx-2 ${styles.navlink}`}
                    href="/FreePro"
                  >
                    Find work
                  </a>

                  
                </div>
              </div>
            </div>
          </nav>
        </div>

        
      </Fragment>
    );
  }
}
