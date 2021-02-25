import React from 'react';
import {VideoWrap} from './video.style'

const Video = ({src, ...restProps}) => {
    return (
        <VideoWrap>
            <video muted autoPlay playsInline loop poster="true">
                <source src={src} type="video/mp4" />
            </video>
        </VideoWrap>
    )
}

export default Video; 