import { ProductTileProps } from '@src/types/paintboxTypes';
import Image from 'next/image';

const ProductTile = ({ imageSource, name, price }: ProductTileProps) => {
  return (
    <div className="product-tile">
      <a>
        <div className="product-tile-image">
          <Image
            className="responsive-image"
            src={imageSource}
            alt={imageSource}
            width={640}
            height={800}
            layout="responsive"
          />
        </div>
        <div className="product-tile-name">{name}</div>
        <div className="product-tile-price"> &euro; {price}</div>
      </a>
      <a className="product-tile-button">add to cart</a>
    </div>
  );
};

export default ProductTile;
