import { NextPage } from 'next';

// const Img = styled(Image)`
//   box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
//   border-radius: 15px;
// `;

// const PosterImage = ({
//   src,
//   width,
//   height,
// }: {
//   src: string;
//   width: number;
//   height: number;
// }) => {
//   return <Img src={src} alt="alt" width={width} height={height} />;
// };

// const ImageWrapper = styled.div`
//   & > span {
//     position: unset !important;
//   }
// `;

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
            <img src="/images/demo/poster.png" alt="alt" />
          </div>
          <div className="article">
            <header>
              <h4>2. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </header>
            <img src="/images/demo/poster.png" alt="alt" />
          </div>
          <div className="article">
            <header>
              <h4>3. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
            </header>
            <img src="/images/demo/poster.png" alt="alt" />
          </div>
        </section>
      </main>
    </div>
  );
};

export default DemoBestHorror;
