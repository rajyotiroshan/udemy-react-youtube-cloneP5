import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos})=>{
    const renderedVideoList = videos.map((video)=>{
        return <VideoItem />;
    });

    return (
        <div>
            {renderedVideoList}
        </div>
    );

};

export default VideoList;