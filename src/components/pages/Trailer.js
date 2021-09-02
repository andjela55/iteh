import React from 'react'

function Trailer() {
    return (
        <div className='trailer-container'>
          <video className="trailer-video" src='/videos/video.mp4' autoPlay loop muted />
         
        </div>
      );
}

export default Trailer
