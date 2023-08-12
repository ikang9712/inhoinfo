import WorkFooter from '@src/component/home/Works/WorkFooter';
import WorkImageSlider from '@src/component/home/Works/WorkImageSlider';
import WorkTitle from '@src/component/home/Works/WorkTitle';

const WorkInhoInfo = () => {
  const firstSwiperSrcList = [
    '/images/home/work/inhoinfo.demo1.gif',
    '/images/home/work/inhoinfo.demo2.gif',
    '/images/home/work/inhoinfo.demo3.gif',
  ];
  const secondSwiperSrcList = [
    '/images/home/work/inhoinfo.prev1.png',
    '/images/home/work/inhoinfo.prev2.png',
  ];
  return (
    <div className="work-container">
      <div>
        <WorkTitle
          titleName={['inho.', 'info']}
          titleId="inhoinfo-title"
          titleImgSrc="/images/home/work/test1.png"
        />
        <div className="work-content">
          <section className="work-section">
            <div className="left">
              <div className="work-div">
                <h1>
                  Inho.info is a personal website displaying my previous works
                  and projects.
                </h1>
                <p>
                  Current version of the website is built on Typescript and
                  React. The design was inspired by Studio of Eric Van Holtz and
                  his website, <a href="https://vanholtz.co">vanholtz.co</a>.
                  His website is full of animation and interactive elements. For
                  every change in page, various elements transform their styling
                  to express liveness of the website.
                </p>
              </div>
              <div className="work-div">
                <p>
                  I tried to implement the same refined web experiences for the
                  users who visit the website. Most of animations were
                  implemented in CSS keyframe with React state management.
                </p>
                <p>
                  This article includes the overview of implementations and
                  short review and analysis for better performance of the
                  website in the future.
                </p>
              </div>
            </div>
            <div className="right">
              <h2>
                <a href="https://inho.info">www.inho.info</a>
              </h2>
              <p>Personal Website</p>
            </div>
          </section>
          <section className="work-section">
            <div className="left">
              <div className="work-div">
                <WorkImageSlider
                  key="inhoinfo.first.slider"
                  srcList={firstSwiperSrcList}
                />

                <div className="text-container">
                  <div className="text-block">
                    <p>
                      Most challenging part of the implementation was dynamic
                      interchange of CSS properties of components including logo
                      and header. The position of logo and header, the
                      background color of the NextPage changes according to the
                      page navigation. I used next router to detect users&apos;s
                      page navigation. Then, the classname of the corresponding
                      element changes to apply different styling.
                    </p>
                  </div>

                  <div className="text-block">
                    <p>
                      Another applied animation is disappearing header in work
                      page. Based on the scroll behavior and position of the
                      user, header changes its opacity. I mainly utilized window
                      scrollY property; however, due to its performance issue,
                      it seems better to apply intersection observer API or any
                      other alternative solution.
                    </p>
                    <p>
                      In addition, I manipulated animation delay and animation
                      and transition duration to make overall animations
                      happening in sequence.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <h2>Home animations.</h2>
              <p>
                Use of translate3D and keyframe animations for dynamic look of
                the website .
              </p>
            </div>
          </section>
          <section className="work-section">
            <div className="left">
              <div className="work-div">
                <WorkImageSlider
                  key="inhoinfo.second.slider"
                  srcList={secondSwiperSrcList}
                />
                <div className="text-container">
                  <div className="text-block">
                    <h1>
                      The first version of this website was built in 2022.
                    </h1>
                    <p>
                      Before the current version, there was another version of
                      the website designed and implemented in JavaScript and
                      React. The layout and design was inspired by Takuya
                      Matsuyama and his website,{' '}
                      <a href="https://www.craftz.dog">craftz.dog.</a>
                    </p>
                  </div>

                  <div className="text-block">
                    <p>
                      The website has dark/light mode with simple animations
                      using framer motion.
                    </p>
                    <p>
                      The hero section &#40;top of the page&#41; was implemented
                      with three.js. The 3D model can be rotated and zoomed
                      based on user interaction. In addition to Takuya
                      Matsuyama&apos;s implementation of his website, I built
                      extra features including sending emails and downloading
                      resume in pdf form. They were implemented with email.js
                      and Amazon S3.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="right">
              <h2>Previous version of inho.info.</h2>
              <p>It was more text heavy with minimal use of animation. </p>
            </div>
          </section>
        </div>
      </div>
      <WorkFooter src="work/muselive" footerName="muselive" />
    </div>
  );
};

export default WorkInhoInfo;
