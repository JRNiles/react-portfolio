import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin-top: 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const DownloadLink = styled.a`
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  background-color: #646cff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #535bf2;
  }
`;

const ProficienciesContainer = styled.div`
  justify-content: center;
  align-items: center; /* Center vertically */
  margin-top: 2rem;
`;

const ProficiencyColumn = styled.div`
  margin-right: 2rem;
`;

const ProficienciesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Proficiency = styled.li`
  margin-bottom: 0.5rem;
`;


function Resume() {
  return (
    <Section>
      <Title>Resume</Title>
      <div>
        <p>Download my resume:</p>
        <DownloadLink href="path_to_resume" download>Download Resume</DownloadLink>
      </div>
      <ProficienciesContainer>
        <div>
          <h3>Front-end Proficiencies:</h3>
          <ProficienciesList>
            <Proficiency>HTML</Proficiency>
            <Proficiency>CSS</Proficiency>
            <Proficiency>JavaScript</Proficiency>
            <Proficiency>JQuery</Proficiency>
            <Proficiency>responsive design</Proficiency>
            <Proficiency>React</Proficiency>
          </ProficienciesList>
        </div>
        <div>
          <h3>Back-end Proficiencies:</h3>
          <ProficienciesList>
            <Proficiency>APIs</Proficiency>
            <Proficiency>Node</Proficiency>
            <Proficiency>Express, Sequelize</Proficiency>
            <Proficiency>MongoDB, Mongoose</Proficiency>
            <Proficiency>REST</Proficiency>
            <Proficiency>GraphQL</Proficiency>
          </ProficienciesList>
        </div>
      </ProficienciesContainer>
    </Section>
  );
}
export default Resume;
