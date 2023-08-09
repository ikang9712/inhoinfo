import Image from 'next/image';
import { useEffect } from 'react';

const WorkInhoInfo = () => {
  const handleScroll = () => {
    const title = document.getElementById('inhoinfo-title');
    title!.style.top = `${100 + window.scrollY / 5}px`;
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener('scroll', () => {
        handleScroll();
      });
    };
  }, []);

  return (
    <div className="work-container">
      <div>
        <div className="title-img-wrapper">
          <Image src={'/images/home/test2.jpeg'} alt="alt" layout="fill" />
          <div className="img-cover"></div>
        </div>

        <h1 id="inhoinfo-title" className="work-title">
          {' '}
          <span>inho.</span>
          <span>info</span>
        </h1>
        <div className="work-content">
          <section>
            <div>
              <h1> Inho.info is a personal website portfolio.</h1>
              <p>
                With simplicity, flexibility and maintanability in mind we built
                a website uniquely mega
              </p>
            </div>
            <div>
              <h2>www.inho.info</h2>
              <p>Inho Kang Studio</p>
              <h2>Agency</h2>
              <p>Inho Kang Studio</p>
              <h2>Loren ipsum</h2>
              <p>ipsum mateor</p>
            </div>
          </section>
          <section>
            <div>
              <h1> Inho.info is a personal website portfolio.</h1>
              <p>
                With simplicity, flexibility and maintanability in mind we built
                a website uniquely mega
              </p>
            </div>
            <div>
              <h2>www.inho.info</h2>
              <p>Inho Kang Studio</p>
              <h2>Agency</h2>
              <p>Inho Kang Studio</p>
              <h2>Loren ipsum</h2>
              <p>ipsum mateor</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default WorkInhoInfo;
