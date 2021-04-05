import React from 'react';
import './MusicList.css';
import MusicElement from './MusicElement';
import {useSelector} from 'react-redux';

const MusicList = ()=>{
    const musiclist = useSelector(state=>state.musicList);
   
   
    return  <div>
        {console.log(musiclist)}
           {musiclist.length>0?musiclist.map((item,index)=>{
               return <MusicElement
                key = {item.track.id}
                artist={item.track.artists[0].name}
                previewUrl={item.track.preview_url}
                name ={item.track.name}
                spotifyUrl = {item.track.external_urls.spotify}
                index = {index}
                />
               }):<div className="MusicReplacer">Let's search happiness by searching music......</div>}
       </div>
    
}
export default MusicList;