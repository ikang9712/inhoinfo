import Image from 'next/image';
import { ShopSectionTwoProps } from '../type';

const ShopSectionTwo = ({
  imageSource,
  category,
  title,
  buttonName,
}: ShopSectionTwoProps) => {
  return (
    <div className="shop-section-2">
      <div className="image-wrapper">
        <Image
          className="responsive-image"
          src={imageSource}
          alt={imageSource}
          layout="responsive"
          width={1280}
          height={1280}
        />
      </div>
      <div className="text-wrapper">
        <div className="text-content">
          <div className="category"> {category}</div>
          <div className="title">{title}</div>
          <a href="#"> {buttonName}</a>
        </div>
      </div>
    </div>
  );
};
export default ShopSectionTwo;
