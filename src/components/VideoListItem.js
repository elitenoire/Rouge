import React from 'react';

const VideoListItem = ({ video }) => {
    const imgUrl = video.snippet.thumbnails.default.url;
    return (
        <li className="media">
            <div className="media-left">
                <figure className="image">
                    <img src={imgUrl} alt=""/>
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-5">{video.snippet.title}</p>
            </div>
        </li>
    );
};

export { VideoListItem };