import React from "react";

function Portfolio() {
  return (
    <section>
      <h2>Portfolio</h2>
      <div className="projects">
        <div className="project">
          <img src="project_image_1" alt="Project 1" />
          <h3>Project 1</h3>
          <div>
            <a href="deployed_link_1" target="_blank" rel="noopener noreferrer">
              Deployed Link
            </a>
            <a href="github_link_1" target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </div>
        </div>
        {/* Repeat the above structure for other projects */}
      </div>
    </section>
  );
}

export default Portfolio;
