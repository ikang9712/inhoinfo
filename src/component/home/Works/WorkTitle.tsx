import HeaderContext from '@src/context/header.context';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

const WorkTitle = ({
  titleName,
  titleId,
  titleImgSrc,
}: {
  titleName: string[];
  titleId: string;
  titleImgSrc: string;
}) => {
  const router = useRouter();
  const { setActivated } = useContext(HeaderContext);

  useEffect(() => {
    setActivated(false);
    const handleScroll = () => {
      const title = document.getElementById(titleId);
      if (title && window.scrollY < 500) {
        title.style.transition = '2s';
        title.style.transitionDelay = '0.1s';
        title.style.top = `calc(12vh   + ${window.scrollY / 5}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', () => {
        handleScroll;
      });
    };
  }, [setActivated, titleId]);

  return (
    <div>
      <div className="title-img-wrapper">
        <Image
          priority={true}
          src={titleImgSrc}
          alt="alt"
          width={2000}
          height={1000}
        />
        <div
          className={router.pathname == '/' ? 'img-cover outro' : 'img-cover'}
        ></div>
      </div>

      <h1 id={titleId} className="work-title">
        {titleName.map((name, index) => {
          return <span key={name + `${index}`}>{name}</span>;
        })}
      </h1>
    </div>
  );
};

export default WorkTitle;
