import HomeBackButton from '@src/component/common/HomeBackBtn';
import HeaderContext from '@src/context/header.context';
import { NextPage } from 'next';
import { useContext, useEffect, useState } from 'react';
import Footer from './component/Footer';
import PaintBoxHeader from './component/Header';
import HeroSection from './component/HeroSection';
import InspirationSection from './component/InspirationSection';
import InstagramSection from './component/InstagramSection';
import ProductTile from './component/ProductTile';
import ShopSectionThree from './component/ShopSectionThree';
import ShopSectionTwo from './component/ShopSectionTwo';
import SubscribeSection from './component/SubscribeSection';

// add comment to fix bug issue for vercel
const DemoPaintBox: NextPage = () => {
  const [burger, setBurger] = useState<boolean>(false);
  const { setActivated } = useContext(HeaderContext);
  useEffect(() => {
    setActivated(true);
  }, []);
  return (
    <div className="paint-body">
      <HomeBackButton />
      <PaintBoxHeader isActivated={burger} handleActivation={setBurger} />
      <div className="home">
        <HeroSection />
        <div className="shop-section">
          <div className="category">the shop</div>
          <div className="title"> Our Newest Polish Colors</div>
          <div className="product-slider">
            <ProductTile
              imageSource="/images/demo/paintbox/paintbox2.webp"
              name="Nail Lacquer Trio &ndash; Like Poolside"
              price="52"
            />
            <ProductTile
              imageSource="/images/demo/paintbox/paintbox4.webp"
              name="Nail Lacquer Trio &ndash; Like Poolside"
              price="52"
            />
            <ProductTile
              imageSource="/images/demo/paintbox/paintbox3.webp"
              name="Nail Lacquer Trio &ndash; Like Poolside"
              price="52"
            />
          </div>
        </div>
        <ShopSectionTwo
          imageSource="/images/demo/paintbox/paintbox6.webp"
          category="our studio"
          title="Explore our Spring-Summer 23 Lookbook plus our new Best
        Sellers collection of the most iconic Paintbox designs of all
        time."
          buttonName="book a manicure"
        />
        <ShopSectionTwo
          imageSource="/images/demo/paintbox/paintbox5.webp"
          category="our shop"
          title="Accessorize your summer'23 fits with our new color theory
          trios."
          buttonName="shop now"
        />
        <ShopSectionTwo
          imageSource="/images/demo/paintbox/paintbox7.webp"
          category="gift cards"
          title="Give the gift of the Paintbox experience for a manicure that
          tells a story."
          buttonName="buy a gift card"
        />
        <InspirationSection />
        <InstagramSection />
        <ShopSectionThree
          imageSource="/images/demo/paintbox/paintbox20.webp"
          time="May 18, 2023"
          title="New and Now: Summer 23' Power Couple"
          buttonName="read story"
        />
        <ShopSectionThree
          imageSource="/images/demo/paintbox/paintbox21.jpeg"
          time="May 9, 2023"
          title=" Nails of New York (Mother's Day Edition): Charlotte of The
        Fashion Guitar"
          buttonName="read story"
          secondImage
        />
        <ShopSectionThree
          imageSource="/images/demo/paintbox/paintbox22.jpeg"
          time="Apr 10, 2023"
          title="Color Theory: The Inspiration Behind Our Spring'23 Power
        Couple"
          buttonName="read story"
        />

        <SubscribeSection />
        <ShopSectionTwo
          imageSource="/images/demo/paintbox/paintbox23.webp"
          category="paintboxmani"
          title="Follow us on Instagram & TikTok @paintboxnails to get inspired
          and make the most of your Power Couples."
          buttonName="follow"
        />
      </div>
      <Footer />
    </div>
  );
};

export default DemoPaintBox;
