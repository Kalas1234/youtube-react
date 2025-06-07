import React from 'react';

const VideoCard = ({ info, isAd }) => {
    const snippet = info?.snippet || {};
    const statistics = info?.statistics || {};


    const { channelTitle, thumbnails, title } = snippet;
    const viewCount = statistics.viewCount || 0;

    return (
        <div className="m-2 p-2 shadow-lg w-72">
            <img className="rounded-lg py-2" alt="video" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
                 {isAd && <li className="text-white font-bold py-2">Ad</li>}
            </ul>
        </div>
    );
};
export default VideoCard;
