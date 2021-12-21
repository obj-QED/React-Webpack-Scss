import { Component } from 'react';
import '../../assets//style/app.styles.scss';
import VisibilitySensor from 'react-visibility-sensor';
import myVideo from '../../assets/video/video.mov';


import ReactHlsPlayer from 'react-hls-player';


class HomePage extends Component {

  render() {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-black font-bold rounded-lg border shadow-lg p-10 m-20 w-8/12'>
          <ReactHlsPlayer
            src={myVideo}
            autoPlay={true}
            controls={false}
            width="100%"
            height="auto"
            hlsConfig={{
              maxLoadingDelay: 4,
              minAutoBitrate: 0,
              lowLatencyMode: true,
            }}
          />
        </div>
      </div>
    );
  }
}

export default HomePage;