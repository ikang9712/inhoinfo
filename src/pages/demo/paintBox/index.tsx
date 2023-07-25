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
              width={1600}
              height={929}
              layout="responsive"
            />
          </div>

          <div className="hero-text">
            <h4>save 20 dollars on bundles</h4>
            <h3>
              The ultimate summer accessory, discover our newest Nail Lackquer
              Trio: &#8198;
              <em>Like Poolside &mdash;</em>
              inspired by color theory.
            </h3>
            <a href="#">shop now</a>
          </div>
        </div>
        <div className="shop-section">
          <div className="category">the shop</div>
          <div className="title"> Our Newest Polish Colors</div>
          <div className="product-slider">
            <div className="product-tile">
              <a>
                <div className="product-tile-image">
                  <Image
                    src={'/images/demo/paintbox/paintbox2.webp'}
                    alt="product1"
                    width={640}
                    height={800}
                    layout="responsive"
                  />
                </div>
                <div className="product-tile-name">
                  Nail Lacquer Trio &ndash; Like Poolside
                </div>
                <div className="product-tile-price"> &euro; 52.00</div>
              </a>
              <a className="product-tile-button">add to cart</a>
            </div>
            <div className="product-tile">
              <a>
                <div className="product-tile-image">
                  <Image
                    src={'/images/demo/paintbox/paintbox4.webp'}
                    alt="product2"
                    width={640}
                    height={800}
                    layout="responsive"
                  />
                </div>
                <div className="product-tile-name">
                  Nail Lacquer Trio &ndash; Like Poolside
                </div>
                <div className="product-tile-price"> &euro; 52.00</div>
              </a>
              <a className="product-tile-button">add to cart</a>
            </div>
            <div className="product-tile">
              <a>
                <div className="product-tile-image">
                  <Image
                    src={'/images/demo/paintbox/paintbox3.webp'}
                    alt="product3"
                    width={640}
                    height={800}
                    layout="responsive"
                  />
                </div>
                <div className="product-tile-name">
                  Nail Lacquer Trio &ndash; Like Poolside
                </div>
                <div className="product-tile-price"> &euro;52.00</div>
              </a>
              <a className="product-tile-button">add to cart</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoPaintBox;
