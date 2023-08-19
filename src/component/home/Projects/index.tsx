import HeaderContext from '@src/context/header.context';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import { lock, unlock } from 'tua-body-scroll-lock';

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
  }, [setActivated, setClicked]);
  const bodyRef = useRef<HTMLDivElement>(null);
  const { activateBodyLock } = useContext(HeaderContext);

  useEffect(() => {
    if (activateBodyLock) {
      lock(bodyRef.current as HTMLElement);
    } else {
      unlock(bodyRef.current as HTMLElement);
    }
  }, [activateBodyLock]);

  return (
    <div ref={bodyRef} className="project">
      <ul className="project-ul">
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
