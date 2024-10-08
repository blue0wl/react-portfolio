import React from 'react'

const Navbar = () => {
    return (
        <div>
             <div class="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#portfolio"><strong>My Portfolio</strong></a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#About">About Me</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#portfolio">List of Projects</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#contact">Contact Me</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
        </div>
        </div>
    )
}

export default Navbar;