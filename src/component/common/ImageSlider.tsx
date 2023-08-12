import { ImageSliderProps } from '@src/types';
import Image from 'next/image';
import { useState } from 'react';
import { IconContainer } from './IconContainer';

const ImageSlider = ({ slides }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const getPreviousIndex = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(slides.length - 1);
    }
  };
  const getNextIndex = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  return (
    <div className="image-slider">
      <div className="content-img-wrapper">
        <div className="left-arrow" onClick={getPreviousIndex}>
          <IconContainer className="caret-left-icon" iconName="caret-left" />
        </div>
        <div className="right-arrow" onClick={getNextIndex}>
          <IconContainer className="caret-right-icon" iconName="caret-right" />
        </div>
        <div className="img-bar-wrapper">
          <Image
            priority={true}
            src={slides[currentIndex].src}
            alt="alt"
            width={2000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
