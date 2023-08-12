import HeaderContext from '@src/context/header.context';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import AboutSection from '../About';

const Header = () => {
  const { activated, setActivated } = useContext(HeaderContext);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const router = useRouter();
  const handleScroll = () => {
    if (router.pathname != '/') {
      if (document.body.scrollHeight - window.scrollY < 1200) {
        setHideHeader(false);
      } else if (window.scrollY > 300) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }
    } else {
      setHideHeader(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        handleScroll();
      });
    };
  }, []);
  return (
    <div>
      <div
        className={router.pathname == '/' ? 'background' : 'background work'}
      ></div>
      <header className="home-header">
        <a
          key={'logo'}
          className={
            aboutClicked
              ? 'logo toTop aboutClicked'
              : router.pathname == '/'
              ? activated
                ? 'logo toBottom'
                : 'logo'
              : activated
              ? 'logo toTop'
              : 'logo work'
          }
          onClick={() => {
            router.push('/');
          }}
        >
          <span>Inho</span>
          <span>Kang.</span>
        </a>
        <div
          className={router.pathname == '/' ? 'info' : 'info work'}
          style={
            hideHeader
              ? {
                  opacity: 0,
                  pointerEvents: 'none',
                  transitionDuration: '1s',
                }
              : {
                  opacity: 1,
                  pointerEvents: 'auto',
                  transitionDuration: '1s',
                }
          }
        >
          <div className="left">
            <ul>
              <li>Kang Inho Studio</li>
              <li>Web Developer</li>
            </ul>
            <ul>
              <li>South Korea</li>
              <li className="email">ikang9712@gmail.com</li>
            </ul>
            <ul
              className={
                aboutClicked
                  ? 'about toTop aboutClicked'
                  : router.pathname == '/'
                  ? activated
                    ? 'about toBottom'
                    : 'about'
                  : activated
                  ? 'about toTop'
                  : 'about work'
              }
              onClick={() => {
                setActivated(true);
                if (!aboutClicked) {
                  setAboutClicked(true);
                } else {
                  setAboutClicked(false);
                }
              }}
            >
              <li> about </li>
            </ul>
          </div>
          <div className="right">
            <ul>
              <li>
                <span>01</span>
                <a>instagram</a>
              </li>
              <li>
                <span>02</span>
                <a>linkedin</a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <AboutSection clicked={aboutClicked} />
    </div>
  );
};

export default Header;
