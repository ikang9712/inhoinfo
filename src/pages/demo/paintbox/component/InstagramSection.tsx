import Image from 'next/image';

const InstagramSection = () => {
  return (
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
        <a href="https://www.instagram.com/paintboxnails/">@paintboxnails</a>
      </div>
    </div>
  );
};

export default InstagramSection;
