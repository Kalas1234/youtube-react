import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoCard from './VideoCard';
import AdVideoCard from './AdVideoCard';
import { YOUTUBE_VIDEOS_API } from '../constants';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();

        setVideos(json?.items);
    };

    useEffect(() => {
        getVideos();
    }, []);
     
    return (
        <div className="flex flex-wrap">
           {videos[0] && <AdVideoCard info={videos[0]} isAd={true} />}
           {videos?.map((video) => {
    console.log("video.id =", video.id); // 👈 Add this
    return (
        <Link key={video.id} to={`/watch?v=${video.id}`}>
            <VideoCard info={video} />
        </Link>
    );
})}

        </div>
    );
};

export default VideoContainer;
