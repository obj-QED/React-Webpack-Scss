import React from 'react';
import ReactPlayer from 'react-player'

const TabContent = ({ title, content, video }) => (
    <div className="tab-content">
        <div className="tab-heading__title">{title}</div>
        <div className="tab-content__content">
            <p>{content}</p>
            {video.url &&
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
                                debug: true,
                            }
                        }
                    }}
                />
            }               
            <div>
                // console log
                <br />
                playedSeconds: 0.871652, played: 0.02855378872511696, loadedSeconds: 30.526667, loaded: 1
                <br />
                { video.time }
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
                    <button
                        key={index}
                        className={`tab-title ${index === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={index}
                    >{item.title}</button>
                ))}
            </div>
            {items[active] && <TabContent {...items[active]} />}
        </div>
    );
};

export default tabItems;