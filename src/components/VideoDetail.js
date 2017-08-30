import React from 'react';
import './../styles/VideoDetail.css';

const VideoDetail = ({ video }) => {
    if(!video){
        return (<button className="button is-white is-large is-loading"></button>)
    }
    const vidUrl = `https://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
        <div className="container">
            <div className="image is-16by9">
                <iframe src={vidUrl}></iframe>
            </div>
            <div className="box">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export { VideoDetail };