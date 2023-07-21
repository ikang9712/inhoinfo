import { NextPage } from 'next';
import Image from 'next/image';
import styled from 'styled-components';

const Img = styled(Image)`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 15px;
`;

const PosterImage = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  return <Img src={src} alt="alt" width={width} height={height} />;
};

const ImageWrapper = styled.div`
  & > span {
    position: unset !important;
  }
`;

const DemoBestHorror: NextPage = () => {
  return (
    <div className="movieBody">
      <header className="movieHeader">
        <h1>Best Horror Scenes</h1>
        <div>
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
            <ul>
              <li>Watch on YouTube</li>
              <li>Suggest a Scene</li>
              <li>Get Episode Notices</li>
              <li>Contact</li>
              <li>RSS</li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="movieMain">
        <section>
          <div className="movieMainNav">
            <div>
              Currently viewing
              <a className="" onClick={() => console.log('clicked!')}>
                everything
              </a>
              sorted by
              <a className="" onClick={() => console.log('clicked!')}>
                random
              </a>
              .
            </div>
          </div>
          <div className="movieMainWrapper">
            <div className="movieMainHeader">
              <h4>38. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
              <ImageWrapper>
                <PosterImage
                  src={'/images/demo/poster.png'}
                  width={600}
                  height={360}
                />
              </ImageWrapper>
            </div>
            <div className="movieMainHeader">
              <h4>38. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
              <ImageWrapper>
                <PosterImage
                  src={'/images/demo/poster.png'}
                  width={600}
                  height={360}
                />
              </ImageWrapper>
            </div>
            <div className="movieMainHeader">
              <h4>38. Hereditary (2018)</h4>
              <h5>Directed by Me</h5>
              <ImageWrapper>
                <PosterImage
                  src={'/images/demo/poster.png'}
                  width={600}
                  height={360}
                />
              </ImageWrapper>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DemoBestHorror;
