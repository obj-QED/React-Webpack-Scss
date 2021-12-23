import { Component } from 'react';
import '../assets//style/app.styles.scss';
import img from '../assets/images/img.png';
import ReactHlsPlayer from 'react-hls-player';
// import VisibilitySensor from 'react-visibility-sensor';


class HomePage extends Component {
  
  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20 w-8/12'>
          <img src={ img } style={{ 'width': '100%', 'height': 'auto'}}></img>
          <ReactHlsPlayer
            // src="https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
            src={'../assets/video/video.mov'}
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
          </div>
      </div>
    );
  }
}

export default HomePage;