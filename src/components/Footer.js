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
        footer
        bg-dark"
        style="background-color: #46B1C9;"
      >
        <span>
          <a href="https://github.com/Bodheim" clasName="github">
            Github
          </a>
        </span>
        <span>
          <a className="phone">(865) 809-8085</a>
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
