import React, { useState, useEffect, useRef } from 'react'
import ReactPlayer from 'react-player/lazy'
import classNames from 'classnames'

import ProgressBar from './ProgressBar'

// Style
import '../assets/style/tabs.scss'

const TabContent = ({ defaultItem, playing, video, setCurrentProgress, setPlaying, active, videoProgress, setVideoProgress }) => {
  if (active === null) {
    active = 0
    video = defaultItem.video
  }

  const videoRef = React.createRef(null)

  const changeProgress = (videoRef) => {
    // сделай changeProgress при изменении прогресса видео по микросекундам
    const ch = videoProgress
    if (videoRef.current !== null) {
      const currentTime = videoRef.current.getCurrentTime()
      const duration = videoRef.current.getDuration()
      // const seek = videoRef.current.seekTo()

      // console.log(seek)

      ch['n' + active] = currentTime / duration
      setVideoProgress(ch)
      setCurrentProgress((currentTime / duration) * 100)
      if (videoProgress['n' + active] == 1) {
        setPlaying(false)
      }
    }
  }
  const playVideo = (videoRef) => {
    videoRef.current.seekTo(videoProgress['n' + active], 'seconds')
  }

  return (
    <div className='tab-content w-10/12 mx-auto'>
      <div className='data w-full h-full'>
        {video && (
          <ReactPlayer
            ref={videoRef}
            className='react-player'
            onPlay={() => {
              playVideo(videoRef)
            }}
            url={video.url}
            width={'100%'}
            height={'100%'}
            playing={playing}
            muted={true}
            onProgress={() => changeProgress(videoRef)}
            onContextMenu={(e) => e.preventDefault()}
            config={{
              file: {
                attributes: { preload: 'auto', crossOrigin: 'anonymous' },
              },
            }}
          />
        )}
      </div>
    </div>
  )
}

const tabItems = ({ items, mode, className }) => {
  const [isReady, setIsReady] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [video, setVideo] = useState(null)

  let createProgressState = () => {
    let obj = {}
    for (let i = 0; i < items.length; i++) {
      obj['n' + i] = 0
    }
    return obj
  }

  const [videoProgress, setVideoProgress] = React.useState(createProgressState())
  const [currentProgress, setCurrentProgress] = React.useState(null)
  const [active, setActive] = React.useState(null)
  const [hover, setHover] = React.useState()
  const [playing, setPlaying] = React.useState(false)

  const openTab = (e) => {
    if (+e.target.dataset.index !== active) {
      setPlaying(true)
    }
    setCurrentProgress(videoProgress[e.target.dataset.index])
    setActive(+e.target.dataset.index)
  }

  const mEnter = (e) => {
    setHover(+e.target.dataset.index)
  }

  const mLeave = () => {
    setHover()
  }

  const pauseClick = () => {
    setPlaying(!playing)
  }

  useState(() => {
    items.forEach((item) => {
      if (items.length > 0 && !video) {
        fetch(item.video.url)
          .then((res) => res.blob())
          .then((blob) => {
            item.video.url = URL.createObjectURL(blob)
            setIsReady(true)
            setVideo(item.video)
          })
        setIsLoading(true)
      }
    })
  }, [items])
  return (
    <div className='tab'>
      <div
        className={classNames('tab-heading mb-20', className, {
          'grid grid-cols-4 gap-5': mode === 'default',
          'center-mode': mode === 'center-mode',
        })}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={`item flex justify-between
							${index === active ? 'active' : ''}
							${index === hover || (index === active && playing) ? 'shadow-tab-head cursor-pointer border-blueCustom-200' : 'border-gray-800'}
							`}
              onClick={openTab}
              onMouseEnter={mEnter}
              onMouseLeave={mLeave}
              data-index={index}
            >
              <div className='state' data-index={index}>
                <div
                  className={`state__icon cursor-pointer ${videoProgress['n' + index] != 1 && playing && index == active ? 'playing' : ''}`}
                  data-index={index}
                >
                  <div className='state__icon__overlay' data-index={index}>
                    <div className='icon' data-index={index}>
                      {/* Default Icon */}
                      {videoProgress['n' + index] != 1 && index != active && (
                        <img src={index === hover ? '../assets/icons/tabs/Play.svg' : item.icon} data-index={index} />
                      )}

                      {/* Playing */}
                      {videoProgress['n' + index] != 1 && playing && index == active && hover != index && (
                        <img src='../assets/icons/tabs/Playing.svg' data-index={index} />
                      )}

                      {/* Playing Hover or Click */}
                      {videoProgress['n' + index] != 1 && playing && index == active && hover == index && (
                        <img src='../assets/icons/tabs/Playing.svg' data-index={index} />
                      )}

                      {/* Reload */}
                      {videoProgress[`n${index}`] == 1 && (
                        <img
                          onClick={() => {
                            let obj = videoProgress
                            obj['n' + index] = 0
                            setVideoProgress({ ...obj })
                            setTimeout(pauseClick, 0)
                          }}
                          src='../assets/icons/tabs/Repeat.svg'
                          data-index={index}
                        />
                      )}
                    </div>
                  </div>
                </div>
                {/* Hover */}
                {videoProgress['n' + index] != 1 && index != active && (
                  <span className={`video-text ${index === hover ? '' : 'hidden'}`} data-index={index}>
                    Play
                  </span>
                )}

                {/* Playing */}
                {videoProgress['n' + index] != 1 && playing && index == active && (
                  <span className={` video-text `} data-index={index}>
                    Playing
                  </span>
                )}

                {/* Reload */}
                {videoProgress['n' + index] == 1 && (
                  <span className={` video-text `} data-index={index}>
                    Replay
                  </span>
                )}
              </div>
              <div className='item__text ml-6' data-index={index}>
                <div className='title mb-1.5' data-index={index}>
                  {item.title}
                </div>
                <div className='subtitle' data-index={index}>
                  {item.subtitle}
                </div>
                <div className={`progressbar-block ${playing && index == active ? 'playing' : ''}`} data-index={index}>
                  {index === active && <ProgressBar done={currentProgress} />}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      {
        <TabContent
          {...items[active]}
          defaultItem={items[0]}
          playing={playing}
          setCurrentProgress={setCurrentProgress}
          setPlaying={setPlaying}
          active={active}
          videoProgress={videoProgress}
          setVideoProgress={setVideoProgress}
        />
      }
    </div>
  )
}

export default tabItems;