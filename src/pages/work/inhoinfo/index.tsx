import HomeBackButton from '@src/component/common/HomeBackBtn';
import WorkFooter from '@src/component/home/Works/WorkFooter';
import WorkImageSlider from '@src/component/home/Works/WorkImageSlider';
import WorkTitle from '@src/component/home/Works/WorkTitle';
import HeaderContext from '@src/context/header.context';
import { useContext, useEffect, useRef } from 'react';
import { lock, unlock } from 'tua-body-scroll-lock';

const WorkInhoInfo = () => {
  const firstSwiperSrcList = [
    '/images/home/work/inhoinfo/inhoinfo.curr.1.png',
    '/images/home/work/inhoinfo/inhoinfo.curr.2.png',
  ];
  const secondSwiperSrcList = [
    '/images/home/work/inhoinfo/inhoinfo.prev1.png',
    '/images/home/work/inhoinfo/inhoinfo.prev2.png',
  ];
  const { activateBodyLock } = useContext(HeaderContext);
  const workRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activateBodyLock) {
      lock(workRef.current as HTMLElement);
    } else {
      unlock(workRef.current as HTMLElement);
    }
  }, [activateBodyLock]);
  return (
    <div>
      <div ref={workRef} className="work-container">
        <div>
          <WorkTitle
            titleName={['inho.', 'info']}
            titleId="inhoinfo-title"
            titleImgSrc="/images/home/work/inhoinfo/inhoinfo.title.png"
          />

          <div className="work-content">
            <section className="work-section">
              <div className="left">
                <div className="work-div">
                  <div className="text-container">
                    <div className="text-block">
                      <h1>
                        Inho.info is a personal website displaying my previous
                        works and projects.
                      </h1>
                      <p>
                        The design of the current website is inspired by Studio
                        of Eric Van Holtz and his website,{' '}
                        <a target="_blank" href="https://vanholtz.co">
                          vanholtz.co
                        </a>
                        . His website is full of animation and interactive
                        elements. For every change in page, various elements
                        transform their styling to express liveness of the
                        website.
                      </p>
                    </div>
                    <div className="text-block">
                      <p>
                        I tried to implement the same refined web experiences
                        for the users who visit the website. Keyframe animations
                        and transitions were meticulously chosen for smooth user
                        experience.
                      </p>
                      <p>
                        This article includes the review of overall
                        implementations and short analysis and reflections about
                        what I learned and what can be improved for cleaner code
                        and better performance in the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right initial">
                <div className="block">
                  <h2>
                    <a href="https://inho.info">www.inho.info</a>
                  </h2>
                  <p>Personal Website</p>
                </div>
                <div className="block">
                  <h2>Stack</h2>
                  <p>TypeScript, React</p>
                </div>
              </div>
            </section>
            <section className="work-section">
              <div className="left">
                <div className="work-div">
                  <WorkImageSlider
                    keyName="inhoinfo.first.slider"
                    srcList={firstSwiperSrcList}
                  />

                  <div className="text-container">
                    <div className="text-block">
                      <p>
                        Most challenging part of the implementation was dynamic
                        interchange of CSS properties including animation and
                        transition. Animation and transition are similar but
                        different in some parts.
                      </p>
                      <p>
                        Transition reverse its action from the current state
                        when user leaves the mouse &#40;for hover&#41; or the
                        action gets stopped, but animation does not. The
                        displacement of the header between page navigations and
                        most hover effects were implemented with transition for
                        smooth user experience.
                      </p>
                    </div>

                    <div className="text-block">
                      <p>
                        I also worked with scroll actions a lot. As user scroll
                        down and enter the main text part of the article, header
                        disappears. The title of the page also slightly moves up
                        and down according to the user&apos;s scroll actions.
                      </p>
                      <p>
                        I used window scrollY property, but due to its
                        performance issue, it seems better to apply intersection
                        observer API or other alternative solutions such as GSAP
                        scroll trigger. &#40; But GSAP scroll trigger is not
                        free..!&#41;
                      </p>
                      <p>
                        Also when user opens about section the scroll behavior
                        gets locked. I initially used body-scroll-lock for this,
                        but use tua-body-scroll-lock! it works the best for
                        mobile environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h2>Home view.</h2>
                <p>
                  Use of transitions and animations for dynamic look of the
                  website.
                </p>
              </div>
            </section>
            <section className="work-section">
              <div className="left">
                <div className="work-div">
                  <WorkImageSlider
                    keyName="inhoinfo.second.slider"
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
                        <a target="_blank" href="https://www.craftz.dog">
                          craftz.dog.
                        </a>
                      </p>
                    </div>

                    <div className="text-block">
                      <p>
                        The website layout changes with the choice of dark/light
                        mode. It had minimal use of animations using framer
                        motion.
                      </p>
                      <p>
                        The hero section &#40;top of the page&#41; had rotating
                        3D model, which was implemented with three.js. Users can
                        rotate and zoom with mouse action. In addition to Takuya
                        Matsuyama&apos;s original implementation, I added extra
                        features. Users can contact me via email by filling up
                        the form on the website. They can also download the pdf
                        of my resume through Amazon S3 bucket link.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h2>Previous version of the website</h2>
                <p>It was more text heavy with minimal use of animation. </p>
              </div>
            </section>
          </div>
        </div>
        <WorkFooter src="/work/muselive" footerName="muselive" />
      </div>
      <HomeBackButton />
    </div>
  );
};

export default WorkInhoInfo;
