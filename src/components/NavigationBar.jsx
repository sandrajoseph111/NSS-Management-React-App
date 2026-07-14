import React from 'react'

const NavigationBar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          background: "linear-gradient(90deg, #11998e, #38ef7d)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        }}
      >
        <div className="container-fluid">

          <a
            className="navbar-brand fw-bold text-white"
            href="/"
            style={{
              fontSize: "24px",
              letterSpacing: "1px"
            }}
          >
            🌿 NSS Management App
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">

              <a
                className="nav-link text-white fw-semibold mx-2"
                href="/"
                style={{
                  borderRadius: "8px",
                  padding: "8px 15px",
                  transition: "0.3s"
                }}
              >
                ➕ Add Volunteer
              </a>

              <a
                className="nav-link text-white fw-semibold mx-2"
                href="/vi"
                style={{
                  borderRadius: "8px",
                  padding: "8px 15px",
                  transition: "0.3s"
                }}
              >
                👥 View Volunteers
              </a>

            </div>
          </div>

        </div>
      </nav>
    </div>
  )
}

export default NavigationBar