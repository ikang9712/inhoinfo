import { IconContainer } from '@src/component/common/IconContainer';
import HeaderContext from '@src/context/header.context';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef, useState } from 'react';
import AboutSection from '../About';

const Header = () => {
  const [init, setInit] = useState(true);
  const [aboutClicked, setAboutClicked] = useState(false);
  const [bgDown, setBgDown] = useState(false);
  const [hideHeader, setHideHeader] = useState({
    hide: false,
    atBottom: false,
  });
  const [burgerClicked, setBurgerClicked] = useState(false);
  const { activated, setActivateBodyLock } = useContext(HeaderContext);
  const router = useRouter();
  let pathname = useRef<string>(router.pathname);
  const aboutRef = useRef<HTMLDivElement>(null);

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
          {/* <div
            className={
              router.pathname == '/' ? 'background' : 'background work'
            }
          ></div> */}
          <div
            className={burgerClicked ? 'mobile-nav open' : 'mobile-nav'}
            style={aboutClicked ? { display: 'none' } : { display: 'flex' }}
            onClick={() => {
              setBurgerClicked(!burgerClicked);
              setBgDown(false);
              setInit(false);
            }}
          >
            <div className="nav-burger"></div>
          </div>
          <div
            className={
              init
                ? 'mobile-nav-bg'
                : burgerClicked
                ? // burger clicked
                  aboutClicked
                  ? 'mobile-nav-bg up'
                  : bgDown
                  ? 'mobile-nav-bg down'
                  : 'mobile-nav-bg open'
                : // burger unclicked, or screen size over md
                  'mobile-nav-bg close'
            }
            // className={
            //   init
            //     ? 'mobile-nav-bg initial prev'
            //     : 'mobile-nav-bg initial'
            // }
          ></div>
          <a
            className={
              router.pathname == '/'
                ? aboutClicked || burgerClicked
                  ? 'logo toTop white'
                  : 'logo toBottom'
                : hideHeader.hide && !burgerClicked
                ? 'logo toTop hide'
                : aboutClicked || burgerClicked
                ? 'logo toTop white'
                : 'logo toTop'
            }
            onClick={() => {
              if (router.pathname == '/') {
                router.reload();
              } else {
                router.push('/');
              }

              setAboutClicked(false);
              setBurgerClicked(false);
            }}
          >
            <span className={'logo-span'}>Inho</span>
            <span className={'logo-span'}>Kang.</span>
          </a>
          <div className={burgerClicked ? 'info clicked' : 'info'}>
            <div
              className={
                burgerClicked
                  ? aboutClicked
                    ? 'info-wrapper white invisible'
                    : 'info-wrapper white'
                  : router.pathname == '/'
                  ? 'info-wrapper white'
                  : hideHeader.hide
                  ? 'info-wrapper black invisible'
                  : 'info-wrapper black'
              }
            >
              <div className="left">
                <ul>
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
                <ul>
                  <li>South Korea</li>
                  <li className="email">ikang9712@gmail.com</li>
                </ul>
                <ul
                  id="header-about"
                  className={
                    burgerClicked
                      ? aboutClicked
                        ? 'about mid invisible'
                        : 'about mid'
                      : aboutClicked
                      ? 'about top'
                      : router.pathname == '/'
                      ? 'about bottom'
                      : hideHeader.atBottom
                      ? 'about bottom'
                      : 'about top'
                  }
                  onClick={() => {
                    setAboutClicked(!aboutClicked);
                  }}
                >
                  <li> about </li>
                </ul>
              </div>
              <div className="right">
                <ul>
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
          <AboutSection
            refObject={aboutRef}
            aboutClicked={aboutClicked}
            setClicked={setAboutClicked}
            setBgDown={setBgDown}
          />
        </>
      )}
    </div>
  );
};

export default Header;
