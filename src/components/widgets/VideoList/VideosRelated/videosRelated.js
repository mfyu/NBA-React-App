import React from 'react';
import style from '../videoList.module.css';
import VideosTemplate from '../videosTemplate';


const videosRelated = (props) => {
    return (
        <div className={style.relatedWrapper} >
            <VideosTemplate teams={props.teams} data={props.data}/>
        </div>
    );
};

export default videosRelated;