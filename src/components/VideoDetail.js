import React from 'react';
import './../styles/VideoDetail.css';

const VideoDetail = ({ video }) => {
    if (!video) {
        return (<button className="button is-white is-large is-loading"></button>)
    }
    const { description, id, title } = video;
    const vidUrl = `https://www.youtube.com/embed/${id}`;

    return (
        <div>
            <div className="image is-16by9">
                <iframe src={vidUrl}></iframe>
            </div>
            <div className="box">
                <div className="title is-5">{title}</div>
                <div className="subtitle is-7">{description}</div>
            </div>
        </div>
    )
}

export { VideoDetail };