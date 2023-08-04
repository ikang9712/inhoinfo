import { IconContainer } from '@src/component/common/IconContainer';
import Image from 'next/image';
import { Fragment } from 'react';
import { ShopSectionThreeProps } from '../type';

const ShopSectionThree = ({
  imageSource,
  time,
  title,
  buttonName,
  secondImage,
}: ShopSectionThreeProps) => {
  const textWrapperClassName = secondImage
    ? `text-wrapper second-text-wrapper`
    : 'text-wrapper';

  const imageWrapperClassName = secondImage
    ? 'image-wrapper second-image'
    : 'image-wrapper';
  return (
    <div className="shop-section-3">
      {secondImage ? (
        <Fragment>
          <div className={textWrapperClassName}>
            <div className="text-content">
              <div className="time"> {time}</div>
              <div className="title">{title}</div>
              <a href="#">
                {buttonName}
                <span>
                  <IconContainer
                    className="arrow-icon"
                    iconName="arrow-right"
                  />
                </span>
              </a>
            </div>
          </div>
          <div className={imageWrapperClassName}>
            <Image
              className="responsive-image"
              src={imageSource}
              alt={imageSource}
              layout="responsive"
              width={1620}
              height={941}
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <div className={imageWrapperClassName}>
            <Image
              className="responsive-image"
              src={imageSource}
              alt={imageSource}
              layout="responsive"
              width={1620}
              height={941}
            />
          </div>
          <div className={textWrapperClassName}>
            <div className="text-content">
              <div className="time"> {time}</div>
              <div className="title">{title}</div>
              <a href="#">
                {buttonName}
                <span>
                  <IconContainer
                    className="arrow-icon"
                    iconName="arrow-right"
                  />
                </span>
              </a>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default ShopSectionThree;
