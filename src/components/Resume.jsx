import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div>
        <p>Download my resume:</p>
        <a href="path_to_resume" download>Download Resume</a>
      </div>
      <div>
        <h3>Proficiencies:</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li></li>
          {/* Add more proficiencies*/}
        </ul>
      </div>
    </section>
  );
}

export default Resume;