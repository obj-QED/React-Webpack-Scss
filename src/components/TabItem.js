import React from 'react';
import ReactPlayer from 'react-player'

import TabIconOne from '../assets/icons/tabs/humburger.svg'

const TabContent = ({ title, content, video }) => (
    <div className="tab-content">
        <div className="tab-heading__title">{title}</div>
        <div className="tab-content__content">
            <p>{content}</p>
            {video &&
                <ReactPlayer // ref={player => ( this.player = player )}
                    className='react-player'
                    url={video.url}
                    width='500px'
                    height='auto'
                    playing
                    muted={true}
                    onProgress={(e) => console.log(e)}
                    config={{
                        file: {
                            attributes: { preload: "auto" },
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
            <div>
                {video &&
                    <div>
                        {video.time}
                    </div>
                }
            </div>
        </div>
    </div>
);

const tabItems = ({ items }) => {
    const [active, setActive] = React.useState(0);
    const openTab = e => setActive(+e.target.dataset.index);

    return (
        <div className='tab'>
            <div className="tab-heading">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`tab-block ${index === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={index}
                    >
                        <div className='tab-block__icon'>
                            <TabIconOne />
                            <span className='video-text hidden'>
                                Play
                            </span>
                        </div>
                        <div className='tab-block__text'>
                            <div className='title'>{item.title}</div>
                            <div className='subtitle'>{item.subtitle}</div>
                        </div>
                        <div className='tab-block__progressbar'></div>
                    </div>
                ))}
            </div>
            <TabContent {...items[active]} />
        </div>
    );
};

export default tabItems;