import HeaderContext from '@src/context/header.context';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';

const Projects = () => {
  const [clicked, setClicked] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
  });
  const router = useRouter();
  const { setActivated } = useContext(HeaderContext);

  const handleRouting = () => {
    if (!clicked.first) {
      router.push('/work/inhoinfo');
    } else if (!clicked.second) {
      router.push('/work/muselive');
    } else if (!clicked.third) {
      router.push('/work/cmuwebapp');
    } else if (!clicked.fourth) {
      router.push('/work/casestudy');
    } else {
      router.push('/');
    }
    setClicked({
      first: false,
      second: false,
      third: false,
      fourth: false,
    });
    setActivated(true);
  };
  return (
    <div className="project">
      <ul>
        <li className="project-li">
          <div className="project-container">
            <a
              className={clicked.first ? 'triggerOutro' : ''}
              data-date="2022-2023"
              onClick={() => {
                setClicked({
                  first: false,
                  second: true,
                  third: true,
                  fourth: true,
                });
              }}
              onAnimationEnd={() => {
                handleRouting();
              }}
            >
              <span>inho.</span>
              <span>info</span>
            </a>
          </div>
        </li>
        <li className="project-li">
          <div className="project-container">
            <a
              className={clicked.second ? 'triggerOutro' : ''}
              data-date="2022-2023"
              onClick={() => {
                setClicked({
                  first: true,
                  second: false,
                  third: true,
                  fourth: true,
                });
              }}
              onAnimationEnd={() => {
                handleRouting();
              }}
            >
              <span>muse</span>
              <span>live</span>
            </a>
          </div>
        </li>
        <li className="project-li">
          <div className="project-container">
            <a
              className={clicked.third ? 'triggerOutro' : ''}
              data-date="2022-2023"
              onClick={() => {
                setClicked({
                  first: true,
                  second: true,
                  third: false,
                  fourth: true,
                });
              }}
              onAnimationEnd={() => {
                handleRouting();
              }}
            >
              <span>cmu webapp</span>
            </a>
          </div>
        </li>
        <li className="project-li">
          <div className="project-container">
            <a
              className={clicked.fourth ? 'triggerOutro' : ''}
              data-date="2023"
              onClick={() => {
                setClicked({
                  first: true,
                  second: true,
                  third: true,
                  fourth: false,
                });
              }}
              onAnimationEnd={() => {
                handleRouting();
              }}
            >
              <span>case study</span>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
