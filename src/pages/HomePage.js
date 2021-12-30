import React from "react";
import '../assets//style/app.styles.scss';
import img from '../assets/images/img.png';
import ReactHlsPlayer from 'react-hls-player';
import VisibilitySensor from 'react-visibility-sensor';
import { Layout } from '../components//Layout';

const HomePage = () => {
  return (
    <Layout>
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20 w-8/12'>
          <img src={img} style={{ 'width': '100%', 'height': 'auto' }} />
          // if ReactHlsPlayer is visible, start playing video using the react-visibility-senso library
          <VisibilitySensor partialVisibility>
            <ReactHlsPlayer
              // create source public link to video local file
              src={'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'}
              // src='../assets/video/video.mov'
              autoPlay={true}
              controls={false}
              width="100%"
              height="auto"
              muted={true}
              hlsConfig={{
                autoStartLoad: true,
                startPosition: -1,
                debug: false,
              }}
            />
          </VisibilitySensor>
        </div>
      </div>
    </Layout>
  );
}
export default HomePage;