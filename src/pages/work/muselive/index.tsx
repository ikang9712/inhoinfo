import HomeBackButton from '@src/component/common/HomeBackBtn';
import WorkFooter from '@src/component/home/Works/WorkFooter';
import WorkImageSlider from '@src/component/home/Works/WorkImageSlider';
import WorkTitle from '@src/component/home/Works/WorkTitle';
import HeaderContext from '@src/context/header.context';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useContext, useEffect, useRef } from 'react';

const WorkMuseLive = () => {
  const firstSwiperSrcList = [
    '/images/home/work/muselive/1.1.png',
    '/images/home/work/muselive/1.2.png',
  ];
  const secondSwiperSrcList = [
    '/images/home/work/muselive/2.1.png',
    '/images/home/work/muselive/2.2.png',
  ];
  const { activateBodyLock } = useContext(HeaderContext);
  const workRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (activateBodyLock) {
      console.log('disable body scroll');
      disableBodyScroll(workRef.current as HTMLElement);
    } else {
      console.log('enable body scroll');
      enableBodyScroll(workRef.current as HTMLElement);
    }
  }, [activateBodyLock]);
  return (
    <div>
      <div ref={workRef} className="work-container">
        <div>
          <WorkTitle
            titleName={['muse', 'live']}
            titleId="muselive-title"
            titleImgSrc="/images/home/work/muselive/muselive.title.png"
          />

          <div className="work-content">
            <section className="work-section">
              <div className="left">
                <div className="work-div">
                  <div className="text-container">
                    <div className="text-block">
                      <h1>
                        MuseLive is a web3 online music platform, located at San
                        Mateo, California.
                      </h1>
                      <p>
                        Their mission is to transform the live music experience
                        through high quality sound and intimate conversations
                        while providing meaningful income.
                      </p>
                      <p>
                        In order to achieve the mission, MuseLive created a
                        mobile app, in which musicians can perform and
                        communicate with their fans
                      </p>
                    </div>
                    <div className="text-block">
                      <p>
                        Its main products include a mobile app in which users
                        can host & join online concerts and a desktop app that
                        helps musicians to load presets from audio editors such
                        as Audacity.
                      </p>
                      <p>
                        My main task was implementing the streaming service that
                        is restricted to mobile app on web browser. Such
                        extension of platform allows us to contact more
                        potential users with increased accessibility.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right initial">
                <div className="block">
                  <h2>
                    <a target="_blank" href="https://www.muse.live">
                      www.muse.live
                    </a>
                  </h2>
                  <p>MuseLive</p>
                </div>
                <div className="block">
                  <h2>Role</h2>
                  <p>Software Engineer</p>
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
                </div>
              </div>

              <div className="right">
                <h2>How to enter a concert.</h2>
                <p>
                  Users who pre-purchased tickets can join the concerts with the
                  code they receive via email.
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
                        We used two different protocols to achieve both high
                        quality audio performance and low latency voice chat.
                      </h1>
                      <p>
                        There are two phases in the concert: off-stage and
                        on-stage. During the off-stage, users can talk with
                        others in real-time. When the musician starts to perform
                        the song, the protocol changes from webRTC to RTMP.
                        During the on-stage phase, users can only communicate
                        with others through text chat. Since we are using RTMP
                        protocol, the audio is loss-less and high quality.
                        However, the signal is one directuonal due to high
                        latency.
                      </p>
                    </div>

                    <div className="text-block">
                      <p>
                        Since API gateway was already established for the mobile
                        app, we did not have to implement any new API. The main
                        challenge was the implementation of the on & off stage
                        web protocol services. When a musician starts to perform
                        and ends the performance, we needed to successfully
                        interchange the protocols.
                      </p>
                      <p>
                        We utilized MUX API and Agora RTC to implement the
                        interchange. For other interactions among users such as
                        real-time text chat and emoji expression, we used
                        Socket.io to keep the same session ID and broadcast any
                        changes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="right">
                <h2>Online live concert</h2>
                <p>
                  Fans can communicate with the musician and others via
                  real-time voice & text chat service.
                </p>
              </div>
            </section>
          </div>
        </div>
        <WorkFooter src="/work/casestudy" footerName="casestudy" />
      </div>
      <HomeBackButton />
    </div>
  );
};

export default WorkMuseLive;
