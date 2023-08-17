import { IconContainer } from '@src/component/common/IconContainer';
import HeaderContext from '@src/context/header.context';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import AboutSection from '../About';

const Header = () => {
  const [init, setInit] = useState(true);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [hideHeader, setHideHeader] = useState({
    hide: false,
    atBottom: false,
  });
  const [burgerClicked, setBurgerClicked] = useState(false);
  const { activated, setActivateBodyLock } = useContext(HeaderContext);
  const router = useRouter();
  let pathname = useRef<string>(router.pathname);

  const handleScroll = () => {
    if (pathname.current != '/') {
      if (document.body.scrollHeight - window.scrollY < 1200) {
        setHideHeader({ hide: false, atBottom: true });
      } else if (window.scrollY > 300) {
        setHideHeader({ hide: true, atBottom: false });
      } else {
        setHideHeader({ hide: false, atBottom: false });
      }
    } else {
      setHideHeader({ hide: false, atBottom: false });
    }
  };
  const handleResize = () => {
    if (window.innerWidth > 767) {
      setBurgerClicked(false);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
    });
    window.addEventListener('resize', () => {
      handleResize();
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

  useEffect(() => {
    if (aboutClicked || burgerClicked) {
      setActivateBodyLock(true);
    } else {
      setActivateBodyLock(false);
    }
  }, [aboutClicked, burgerClicked]);

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
          <div
            className={burgerClicked ? 'mobile-nav open' : 'mobile-nav'}
            style={aboutClicked ? { display: 'none' } : { display: 'flex' }}
            onClick={() => {
              setBurgerClicked(!burgerClicked);
              const elem = document.querySelector('#header-about');
              elem?.classList.add('clicked');
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
          ></div>
          <a
            className={
              router.pathname == '/'
                ? aboutClicked
                  ? 'logo toTop'
                  : 'logo toBottom'
                : hideHeader.hide && !burgerClicked
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
          <div className={burgerClicked ? 'info clicked' : 'info'}>
            <div
              className="info-wrapper"
              style={
                router.pathname == '/'
                  ? // in home view.
                    aboutClicked
                    ? { color: 'white', opacity: 0 }
                    : { color: 'white', opacity: 1 }
                  : // in other view. work page.
                  burgerClicked
                  ? aboutClicked
                    ? { color: 'white', opacity: 0 }
                    : { color: 'white', opacity: 1 }
                  : // if burger is not clicked, maintain black.
                  hideHeader.hide
                  ? { color: 'black', opacity: 0 }
                  : aboutClicked
                  ? { color: 'white', opacity: 1 }
                  : { color: 'black', opacity: 1 }
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
                  id="header-about"
                  className={
                    router.pathname == '/'
                      ? // at home view.
                        aboutClicked
                        ? 'about toTop clicked'
                        : 'about toBottom'
                      : // at other view.
                      hideHeader.atBottom
                      ? 'about toBottom'
                      : 'about toTop'
                  }
                  onClick={() => {
                    if (!aboutClicked) {
                      setAboutClicked(true);
                    } else {
                      setAboutClicked(false);
                    }
                  }}
                  style={burgerClicked ? { transform: 'translateY(0)' } : {}}
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
          </div>
          <AboutSection clicked={aboutClicked} setClicked={setAboutClicked} />
        </>
      )}
    </div>
  );
};

export default Header;
