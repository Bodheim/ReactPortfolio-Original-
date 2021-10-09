import React from 'react';

export default function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1>
       */}

      <section
        className="
          d-flex
          flex-column
          align-items-center
          justify-content-center
          col-md-6
          offset-md-3
          mt-4
          pb-5
          extraFadeLight2
          curvedCorners
          customSizing
          linksContainer
        "
        id="aboutMe"
      >
        <h2 className="mt-3 mb-3">Abby Castelow</h2>
        {/* <img
          src="./assets/images/Picture1.jpg"
          class="img-fluid pt-2 mainImg curvedCorners"
          alt="Contact picture"
        /> */}

        <p className="col-8 pt-2 mt-4">
          sell myself here <br />
        </p>
      </section>
    </div>
  );
}
