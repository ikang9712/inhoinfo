import Image from 'next/image';
const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
