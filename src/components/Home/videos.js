import React, { Component } from 'react';
import VideoList from '../widgets/VideoList/videoList';

class Videos extends Component {
    render() {
        return (
            <div>
                <VideoList
                type="card"
                title={false}
                loadmore={true}
                start={0}
                amount={8}
            />
            </div>
        );
    }
}

export default Videos;