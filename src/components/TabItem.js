import React from 'react';
import ReactPlayer from 'react-player'
import Progressbar from './Progressbar';

const TabContent = ({ defaultItem, playing, title, content, video, setCurrentProgress, setPlaying, active, videoProgress, setVideoProgress }) => {

    if (active === null) {
        active = 0;
        title = defaultItem.title;
        content = defaultItem.content;
        video = defaultItem.video;
    }

    const videoRef = React.createRef(null);

    const changeProgress = (videoRef) => {
        const ch = videoProgress;

        if (videoRef.current !== null) {
            ch["n" + active] = (+videoRef.current.getCurrentTime() / +videoRef.current.getDuration());
            setVideoProgress(ch);
            setCurrentProgress((+videoRef.current.getCurrentTime() / +videoRef.current.getDuration()));
            if (videoProgress["n" + active] == 1) {
                setPlaying(false);
            }
        }
    }

    const playVideo = (videoRef) => {
        videoRef.current.seekTo(videoProgress["n" + active], 'fraction');
    }

    return (
        <div className="tab-content">
            <div className="tab-heading__title">{title}</div>
            <div className="tab-content__content">
                <p>{content}</p>
                {video &&
                    <ReactPlayer ref={videoRef}
                        className='react-player'
                        onPlay={() => { playVideo(videoRef) }}
                        url={video.url}
                        width='500px'
                        height='auto'
                        playing={playing}
                        controls={false}
                        muted={true}
                        onProgress={() => changeProgress(videoRef)}
                        // onContextMenu={(e) => e.preventDefault()}
                        config={{
                            file: {
                                attributes: {
                                    preload: "auto",
                                    controls: false,
                                },
                                forceAudio: true,
                                forceVideo: true,
                                forceHLS: true,
                                forceDash: true,
                                hlsOptions: {
                                    autoStartLoad: true,
                                    startPosition: -1,
                                    debug: false,
                                }
                            }
                        }}
                    />
                }
                <div>
                    {video &&
                        <div>
                            {video.time}
                        </div>
                    }
                </div>
            </div>
        </div>
    )
};

const tabItems = ({ items }) => {
    let createProgressState = () => {
        let obj = {};
        for (let i = 0; i < items.length; i++) {
            obj["n" + i] = 0;
        }
        return (obj);
    }

    const [videoProgress, setVideoProgress] = React.useState(createProgressState());
    const [currentProgress, setCurrentProgress] = React.useState(null);


    const [active, setActive] = React.useState(null);
    const [hover, setHover] = React.useState();
    const [playing, setPlaying] = React.useState(false);
    const openTab = e => {
        if (+e.target.dataset.index !== active) {
            setPlaying(true);

        }
        setCurrentProgress(videoProgress["n" + e.target.dataset.index])
        setActive(+e.target.dataset.index);
    }
    const mEnter = e => {
        setHover(+e.target.dataset.index);
    }
    const mLeave = () => {
        setHover();
    }
    const pauseClick = () => {
        setPlaying(!playing);
    }

    return (
        <div className='tab'  >
            <div className="tab-heading">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`tab-block mx-10 cursor-pointer ${index === active ? 'active' : ''} ${index === hover ? 'shadow-lg' : ''}`}
                        onClick={openTab}
                        onMouseEnter={mEnter}
                        onMouseLeave={mLeave}
                        data-index={index}

                    >
                        <div className='tab-block__icon' data-index={index}>
                            {videoProgress[`n${index}`] == 1 && <img onClick={() => { let obj = videoProgress; obj["n" + index] = 0; setVideoProgress({ ...obj }); setTimeout(pauseClick, 0) }} src="../assets/icons/tabs/refresh.svg" data-index={index} />}
                            {videoProgress["n" + index] == 1 && <span className={` video-text `} data-index={index}>
                                again
                            </span>}
                            {videoProgress["n" + index] != 1 && !playing && index == active && hover == index && < img onClick={pauseClick} src="../assets/icons/tabs/play-active.svg" data-index={index} />}
                            {videoProgress["n" + index] != 1 && playing && index == active && hover != index && <img src="../assets/icons/tabs/play-active.svg" data-index={index} />}
                            {videoProgress["n" + index] != 1 && playing && index == active && hover == index && <img onClick={pauseClick} src="../assets/icons/tabs/pause.svg" data-index={index} />}
                            {videoProgress["n" + index] != 1 && !playing && index == active && hover != index && <img src="../assets/icons/tabs/pause.svg" data-index={index} />}
                            {videoProgress["n" + index] != 1 && index != active && <img src={index === hover ? "../assets/icons/tabs/play.svg" : "../assets/icons/tabs/humburger.svg"} data-index={index} />
                            }
                            {videoProgress["n" + index] != 1 && index != active && <span className={` video-text ${index === hover ? '' : 'hidden'}`} data-index={index}>
                                Play
                            </span>}
                            {videoProgress["n" + index] != 1 && playing && index == active && <span className={` video-text `} data-index={index}>
                                Playing
                            </span>}
                            {videoProgress["n" + index] != 1 && !playing && index == active && <span className={` video-text `} data-index={index}>
                                Continue
                            </span>}
                        </div>
                        <div className='tab-block__text' data-index={index}>
                            <div className='title' data-index={index}>{item.title}</div>
                            <div className='subtitle' data-index={index}>{item.subtitle}</div>
                        </div>
                        <div className='tab-block__progressbar' data-index={index}>
                            {index === active && <Progressbar done={currentProgress} />}
                        </div>
                    </div>

                ))}
            </div>
            {<TabContent {...items[active]} defaultItem={items[0]} playing={playing} setCurrentProgress={setCurrentProgress} setPlaying={setPlaying} active={active} videoProgress={videoProgress} setVideoProgress={setVideoProgress} />}
        </div>
    );
};

export default tabItems;