import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from 'react-player'
import classNames from 'classnames';

import ProgressBar from './ProgressBar';

// TODO: view how problem import scss file
// Style
import '../assets/style/tabs.scss'

const TabContent = ({ defaultItem, playing, video, setCurrentProgress, setPlaying, active, videoProgress, setVideoProgress }) => {

    if (active === null) {
        active = 0;
        video = defaultItem.video;
    }

    // NOTE: This is a hack to make sure the video plays on tab click and change the url
    const [isReady, setIsReady] = useState(false);
    const blobUrl = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    
    // FIX: changing the url affects the video and changes jerkily
    useEffect(() => {
        if (video !== null) {
            setIsLoading(true);
            fetch(video.url)
                .then(res => res.blob())
                .then(blob => {
                    blobUrl.current = URL.createObjectURL(blob);
                    setIsLoading(false);
                })
        }
    }, [video]);

    // HACK: needs to be improved
    // useEffect(() => {
    //     if (video.url && !isLoading && video !== null) {
    //         videoRef.current.seekTo(videoProgress["n" + active], 'fraction');
    //         playVideo(videoRef);
    //         const url = video.url;
    //         const xhr = new XMLHttpRequest();
    //         xhr.open('GET', url, true);
    //         xhr.responseType = 'blob';
    //         xhr.onload = function () {
    //             if (this.status == 200) {
    //                 const blob = this.response;
    //                 blobUrl.current = URL.createObjectURL(blob);
    //                 setIsReady(true);
    //             }
    //         };
    //         xhr.send();
    //     }
    // }, [video.url]);

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
        <div className="tab-content w-10/12 mx-auto">
            <div className="data w-full h-full">
                {video &&
                    <ReactPlayer ref={videoRef}
                        className='react-player'
                        onPlay={() => { playVideo(videoRef) }}
                        url={ blobUrl.current }
                        width={'100%'}
                        height={'100%'}
                        playing={playing}
                        muted={true}
                        onProgress={() => changeProgress(videoRef)}
                        onContextMenu={(e) => e.preventDefault()}
                        config={{
                            activePlayer: true,
                            file: {
                                attributes: { preload: "auto", crossOrigin: 'anonymous' },
                                forceAudio: true,
                                forceVideo: true,
                                // forceHLS: true,
                                hlsOptions: {
                                    autoStartLoad: true,
                                    startPosition: -1,
                                    debug: false,
                                }
                            }
                        }}
                    />
                }
            </div>
        </div>
    )
};

const tabItems = ({ items , mode, className }) => {
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
        <div className="tab">
            <div className={classNames('tab-heading mb-20',
            className,
            {
                'grid grid-cols-4 gap-5': mode === 'default',
                'center-mode': mode === 'center-mode',
            }
            )}>

                {items.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`item flex justify-between
                            ${index === active ? 'active' : ''}
                            ${index === hover || index === active && playing ? 'shadow-lg cursor-pointer border-blueCustom-200' : 'border-gray-800'}
                            `}
                            onClick={openTab}
                            onMouseEnter={mEnter}
                            onMouseLeave={mLeave}
                            data-index={index}
                        >
                            <div className="state" data-index={index}>
                                <div className={`state__icon cursor-pointer ${videoProgress["n" + index] != 1 && playing && index == active ? 'playing' : ''}`}
                                    data-index={index}>
                                    <div className="state__icon__overlay" data-index={index}>
                                        <div className="icon" data-index={index}>
                                            {/* XXX: Need rewrite */}
                                            {/* Default Icon */}
                                            {videoProgress["n" + index] != 1 && index != active &&
                                                <img src={index === hover ? "../assets/icons/tabs/Play.svg" : item.icon} data-index={index} />}

                                            {/* Click Play  */}
                                            {videoProgress["n" + index] != 1 && !playing && index == active && hover == index &&
                                                <img onClick={pauseClick} src="../assets/icons/tabs/Pause.svg" data-index={index} />}
                                            {/* Playing */}
                                            {videoProgress["n" + index] != 1 && playing && index == active && hover != index &&
                                                <img src="../assets/icons/tabs/Playing.svg" data-index={index} />}


                                            {/* Playing Hover or Click */}
                                            {videoProgress["n" + index] != 1 && playing && index == active && hover == index &&
                                                <img onClick={pauseClick} src="../assets/icons/tabs/Playing.svg" data-index={index} />}
                                            {videoProgress["n" + index] != 1 && !playing && index == active && hover != index &&
                                                <img src="../assets/icons/tabs/Pause.svg" data-index={index} />}

                                            {/* Reload */}
                                            {videoProgress[`n${index}`] == 1 &&
                                                <img onClick={() => { let obj = videoProgress; obj["n" + index] = 0; setVideoProgress({ ...obj }); setTimeout(pauseClick, 0); } } src="../assets/icons/tabs/Repeat.svg" data-index={index} />}
                                        </div>
                                    </div>
                                </div>
                                {/* Hover */}
                                {videoProgress["n" + index] != 1 && index != active &&
                                    <span className={`video-text ${index === hover ? '' : 'hidden'}`} data-index={index}>
                                        Play
                                    </span>}

                                {/* Playing */}
                                {videoProgress["n" + index] != 1 && playing && index == active &&
                                    <span className={` video-text `} data-index={index}>
                                        Playing
                                    </span>}

                                {/* Pause */}
                                {videoProgress["n" + index] != 1 && !playing && index == active &&
                                    <span className={` video-text `} data-index={index}>
                                        Pause
                                    </span>}

                                {/* Reload */}
                                {videoProgress["n" + index] == 1 &&
                                    <span className={` video-text `} data-index={index}>
                                        Replay
                                    </span>}
                            </div>
                            <div className="item__text ml-6" data-index={index}>
                                <div className="title mb-1.5" data-index={index}>{item.title}</div>
                                <div className="subtitle" data-index={index}>{item.subtitle}</div>
                                <div className={`progressbar-block ${playing && index == active ? 'playing' : ''}`} data-index={index}>
                                    {index === active && // ALERT: This is the only way to make the progressbar work properly
                                        <ProgressBar done={currentProgress} /> 
                                        // FIX: loading fast, need to fix it slow loading progressbar
                                    }
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <TabContent {...items[active]} defaultItem={items[0]} playing={playing} setCurrentProgress={setCurrentProgress} setPlaying={setPlaying} active={active} videoProgress={videoProgress} setVideoProgress={setVideoProgress} />
        </div>
    );
};

export default tabItems;