import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 2rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Project = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  color: #646cff;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;

  &:hover {
    color: #535bf2;
  }
`;

function Portfolio() {
  return (
    <Section>
      <Title>Portfolio</Title>
      <ProjectsContainer>
        <Project>
          <ProjectImage
            src="./src/images/weather.png"
            alt="Weather Dashboard Screenshot"
          />
          <ProjectTitle>Weather Dashboard</ProjectTitle>
          <LinksContainer>
            <Link
              href="https://jrniles.github.io/Weather-Dashboard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Link
            </Link>
            <Link
              href="https://github.com/JRNiles/Weather-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repository
            </Link>
          </LinksContainer>
        </Project>
        {/* Repeat the above structure for other projects */}
      </ProjectsContainer>
    </Section>
  );
}

export default Portfolio;
