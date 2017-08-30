import React from 'react';
import { VideoListItem } from './../components';

const VideoList = ({ videos, onSelectPlayNow }) => {
    const videoItems = videos.map(vid =>
        (<VideoListItem
            key={vid.etag}
            video={vid}
            onSelectPlayNow={onSelectPlayNow}
        />));

    return (
        <ul className="box is-gray">
            {videoItems}
        </ul>
    )
}

export { VideoList };