import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const WorkImageSlider = ({
  keyName,
  srcList,
}: {
  keyName: string;
  srcList: string[];
}) => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        loop={true}
      >
        {srcList.map((src, index) => {
          return (
            <SwiperSlide key={`${keyName}_${index}`}>
              <Image
                priority={true}
                src={src}
                alt={src}
                width={2000}
                height={1000}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default WorkImageSlider;
