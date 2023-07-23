import { NextPage } from 'next';
import Image from 'next/image';

const DemoBestHorror: NextPage = () => {
  return (
    <div className="movieBody">
      <header className="movieHeader">
        <div className="hgroup">
          <h1>Best Horror Scenes</h1>
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
      <div className="movieSort">
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
      <main className="movieMain">
        <section>
          <div className="article">
            <header>
              <h4>1. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </header>
            <div className="img-container">
              <Image
                src={'/images/demo/poster.png'}
                alt="alt"
                width={240}
                height={240}
              />
            </div>
          </div>
          <div className="article">
            <header>
              <h4>2. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </header>
            <div className="img-container">
              <Image
                src={'/images/demo/poster.png'}
                alt="alt"
                width={240}
                height={240}
              />
            </div>
          </div>
          <div className="article">
            <header>
              <h4>3. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </header>
            <div className="img-container">
              <Image
                src={'/images/demo/poster.png'}
                alt="alt"
                width={100}
                height={100}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DemoBestHorror;
