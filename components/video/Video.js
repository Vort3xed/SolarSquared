/* eslint-disable */
import { useCallback, useEffect, useState } from 'react';
import styles from './Video.module.css';
import StyledTextV2Small from '../StyledTextSuperSmallV2/StyledTextSuperSmallV2';


function Video() {
  const [video, setVideo] = useState('design');
  const [documentWidth, setDocumentWidth] = useState(0);

  const VideoPlayWithDelay = useCallback((src) => {
    setVideo(src);
    document.getElementById('videoContainer').style.opacity = 1;
    document.getElementById('video').play();
  }, []);

  useEffect(() => {
    setDocumentWidth(document.documentElement.clientWidth);
    setTimeout(() => {
      document.getElementById('videoContainer').style.opacity = 1;
      document.getElementById('video').play();
    }, 500)
  }, []);

  const VideoPlay = useCallback((src) => {
    setVideo(src);
    document.getElementById('videoContainer').style.opacity = 1;
    document.getElementById('video').play();
  }, []);

  const VideoPause = useCallback(() => {
    document.getElementById('videoContainer').style.opacity = 1;
    document.getElementById('video').play();
    // setVideo('');
  }, []);

  const Heading = useCallback(
    ({ src, text }) => {
      return (

        <>
        {/* {
          setTimeout(() => {
            VideoPlay(src);
          }, 500)
        } */}
          <h1 data-aos="fade-down"
            // onMouseEnter={() => {
            //   VideoPlay(src);
            // }}
            // onMouseLeave={() => {
            //   VideoPlay(src);
            // }}
            // onTouchStart={() => {
            //   VideoPlay(src);
            // }}

          >
            {text}
          </h1>
          {/* <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 mt-2" data-aos="zoom-y-out" data-aos-delay="300">Solving the world&apos;s energy crisis, one crystal at a time.</p>
            <div className="max-w-xs mx-auto sm:justify-center" data-aos="zoom-y-out" data-aos-delay="600">
              <a href='/about'>
                <ButtonV2>
                  <span className="flex items-center"> About Us </span>
                </ButtonV2>
              </a>
              &nbsp;
              <a href='/product'>
                <ButtonV2>
                  <span className="flex items-center"> Product </span>
                </ButtonV2>
              </a>
            </div>
          </div> */}
        </>
      );
    },
    [VideoPause, VideoPlay]
  );

  return (
    <section className={styles.video}>
      {documentWidth >= 600 && (
        <div id="videoContainer" className={styles.designVideoContainer}
        onMouseEnter={() => {
          VideoPlayWithDelay('cloudloop');
        }}
        >
          {/* {(() => {
            setTimeout(() => {
              console.log('Playing video')
              VideoPlayWithDelay('waves');
            }, 800);
          })()} */}
        
          <video
            src="/video/cloudloop.mp4"
            autoPlay
            muted
            loop
            controls={false}
            id="video"
            className={
              video === 'cloudloop' ? 'w-screen opacity-100' : 'w-0 opacity-0'
            }

            
          >
            <track kind="captions" />
          </video>
        </div>
      )}

      <div className={styles.content}>
        {documentWidth >= 600 ? (
          <>
            {/* <Heading src="cloudloop" text="SolarSquared" /> */}
            <StyledTextV2Small text="SolarSquared" />
          </>
        ) : (
          <>
            <h1>SolarSquared</h1>
          </>
        )}
      </div>
    </section>
  );
}

export default Video;
