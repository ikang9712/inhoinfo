import HomeBackButton from '@src/component/common/HomeBackBtn';
import HeaderContext from '@src/context/header.context';
import { NextPage } from 'next';
import Image from 'next/image';
import { useContext, useEffect } from 'react';

// add comment to fix bug issue for vercel
const DemoBestHorror: NextPage = () => {
  const { setActivated } = useContext(HeaderContext);
  useEffect(() => {
    setActivated(true);
  }, []);
  return (
    <div className="movie-body">
      <HomeBackButton />
      <header className="movie-header">
        <div className="hgroup">
          <h1>Best</h1>
          <h1>
            <span>H</span>
            <span className="svg-container">
              <Image
                src={'/images/demo/besthorror/eye.svg'}
                alt="blinking eye"
                width={50}
                height={50}
              />
            </span>
            <span>rr</span>
            <span className="svg-container">
              <Image
                src={'/images/demo/besthorror/eye.svg'}
                alt="blinking eye"
                width={50}
                height={50}
              />
            </span>
            <span>r</span>
          </h1>
          <h1>Scenes</h1>
        </div>
        <div className="h3group">
          <h3>
            An ever growing collection featuring some of the best scenes in
            horror.
          </h3>
          <p>
            “Best Horror Scenes” is a collection of scenes I feel are some of
            the most affecting in horror. Some may be simple black cat scares,
            others may be more subdued or nuanced. Many come from films that
            aren&apos;t necessarily “horror” but have elements or threads of
            horror, and all have the same general effect: unease, dread, fear,
            shock, disgust.
          </p>
          <nav>
            <a>Watch on YouTube</a>
            <a>Suggest a Scene</a>
            <a>Get Episode Notices</a>
            <a>Contact</a>
            <a>RSS</a>
          </nav>
        </div>
      </header>
      <div className="movie-sort">
        <div className="box">
          <span>Currently viewing&nbsp;</span>
          <div className="buttonwrap">
            <a>everything</a>
          </div>
          <span>&nbsp;sorted by&nbsp;</span>
          <div>
            <a>random</a>
          </div>
          <span>.</span>
        </div>
      </div>
      <main className="movie-main">
        <section>
          <div className="article">
            <header>
              <h4>Misery (1990)</h4>
              <h5>Directed by Rob Reiner</h5>
            </header>
            <div className="video-container">
              <iframe src="https://player.vimeo.com/video/409898019"></iframe>
            </div>
          </div>
          <div className="article">
            <header>
              <h4>Sinister (2012)</h4>
              <h5>Directed by Scott Derrickson</h5>
            </header>
            <div className="video-container">
              <iframe src="https://player.vimeo.com/video/411775137"></iframe>
            </div>
          </div>
          <div className="article">
            <header>
              <h4>The House of the Devil (2009)</h4>
              <h5>Directed by Ti West</h5>
            </header>
            <div className="video-container">
              <iframe src="https://player.vimeo.com/video/607436430"></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DemoBestHorror;
