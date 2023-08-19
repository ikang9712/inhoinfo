import { IconContainer } from '@src/component/common/IconContainer';
import { HeaderProps } from '@src/types/paintboxTypes';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';

const PaintBoxHeader = ({ isActivated, handleActivation }: HeaderProps) => {
  return (
    <Fragment>
      <header>
        <div className="header-container">
          <div className="mobile-modal">
            <a
              onClick={() => {
                handleActivation(!isActivated);
              }}
            >
              <span>
                {isActivated ? (
                  <IconContainer className="hamburger-icon" iconName="cross" />
                ) : (
                  <IconContainer
                    className="hamburger-icon"
                    iconName="hamburger"
                  />
                )}
              </span>
            </a>
          </div>
          <div className="header-left">
            <div className="main-icon-wrapper">
              <Link href={'/demo/paintbox'}>
                <Image
                  src={'/images/demo/paintbox/icon.svg'}
                  alt="icon"
                  width={48}
                  height={48}
                />
              </Link>
            </div>
            <nav className="header-nav">
              <ul>
                <li>
                  <a href={'#'}>nail polish</a>
                </li>
                <li>
                  <a href={'#'}>nail care</a>
                </li>
                <li>
                  <a href={'#'}>nail art kits</a>
                </li>
                <li>
                  <a href={'#'}>journal</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <a className="header-book">book a manicure</a>
            <div className="header-icon-wrapper">
              <span>
                <a href="#">
                  <Image
                    src={'/images/demo/paintbox/search-icon.svg'}
                    alt="icon"
                    width={15}
                    height={15}
                  />
                </a>
              </span>
              <span className="cart-icon">
                <a href="#" className="cart-icon">
                  <Image
                    src={'/images/demo/paintbox/cart-icon.svg'}
                    alt="icon"
                    width={15}
                    height={15}
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </header>
      {isActivated ? (
        <div className="mobile-menu">
          <div className="book">
            <a>book a manicure</a>
          </div>

          <ul>
            <a href="#">
              <li>Nail Polish</li>
            </a>
            <a href="#">
              <li>Nail Care</li>
            </a>
            <a href="#">
              <li>Nail Art Kits</li>
            </a>
            <a href="#">
              <li style={{ borderBottom: 0 }}>Journal</li>
            </a>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </Fragment>
  );
};
export default PaintBoxHeader;
