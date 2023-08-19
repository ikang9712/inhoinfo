import HomeBackButton from '@src/component/common/HomeBackBtn';
import WorkFooter from '@src/component/home/Works/WorkFooter';
import WorkImageSlider from '@src/component/home/Works/WorkImageSlider';
import WorkTitle from '@src/component/home/Works/WorkTitle';
import HeaderContext from '@src/context/header.context';
import { useRouter } from 'next/router';
import { useContext, useEffect, useRef } from 'react';
import { lock, unlock } from 'tua-body-scroll-lock';
const WorkCaseStudy = () => {
  const firstSwiperSrcList = [
    '/images/home/work/casestudy/paintbox.webview.1.png',
    '/images/home/work/casestudy/paintbox.webview.2.png',
    '/images/home/work/casestudy/paintbox.webview.3.png',
  ];
  const secondSwiperSrcList = [
    '/images/home/work/casestudy/paintbox.mobileview.1.png',
    '/images/home/work/casestudy/paintbox.mobileview.2.png',
    '/images/home/work/casestudy/paintbox.mobileview.3.png',
  ];
  const thirdSwiperSrcList = [
    '/images/home/work/casestudy/besthorror1.png',
    '/images/home/work/casestudy/besthorror2.png',
    '/images/home/work/casestudy/besthorror3.png',
  ];
  const fourthSwiperSrcList = [
    '/images/home/work/casestudy/besthorror4.png',
    '/images/home/work/casestudy/besthorror5.png',
  ];
  const router = useRouter();
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
            titleName={['case', 'study']}
            titleId="inhoinfo-title"
            titleImgSrc="/images/home/work/casestudy/casestudy.title.jpg"
          />

          <div className="work-content">
            <section className="work-section">
              <div className="left">
                <div className="work-div">
                  <div className="text-container">
                    <div className="text-block">
                      <h1>Case Studies: PaintBox, BestHorror.</h1>
                      <p>
                        This article contains previous case studies that I have
                        conducted to practice UI design and implementation of
                        real websites. So far, there has been two case studies
                        for the websites:{' '}
                        <a target="_blank" href="https://paint-box.com/">
                          paintbox
                        </a>{' '}
                        and{' '}
                        <a target="_blank" href="https://besthorrorscenes.com/">
                          best horror
                        </a>
                        .
                      </p>
                    </div>
                    <div className="text-block">
                      <p>
                        Each secion starts with an analysis of the
                        website&apos;s overall design concepts. Then, I included
                        major difficulties I confronted while implementing the
                        landing page of each website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right initial">
                <div className="block">
                  <h2>
                    <a
                      onClick={() => {
                        router.push('/demo/paintbox');
                      }}
                      style={{ marginBottom: '5px' }}
                    >
                      /demo/paintbox
                    </a>
                    <a
                      onClick={() => {
                        router.push('/demo/besthorror');
                      }}
                    >
                      /demo/besthorror
                    </a>
                  </h2>
                  <p>See the live demo.</p>
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
                  <div className="text-container">
                    <div className="text-block">
                      <h1> Paintbox</h1>
                      <p>
                        Paintbox is a nail studio based in New York with
                        seasonal collections of curated nail products.
                      </p>
                    </div>
                  </div>
                  <WorkImageSlider
                    keyName="casestudy.first.slider"
                    srcList={firstSwiperSrcList}
                  />

                  <div className="text-container">
                    <div className="text-block">
                      <p>
                        PaintBox designs, produces, and sell their nail
                        products. Since the website serves as one of their
                        selling channels, introducing the products and
                        ultimately leading users to buy products are the key
                        concepts of the website.
                      </p>
                      <p>
                        It was interesting to see how they match the nail colors
                        of a person holding the product with the color of the
                        product. Such mix-match of the colors in professionally
                        taken photos better showcase the products.
                      </p>
                    </div>
                    <div className="text-block">
                      <p>
                        The implementation required me to utilize both flex and
                        grid system. As the website changes its padding and
                        margin with respect to the screen size, I needed the
                        global SCSS mixin that applies different stylings based
                        on the current media screen size.
                      </p>
                      <p>
                        I needed to learn how an image element behaves with
                        respect to its parent as the website uses more than 20
                        images. This experience helped me a lot when I implement
                        my own.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h2>Home view in large screen size.</h2>
                <p>Most texts are tied up with beautiful images.</p>
              </div>
            </section>
            <section className="work-section">
              <div className="left">
                <div className="work-div">
                  <WorkImageSlider
                    keyName="casestudy.second.slider"
                    srcList={secondSwiperSrcList}
                  />
                  <div className="text-container">
                    <div className="text-block">
                      <p>
                        While in small screen size, the left and right padding
                        disappears and images get full width of the whole
                        screen. The vertical margin between image + text
                        sections also gets reduced or become 0, considering the
                        small viewport for mobile users.
                      </p>
                    </div>

                    <div className="text-block">
                      <p>
                        A drop down menu appears as the screen size decreases.
                        Users can click and navigate to other page using this
                        modal. Such change in header layout helps users to have
                        more mobile native experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h2>Home view in small screen size.</h2>
                <p>
                  Use of full width for images. The header also changes its
                  layout to be more mobile native.
                </p>
              </div>
            </section>
            <section className="work-section">
              <div className="left">
                <div className="work-div">
                  <div className="text-container">
                    <div className="text-block">
                      <h1> BestHorrorScenes</h1>
                      <p>
                        BestHorrorScenes is a website with a large collection of
                        horror movie scenes including movie details and video
                        clips.
                      </p>
                    </div>
                  </div>
                  <WorkImageSlider
                    keyName="casestudy.third.slider"
                    srcList={thirdSwiperSrcList}
                  />

                  <div className="text-container">
                    <div className="text-block">
                      <p>
                        The main purpose of the website is to show various
                        horror movies&apos; best clips with ratings, comments,
                        and short details. Users can interact with the contents
                        through rating a movie or leaving a comment.
                      </p>
                    </div>
                    <div className="text-block">
                      <p>
                        The implementation of the website was fairly simple. I
                        needed to set position: fixed for the left hand side
                        header and give left margin for the right hand side
                        contents. Then, we need to give appropriate margin and
                        padding for each section with video clip.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h2>Home view.</h2>
                <p>You can watch the short clips of horror movies.</p>
              </div>
            </section>
            <section className="work-section">
              <div className="left">
                <div className="work-div">
                  <WorkImageSlider
                    keyName="casestudy.fourth.slider"
                    srcList={fourthSwiperSrcList}
                  />
                  <div className="text-container">
                    <div className="text-block">
                      <p>
                        While in small screen size, the header fixed to the left
                        moves to the top center and no longer fixed. I achieve
                        this by using the mixin, checking the media screen size,
                        and changing flex-direction from row to column. I did
                        not implement the rating or comment section since it
                        requires a database. I focused more on learning and
                        implementing the designs and layouts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h2>Mobile view.</h2>
                <p>The website changes its layout to be more mobile native.</p>
              </div>
            </section>
          </div>
        </div>
        <WorkFooter src="/work/inhoinfo" footerName="inho.info" />
      </div>
      <HomeBackButton />
    </div>
  );
};

export default WorkCaseStudy;
