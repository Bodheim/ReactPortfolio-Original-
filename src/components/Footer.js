import React from 'react';

function Footer() {
  return (
    <>
      <footer
        className="
        d-flex
        justify-content-around
        align-items-center
        pt-4
        pb-4
        text-light
        text-center
        container-fluid
        navUL
        footer"
      >
        <span>
          <a href="https://github.com/Bodheim" clasName="github">
            Github
          </a>
        </span>
        <span>
          <h1 className="phone">(865) 809-8085</h1>
        </span>
        <span>
          <a href="mailto:abby.castelow@gmail.com" className="email">
            abby.castelow@gmail.com
          </a>
        </span>
      </footer>
    </>
  );
}

export default Footer;
