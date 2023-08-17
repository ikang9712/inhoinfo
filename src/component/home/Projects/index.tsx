import HeaderContext from '@src/context/header.context';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [clicked, setClicked] = useState({
    first: false,
    second: false,
    third: false,
  });
  const router = useRouter();
  const { setActivated } = useContext(HeaderContext);
  const handleRouting = () => {
    if (!clicked.first) {
      router.push('/work/inhoinfo');
    } else if (!clicked.second) {
      router.push('/work/muselive');
    } else if (!clicked.third) {
      router.push('/work/casestudy');
    } else {
      router.push('/');
    }
  };
  useEffect(() => {
    setActivated(false);
    setClicked({
      first: false,
      second: false,
      third: false,
    });
  }, []);

  const { activateBodyLock } = useContext(HeaderContext);
  const bodyRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (activateBodyLock) {
      console.log('disable body scroll');
      disableBodyScroll(bodyRef.current as HTMLElement);
    } else {
      console.log('enable body scroll');
      enableBodyScroll(bodyRef.current as HTMLElement);
    }
  }, [activateBodyLock]);

  return (
    <div ref={bodyRef} className="project">
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
              data-date="2023"
              onClick={() => {
                setClicked({
                  first: true,
                  second: true,
                  third: false,
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
