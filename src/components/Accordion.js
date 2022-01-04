import React, { useState } from 'react';
import ReactPlayer from 'react-player'


const Accordion = ({ item, index, onClick }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={`accordion-item ${isActive ? 'active' : ''}`}>
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{item.title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive &&
                <div className="accordion-content">
                    {item.content}
                    <ReactPlayer
                        className='react-player'
                        url={item.videoFileUrl}
                        width='500px'
                        height='auto'
                        playing
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
                </div>
            }
        </div>
    );
};

export default Accordion;