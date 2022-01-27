import React from 'react'

export default function Progressbar({ done }) {
  return (
    <div className={'progressbar w-full h-1 pointer-events-none mt-4 overflow-hidden'}>
      <div
        className={'progressbar-done h-full'}
        style={{
          width: `${done}%`,
          transition: `2.2s width ease`
        }}
      ></div>
    </div>
  )
}
