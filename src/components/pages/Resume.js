import React from 'react';

export default function Resume() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div
        className="
        d-flex
        flex-row
        justify-content-center
        align-items-center
        pt-2
        mt-4
        pb-2
        mb-5
        mt-5
        linksContainer
        extraFadeLight
        row
        curvedCorners
        customSizing2
        "
        id="links"
      >
        <div className="d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center ms-5 me-5 mt-2 resumeIcons">
          <a
            href="./assets/ACastelowResume.docx.pdf"
            className="btn btn-success active btn-lg mt-4 resumeBtn"
            role="button"
            aria-pressed="true"
            target="no_blank"
            download
          >
            <i
              class="bi bi-file-earmark-arrow-down-fill"
              role="img"
              aria-label="Resume"
            ></i>
            {'\n'} Download {'\n'} Resume {'\n'}
          </a>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center ms-5 me-5 mt-2 resumeIcons">
          <h2>
            <a href="https://github.com/Bodheim" target="no_blank">
              <i class="bi-github" role="img" aria-label="GitHub"></i>
            </a>
          </h2>
        </div>

        <div className=" d-flex flex-column justify-content-center align-items-center col-md-10 col-12 text-center text-light ms-5 me-5 mt-2 resumeIcons">
          <a
            href="https://www.linkedin.com/in/abby-castelow/"
            target="no_blank"
          >
            <i class="bi bi-linkedin" role="img" aria-label="LinkedIn"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
