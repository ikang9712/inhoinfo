import { IconContainer } from '@src/component/common/IconContainer';
import HeaderContext from '@src/context/header.context';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import AboutSection from '../About';

const Header = () => {
  const [init, setInit] = useState(true);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [burgerClicked, setBurgerClicked] = useState(false);
  const router = useRouter();
  let pathname = useRef<string>(router.pathname);
  const { activated } = useContext(HeaderContext);
  const handleScroll = () => {
    if (pathname.current != '/') {
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
  useEffect(() => {
    pathname.current = router.pathname;
  }, [router]);

  return (
    <div>
      {activated ? (
        <></>
      ) : (
        <>
          <div
            className={
              router.pathname == '/' ? 'background' : 'background work'
            }
          ></div>
          <header className="home-header">
            <div
              className={burgerClicked ? 'mobile-nav open' : 'mobile-nav'}
              style={aboutClicked ? { display: 'none' } : { display: 'flex' }}
              onClick={() => {
                setBurgerClicked(!burgerClicked);
              }}
            >
              <div className="nav-burger"></div>
            </div>
            <div
              className={
                burgerClicked
                  ? aboutClicked
                    ? 'mobile-nav-bg disappear'
                    : 'mobile-nav-bg open'
                  : init
                  ? 'mobile-nav-bg initial prev'
                  : 'mobile-nav-bg initial'
              }
              // style={
              //   burgerClicked
              //     ? { visibility: 'visible' }
              //     : { visibility: 'hidden' }
              // }
            ></div>
            <a
              className={
                router.pathname == '/'
                  ? aboutClicked
                    ? 'logo toTop'
                    : 'logo toBottom'
                  : hideHeader && !burgerClicked
                  ? 'logo toTop hide'
                  : 'logo toTop'
              }
              onClick={() => {
                router.push('/');
                setAboutClicked(false);
                setBurgerClicked(false);
              }}
            >
              <span
                className={init ? 'init' : aboutClicked ? 'about-span' : ''}
                onAnimationEnd={() => {
                  setInit(false);
                }}
              >
                Inho
              </span>
              <span
                className={init ? 'init' : aboutClicked ? 'about-span' : ''}
                onAnimationEnd={() => {
                  setInit(false);
                }}
              >
                Kang.
              </span>
            </a>
            <div
              className={
                router.pathname == '/'
                  ? 'info'
                  : burgerClicked
                  ? 'info work white'
                  : 'info work'
              }
              style={
                hideHeader && !burgerClicked
                  ? {
                      opacity: 0,
                      pointerEvents: 'none',
                      transition: 'all 1s',
                    }
                  : aboutClicked
                  ? {
                      opacity: 0,
                      pointerEvents: 'none',
                      transition: 'all 1s',
                    }
                  : {
                      opacity: 1,
                      pointerEvents: 'auto',
                      transition: 'all 1s',
                    }
              }
            >
              <div className="left">
                <ul
                  className={
                    burgerClicked ? 'left-content clicked' : 'left-content'
                  }
                >
                  <li>Web Developer</li>
                  <li className="github-source">
                    <a
                      target="_blank"
                      href="https://github.com/ikang9712/inhoinfo"
                    >
                      <span>
                        <IconContainer
                          className="github-icon"
                          iconName="github"
                        />
                      </span>
                      <span> Source</span>
                    </a>
                  </li>
                </ul>
                <ul
                  className={
                    burgerClicked ? 'left-content clicked' : 'left-content'
                  }
                >
                  <li>South Korea</li>
                  <li className="email">ikang9712@gmail.com</li>
                </ul>
                <ul
                  className={
                    router.pathname == '/'
                      ? aboutClicked
                        ? burgerClicked
                          ? 'about toTop clicked'
                          : 'about toTop'
                        : burgerClicked
                        ? 'about toBottom clicked'
                        : 'about toBottom'
                      : burgerClicked
                      ? 'about toTop clicked'
                      : 'about toTop'
                  }
                  onClick={() => {
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
                <ul
                  className={
                    burgerClicked ? 'right-content clicked' : 'right-content'
                  }
                >
                  <li>
                    <span>01</span>
                    <a
                      target="_blank"
                      href="https://www.instagram.com/innnnhok/"
                    >
                      instagram
                    </a>
                  </li>
                  <li>
                    <span>02</span>
                    <a
                      target="_blank"
                      href="https://www.linkedin.com/in/inho-kang-6813261a8/"
                    >
                      linkedin
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </header>
          <AboutSection clicked={aboutClicked} setClicked={setAboutClicked} />
        </>
      )}
    </div>
  );
};

export default Header;
