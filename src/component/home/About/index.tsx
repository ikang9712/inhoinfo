import { IconContainer } from '@src/component/common/IconContainer';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const AboutSection = ({
  clicked,
  setClicked,
}: {
  clicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    if (clicked) {
      setInitialLoad(false);
    }
  });
  return (
    <div>
      <div
        className={
          initialLoad
            ? 'about-container invisible'
            : clicked
            ? 'about-container open'
            : 'about-container'
          // router.pathname == '/'
          //   ? clicked
          //     ? 'about-container visible'
          //     : initialLoad
          //     ? 'about-container initial-load'
          //     : 'about-container'
          //   : clicked
          //   ? 'about-container work visible'
          //   : initialLoad
          //   ? 'about-container work initial-load'
          //   : 'about-container work'
        }
      >
        <div
          className="about-go-back"
          onClick={() => {
            setClicked(false);
          }}
        >
          <IconContainer className="" iconName="hi-outline-x" />
        </div>
        <div className="about-content">
          <div className="about-content-title">
            <h1>
              Crafting dynamic, responsive, and engaging web experiences with a
              focus on animated, responsive, and interactive content.
            </h1>
            <p>Thank you for visiting!</p>
            <p>
              I am a full stack developer focused on designing interactive web
              enviornment. Feel free to contact me for any queries. :&#41;
            </p>
          </div>
          <div className="about-content-section">
            <div className="section-content">
              <h1>Programming Language</h1>
              <p>JavaScript/TypeScript</p>
              <p>HTML, CSS/SCSS</p>
              <p>Python, Dart, R</p>
              <p>SQL, Mongo, GraphQL</p>
            </div>
            <div className="section-content">
              <h1>Framework & Tools</h1>
              <p>React, Flutter, Three.js</p>
              <p>Figma</p>
            </div>
          </div>
          <div className="about-content-section">
            <div className="section-content">
              <h1>Education</h1>
              <p>Carnegie Mellon University</p>
              <p> Culver Academies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
