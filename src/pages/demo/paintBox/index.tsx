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
        <div className="shop-section-2">
          <div className="image-wrapper">
            <Image
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
                Accessorize your summer fits with our new color theory trios.
              </div>
              <a href="#"> shop now</a>
            </div>
          </div>
        </div>
        <div className="shop-section-2">
          <div className="image-wrapper">
            <Image
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
      </div>
    </div>
  );
};

export default DemoPaintBox;
