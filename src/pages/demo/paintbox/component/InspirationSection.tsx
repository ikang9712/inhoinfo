import Image from 'next/image';
const InspirationSection = () => {
  return (
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
  );
};

export default InspirationSection;
