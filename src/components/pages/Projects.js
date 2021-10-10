import React from 'react';

export default function Projects() {
  return (
    <div>
      <div
        class="
          d-flex
          flex-column
          justify-bo-center
          align-items-center
          pt-2
          ms-5
          me-5
        "
        id="projects"
      >
        <div
          class="
            justify-bod-center
            align-items-center
            row
            pt-4
            extraFadeLight
            curvedCorners
            customSizingProjects
          "
        >
          <h2 class="text-center pb-3">
            <strong>Projects</strong>
          </h2>
          <div class="card-container">
            <div class="card Venu">
              <div class="card-img-top">
                <a href="https://nickwojt.github.io/venu/" target="_blank">
                  <img src="./assets/images/venu.png" alt="Venu"></img>
                </a>
              </div>
              <div class="card-body">
                <h3 class="card-title">Venu-Concert Finder</h3>
                <p class="card-text">
                  <a
                    href="https://github.com/nickwojt/venu"
                    class="card-link"
                    target="_blank"
                  >
                    Github Repo
                  </a>
                  <br />
                  <a
                    href="https://nickwojt.github.io/venu/"
                    class="card-link"
                    target="_blank"
                  >
                    Live App
                  </a>
                </p>
              </div>
            </div>

            <div class="card Gathr">
              <div class="card-img-top">
                <a
                  href="https://shielded-mesa-10854.herokuapp.com/api/users/search/Coffee"
                  target="_blank"
                >
                  <img src="./assets/images/Gathr2.png" alt="Gathr"></img>
                </a>
              </div>
              <div class="card-body">
                <h3 class="card-title">Gathr Event Finder</h3>
                <p class="card-text">
                  <a
                    href="https://github.com/bcbridges/Gathr"
                    class="card-link"
                    target="_blank"
                  >
                    Github Repo
                  </a>
                  <br />
                  <a
                    href="https://shielded-mesa-10854.herokuapp.com/api/users/search/Coffee"
                    class="card-link"
                    target="_blank"
                  >
                    Live App
                  </a>
                </p>
              </div>
            </div>

            <div class="card NoteTaker">
              <div class="card-img-top">
                <a
                  href="https://murmuring-earth-99737.herokuapp.com/notes"
                  target="_blank"
                >
                  <img src="./assets/images/NoteTaker.png" alt="Venu"></img>
                </a>
              </div>
              <div class="card-body">
                <h3 class="card-title">Simple Note Taker</h3>
                <p class="card-text">
                  <a
                    href="https://github.com/Bodheim/NoteTaker"
                    class="card-link"
                    target="_blank"
                  >
                    Github Repo
                  </a>
                  <br />
                  <a
                    href="https://murmuring-earth-99737.herokuapp.com/notes"
                    class="card-link"
                    target="_blank"
                  >
                    Live App
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
