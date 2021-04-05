import { Icon } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import React from 'react';
import './MusicElement.css';
import {useDispatch} from 'react-redux';

const MusicElement = ({name,spotifyUrl,previewUrl,artist,index})=>{

    const dispatch = useDispatch();
    const musicRemoveHandler = ()=>{
        dispatch({
            type:"REMOVE_MUSIC",
            index:index
        })
    }

    return <div className="MusicElement">
        <div className = "Description">
        <span className="Desc">Song:   {name}</span>
        <span className="Desc">Artist:   {artist}</span>
        </div>
        <audio controls  muted>
             <source src={previewUrl} type="audio/mpeg" />
             Your browser does not support the audio element.
         </audio>
        <a href={spotifyUrl} target="iframe_a">play with spotify</a>
        <div onClick={musicRemoveHandler}><Icon><CancelIcon/></Icon></div>
    </div>
}

export default MusicElement;