import React from "react";

function CV() {
  return (
    <section className="container">
      <h2 className="top-title">CV</h2>
      <hr></hr>

      <div>
        <div className="mt-5">
          <h2 className="top-title">Chidi Nwanneka</h2>
          <ul>
            <li>
              Core competencies in front-end web
              development, responsive design and managing integrations.
            </li>
          </ul>

          <p className="mt-5">
            <a href="https://www.linkedin.com/in/chidinwanneka/">
              <img
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="inkedIn"
              />
            </a>
          </p>

          <a
            href="https://github.com/cnwanneka/react-portfolio/raw/main/src/documents/Chidi%20Nwanneka_FrontEnd%20Developer_CV.pdf"
            className="link"
          >
            Download CV
          </a>
        </div>
      </div>

      <div className="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap), JavaScript, jQuery, React.js<br />
            Node.js, APIs, Templating.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default CV;