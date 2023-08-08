import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Home: NextPage = () => {
  const [clicked, setClicked] = useState({
    first: false,
  });
  const router = useRouter();

  return (
    <div className="home">
      <div className="background"></div>
      <header>
        <a className="logo">
          <span>Inho</span>
          <span>Kang</span>
        </a>
        <div className="info">
          <div className="left">
            <ul>
              <li>Studio of Inho Kang</li>
              <li>Web Developer</li>
            </ul>
            <ul>
              <li>South Korea</li>
              <li className="email">ikang9712@gmail.com</li>
            </ul>
            <ul>
              <li> about </li>
              <li> journal </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <a>instagram</a>
              </li>
              <li>
                <a>linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <div className="project">
        <ul>
          <li className="project-li">
            <div className="project-container">
              <a
                className={clicked.first ? 'isSelected' : ''}
                data-date="2022-2023"
                onClick={() => {
                  setClicked({
                    first: true,
                  });
                }}
                onAnimationEnd={() => {
                  setClicked({
                    first: false,
                  });
                  console.log('animation ended');
                  // router.push('/demo/paintbox');
                  // navigate('/demo/paintbox');
                }}
              >
                <span>muse</span>
                <span>live</span>
              </a>
            </div>
          </li>
          <li className="project-li">
            <div className="project-container">
              <a data-date="2022">
                <span>inho.</span>
                <span>info</span>
              </a>
            </div>
          </li>
          <li className="project-li">
            <div className="project-container">
              <a>
                <span>Test</span>
              </a>
            </div>
          </li>
          <li className="project-li">
            <div className="project-container">
              <a>
                <span>Test 3</span>
              </a>
            </div>
          </li>
          <li className="project-li">
            <div className="project-container">
              <a>
                <span>Test 3</span>
              </a>
            </div>
          </li>
          <li className="project-li">
            <div className="project-container">
              <a>
                <span>Test 3</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
