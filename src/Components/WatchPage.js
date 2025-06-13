import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { onCloseMenu } from '../redux/appSlice';
import CommentsContainer from './CommentsContainer';

const WatchPage = () => {
    const dispatch = useDispatch();

    const [searchParams] = useSearchParams();
    console.log(searchParams);
    const videoId = searchParams.get('v');
    console.log(videoId);
    useEffect(() => {
        dispatch(onCloseMenu());
    }, []);

    console.log('check12', `https://www.youtube.com/embed/${videoId}`);
    return (
        <div className='flex flex-col'>
        <div className="px-5">
            <iframe
                width="1000"
                height="400"
                src={`https://www.youtube.com/embed/${videoId}?si=VDxM0T4sqcjMSfqz`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowFullscreen></iframe>
        </div>
        <CommentsContainer />
      </div>
    );
};
export default WatchPage;
