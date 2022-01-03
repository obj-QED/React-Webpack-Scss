import React, { useState } from 'react';
import ReactPlayer from 'react-player'

const Accordion = ({ title, content, videoFileUrl }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                <div>{title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive &&
                <div className="accordion-content">
                    {content}
                    <ReactPlayer
                        className='react-player'
                        url={ videoFileUrl }
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