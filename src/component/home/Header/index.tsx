import HeaderContext from '@src/context/header.context';
import { useRouter } from 'next/router';
import { useContext } from 'react';

const Header = () => {
  const { activated } = useContext(HeaderContext);
  const router = useRouter();
  return (
    <div>
      <div
        className={router.pathname == '/' ? 'background' : 'background work'}
      ></div>
      <header className="home-header">
        <a
          key={'logo'}
          className={
            router.pathname == '/'
              ? activated
                ? 'logo toBottom'
                : 'logo'
              : activated
              ? 'logo toTop'
              : 'logo work'
          }

          // className={
          //   activated
          //     ? unactivated
          //       ? 'logo-unactivated'
          //       : 'logo-activated'
          //     : 'logo'
          // }
          // onAnimationEnd={() => {
          //   if (unactivated) {
          //     setActivated(false);
          //   }
          //   setUnactivated(false);
          // }}
        >
          <span>Inho</span>
          <span>Kang.</span>
        </a>
        <div className={router.pathname == '/' ? 'info' : 'info work'}>
          <div className="left">
            <ul>
              <li>Studio of Inho Kang</li>
              <li>Web Developer</li>
            </ul>
            <ul>
              <li>South Korea</li>
              <li className="email">ikang9712@gmail.com</li>
            </ul>
            <ul

            // className={activated ? 'about-me-activated' : 'about-me'}
            >
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
    </div>
  );
};

export default Header;
