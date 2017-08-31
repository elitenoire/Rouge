import React from 'react';
import './../styles/VideoListItem.css'

const VideoListItem = ({ video, onSelectPlayNow }) => {
    const imgUrl = video.thumbnails.default.url;
    const { title, channelTitle } = video;
    return (
        <li onClick={() => onSelectPlayNow(video)}>
            <a>
                <div className="media">
                    <div className="media-left">
                        <figure className="image">
                            <img src={imgUrl} alt=""/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div>
                            <p
                                className="title is-6 is-clipped"
                                title={title}
                            >
                                {title}
                            </p>
                            <p className="subtitle is-6">{channelTitle}</p>
                        </div>
                    </div>
                </div>
            </a>
        </li>
    );
};

export { VideoListItem };