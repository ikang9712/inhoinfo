import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const DemoPaintBox: NextPage = () => {
  return (
    <div className="paint-body">
      <header>
        <div className="header-container">
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
          <nav>
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
          <a className="header-book">book a manicure</a>
          <div className="header-icon-wrapper">
            <ul>
              <li>
                <a href="#">
                  <Image
                    src={'/images/demo/paintbox/search-icon.svg'}
                    alt="icon"
                    width={48}
                    height={48}
                  />
                </a>
              </li>
              <li className="cart-icon">
                <a href="#">
                  <Image
                    src={'/images/demo/paintbox/cart-icon.svg'}
                    alt="icon"
                    width={48}
                    height={48}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      {/* TODO: search pop-up */}
      {/* TODO: mobile menu */}

      <div className="home">
        <div className="hero-section">
          <div>
            <Image
              src={'/images/demo/paintbox/paintbox1.webp'}
              alt="hero-image"
              width={0}
              height={0}
              layout="responsive"
            />
          </div>

          <div className="hero-text">
            <h4>save 20% on bundles</h4>
            <h3>
              The ultimate summer accessory, discover our newest Nail Lackquer
              Trio:
              <em>Like Poolside &mdash;</em>
              inspired by color theory.
            </h3>
            <a href="#">shop now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPaintBox;
