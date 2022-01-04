import React, { useState } from 'react';
import ReactPlayer from 'react-player'

const TabContent = ({ title, content, videoUrl }) => (
    <div className="tab-content">
        <div className="tab-heading__title">{title}</div>
        <div className="tab-content__content">
            <p>{content}</p>
            {videoUrl &&
                <ReactPlayer
                    className='react-player'
                    url={videoUrl}
                    width='500px'
                    height='auto'
                    playing
                    muted={true}
                    config={{
                        file: {
                            forceHLS: false,
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
);

const tabItems = ({ items }) => {
    const [active, setActive] = React.useState(null);
    const openTab = e => setActive(+e.target.dataset.index);
    
    return (
        <div className='tab'>
            <div className="tab-heading">
                {items.map((n, i) => (
                    <button
                        className={`tab-title ${i === active ? 'active' : ''}`}
                        onClick={openTab}
                        data-index={i}
                    >{n.title}</button>
                ))}
            </div>
            {items[active] && <TabContent {...items[active]} />}
        </div>
    );
};

export default tabItems;