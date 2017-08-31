import React from 'react';
import { VideoListItem } from './../components';

const VideoList = ({ videos, onSelectPlayNow }) => {
    const videoItems = videos.map(vid =>
        (<VideoListItem
            key={vid.id}
            video={vid}
            onSelectPlayNow={onSelectPlayNow}
        />));

    return (
        <div className="box is-gray">
            <ul className="menu-list">
                {videoItems}
            </ul>
        </div>
    )
}

export { VideoList };