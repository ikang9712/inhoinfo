import { IconContextProvider } from '@src/component/iconProvider';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const DemoPaintBox: NextPage = () => {
  const [burger, setBurger] = useState<boolean>(false);

  return (
    <div className="paint-body">
      <header>
        <div className="header-container">
          <div className="mobile-modal">
            <a
              onClick={() => {
                setBurger(!burger);
              }}
            >
              <span>
                {burger ? (
                  <IconContextProvider
                    className="hamburger-icon"
                    iconName="cross"
                  />
                ) : (
                  <IconContextProvider
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
      {burger ? (
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
      {/* TODO: search pop-up */}
      {/* TODO: mobile menu */}

      <div className="home">
        <div className="hero-section">
          <div className="image-wrapper">
            <Image
              className="responsive-image"
              src={'/images/demo/paintbox/paintbox1.webp'}
              alt="hero-image"
              width={1600}
              height={929}
              layout="responsive"
            />
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
        </div>
        <div className="shop-section">
          <div className="category">the shop</div>
          <div className="title"> Our Newest Polish Colors</div>
          <div className="product-slider">
            <div className="product-tile">
              <a>
                <div className="product-tile-image">
                  <Image
                    className="responsive-image"
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
                    className="responsive-image"
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
                    className="responsive-image"
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
        <div className="shop-section-2">
          <div className="image-wrapper">
            <Image
              className="responsive-image"
              src={'/images/demo/paintbox/paintbox6.webp'}
              alt="shop-section-2-1-image"
              layout="responsive"
              width={1280}
              height={1280}
            />
          </div>
          <div className="text-wrapper">
            <div className="text-content">
              <div className="category"> our studio</div>
              <div className="title">
                Explore our <em>Spring-Summer 23 Lookbook </em>plus our new Best
                Sellers collection of the most iconic Paintbox designs of all
                time.
              </div>
              <a href="#"> book a manicure</a>
            </div>
          </div>
        </div>
        <div className="shop-section-2">
          <div className="image-wrapper">
            <Image
              className="responsive-image"
              src={'/images/demo/paintbox/paintbox5.webp'}
              alt="shop-section-2-2-image"
              layout="responsive"
              width={1280}
              height={1280}
            />
          </div>
          <div className="text-wrapper">
            <div className="text-content">
              <div className="category" style={{ marginTop: 80 }}>
                {' '}
                our shop
              </div>
              <div className="title">
                Accessorize your summer&apos;23 fits with our new color theory
                trios.
              </div>
              <a href="#"> shop now</a>
            </div>
          </div>
        </div>
        <div className="shop-section-2">
          <div className="image-wrapper">
            <Image
              className="responsive-image"
              src={'/images/demo/paintbox/paintbox7.webp'}
              alt="shop-section-2-2-image"
              layout="responsive"
              width={1280}
              height={1280}
            />
          </div>
          <div className="text-wrapper">
            <div className="text-content">
              <div className="category"> gift cards</div>
              <div className="title">
                Give the gift of the Paintbox experience for a manicure that
                tells a story.
              </div>
              <a href="#"> buy a gift card</a>
            </div>
          </div>
        </div>
        <div className="shop-section">
          <div className="category">inspiration</div>
          <div className="title" style={{ marginBottom: 50 }}>
            {' '}
            How to use it:<em>Like Royals + Like Peony</em>
          </div>
          <div className="inspiration-slider">
            <div className="inspiration-tile">
              <a>
                <div className="inspiration-tile-image">
                  <Image
                    className="responsive-image"
                    src={'/images/demo/paintbox/paintbox8.avif'}
                    alt="inspiration-item-1"
                    width={0}
                    height={0}
                    layout="responsive"
                  />
                </div>

                <div className="inspiration-tile-number"> 01</div>
              </a>
            </div>
            <div className="inspiration-tile">
              <a>
                <div className="inspiration-tile-image">
                  <Image
                    className="responsive-image"
                    src={'/images/demo/paintbox/paintbox9.avif'}
                    alt="inspiration-item-1"
                    width={0}
                    height={0}
                    layout="responsive"
                  />
                </div>

                <div className="inspiration-tile-number"> 02</div>
              </a>
            </div>
            <div className="inspiration-tile">
              <a>
                <div className="inspiration-tile-image">
                  <Image
                    className="responsive-image"
                    src={'/images/demo/paintbox/paintbox10.avif'}
                    alt="inspiration-item-1"
                    width={0}
                    height={0}
                    layout="responsive"
                  />
                </div>

                <div className="inspiration-tile-number"> 03</div>
              </a>
            </div>
            <div className="inspiration-tile" style={{ borderRight: 0 }}>
              <a>
                <div className="inspiration-tile-image">
                  <Image
                    className="responsive-image"
                    src={'/images/demo/paintbox/paintbox11.avif'}
                    alt="inspiration-item-1"
                    width={0}
                    height={0}
                    layout="responsive"
                  />
                </div>

                <div className="inspiration-tile-number"> 05</div>
              </a>
            </div>
          </div>
          <a href="#" className="inspiration-button">
            shop power couple
          </a>
        </div>
        <div className="instagram-section">
          <div className="instagram-grid">
            <a>
              <div className="instagram-grid-item">
                <Image
                  className="responsive-image"
                  src={'/images/demo/paintbox/paintbox12.webp'}
                  alt="instagram-item-1"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </a>
            <a>
              <div className="instagram-grid-item">
                <Image
                  className="responsive-image"
                  src={'/images/demo/paintbox/paintbox13.webp'}
                  alt="instagram-item-1"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </a>
            <a>
              <div className="instagram-grid-item">
                <Image
                  className="responsive-image"
                  src={'/images/demo/paintbox/paintbox14.webp'}
                  alt="instagram-item-1"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </a>
            <a>
              <div className="instagram-grid-item">
                <Image
                  className="responsive-image"
                  src={'/images/demo/paintbox/paintbox15.webp'}
                  alt="instagram-item-1"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </a>
            <a>
              <div className="instagram-grid-item">
                <Image
                  className="responsive-image"
                  src={'/images/demo/paintbox/paintbox16.webp'}
                  alt="instagram-item-1"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </a>
            <a>
              <div className="instagram-grid-item">
                <Image
                  className="responsive-image"
                  src={'/images/demo/paintbox/paintbox17.webp'}
                  alt="instagram-item-1"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </a>
            <a>
              <div className="instagram-grid-item">
                <Image
                  className="responsive-image"
                  src={'/images/demo/paintbox/paintbox18.webp'}
                  alt="instagram-item-1"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </a>
            <a>
              <div className="instagram-grid-item">
                <Image
                  className="responsive-image"
                  src={'/images/demo/paintbox/paintbox19.webp'}
                  alt="instagram-item-1"
                  width={0}
                  height={0}
                  layout="responsive"
                />
              </div>
            </a>
          </div>
          <div className="instagram-grid-title">
            Follow us at{' '}
            <a href="https://www.instagram.com/paintboxnails/">
              @paintboxnails
            </a>
          </div>
        </div>
        <div className="shop-section-3">
          <div className="image-wrapper">
            <Image
              className="responsive-image"
              src={'/images/demo/paintbox/paintbox20.webp'}
              alt="shop-section-3-1-image"
              layout="responsive"
              width={1620}
              height={941}
            />
          </div>
          <div className="text-wrapper">
            <div className="text-content">
              <div className="time"> May 18, 2023</div>
              <div className="title">
                New and Now: Summer 23&apos; Power Couple
              </div>
              <a href="#">
                {' '}
                read story{' '}
                <span>
                  <IconContextProvider
                    className="arrow-icon"
                    iconName="arrow-right"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="shop-section-3">
          <div className="text-wrapper second-text-wrapper">
            <div className="text-content">
              <div className="time"> May 9, 2023</div>
              <div className="title">
                Nails of New York (Mother&apos;s Day Edition): Charlotte of The
                Fashion Guitar
              </div>
              <a href="#">
                {' '}
                read story{' '}
                <span>
                  <IconContextProvider
                    className="arrow-icon"
                    iconName="arrow-right"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className="image-wrapper second-image">
            <Image
              className="responsive-image"
              src={'/images/demo/paintbox/paintbox21.jpeg'}
              alt="shop-section-3-1-image"
              layout="responsive"
              width={1620}
              height={941}
            />
          </div>
        </div>
        <div className="shop-section-3">
          <div className="image-wrapper">
            <Image
              className="responsive-image"
              src={'/images/demo/paintbox/paintbox22.jpeg'}
              alt="shop-section-3-1-image"
              layout="responsive"
              width={1620}
              height={941}
            />
          </div>
          <div className="text-wrapper">
            <div className="text-content">
              <div className="time"> Apr 10, 2023</div>
              <div className="title">
                Color Theory: The Inspiration Behind Our Spring&apos;23 Power
                Couple
              </div>
              <a href="#">
                {' '}
                read story{' '}
                <span>
                  <IconContextProvider
                    className="arrow-icon"
                    iconName="arrow-right"
                  />
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="subscribe-section">
          <div className="title">join our conversation</div>
          <div className="content">
            Be the first to hear about new product launches and enjoy 20% off
            your first polish order.
          </div>
          <form>
            <div className="subscribe-input">
              <input name="EMAIL" placeholder="Enter your email"></input>
              <button type="submit">
                <span>
                  <IconContextProvider
                    className="arrow-icon"
                    iconName="arrow-right"
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
        <div className="shop-section-2" style={{ marginBottom: 50 }}>
          <div className="image-wrapper">
            <Image
              className="responsive-image"
              src={'/images/demo/paintbox/paintbox23.webp'}
              alt="shop-section-2-1-image"
              layout="responsive"
              width={1280}
              height={1280}
            />
          </div>
          <div className="text-wrapper" style={{ backgroundColor: '#f9dbbe' }}>
            <div className="text-content">
              <div className="category"> #paintboxmani</div>
              <div className="title">
                Follow us on Instagram & TikTok @paintboxnails to get inspired
                and make the most of your Power Couples.
              </div>
              <a href="#"> follow</a>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-col">
            <div className="title"> support</div>
            <ul>
              <li className="content">
                <a> f.a.q.</a>
              </li>
              <li className="content">
                <a> privacy policy</a>
              </li>
              <li className="content">
                <a> terms and conditions</a>
              </li>
              <li className="content">
                <a> accessibility</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <div className="title"> follow us</div>
            <ul>
              <li className="content">
                <a> instagram</a>
              </li>
              <li className="content">
                <a> pinterest</a>
              </li>
              <li className="content">
                <a> facebook</a>
              </li>
              <li className="content">
                <a> newsletter</a>
              </li>
            </ul>
          </div>
          <div className="footer-col" style={{ borderRight: 'none' }}>
            <div className="title"> paintbox</div>
            <ul>
              <li className="content">
                <a> our studio</a>
              </li>
              <li className="content">
                <a> gift cards</a>
              </li>
              <li className="content">
                <a> careers</a>
              </li>
              <li className="content">
                <a> press</a>
              </li>
              <li className="content">
                <a> contact us</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DemoPaintBox;
