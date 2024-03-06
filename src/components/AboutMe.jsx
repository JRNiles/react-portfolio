import React from "react";
import styled from "styled-components";

const Section = styled.section`
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--primary-color); /* Use the primary color defined in your theme */
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Bio = styled.p`
  font-size: 1.2rem;
  color: var(--text-color); /* Use the text color defined in your theme */
`;

function AboutMe() {
  return (
    <Section>
      <Title>About Me</Title>
      <Content>
        <Image src="path_to_image" alt="Developer" />
        <Bio> Hi there! I'm Jaeger, a recent boot camp graduate with a passion for coding. I've been on this exciting journey for the past 6 months, diving deep into the world of web development. I'm eager to continue learning and growing as a developer, and I'm excited about the opportunities ahead!</Bio>
      </Content>
    </Section>
  );
}

export default AboutMe;
