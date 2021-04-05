import React,{useState} from 'react';
import './Search.css';
import {Icon} from '@material-ui/core';
import {SearchOutlined} from '@material-ui/icons'
import axios from 'axios';
import {useSelector,useDispatch} from 'react-redux';
const Search = ()=>{

  const [searchText ,setSearchText] = useState();
  const token = useSelector(state=>state.token);
  const dispatch = useDispatch();

  const onSearchHandler = ()=>{
     console.log(searchText);
     if(searchText){
       console.log(token)
       axios({
         method:'get',
         url:`https://api.spotify.com/v1/search?q=name:${searchText}&type=playlist&market=IN`,
         headers:{
           'Authorization':`Bearer ${token}`
         }
       }).then(res=>{
        
       //console.log(res.data.playlists.items[0].tracks.href);
       axios({
        method: 'get',
        url: res.data.playlists.items[0].tracks.href,
        headers:{
         'Authorization':`Bearer ${token}`   
        }
      }).then(res=>{
        console.log(res.data.items);
       dispatch({
         type: 'SET_MUSICLIST',
         musiclist: res.data.items
       });

      })
      
       }).catch(e=>console.log(e.message));
     }
  }
   return <div className="SearchContainer">

         <input type="text" placeholder="artist/album/tracks" onChange={(e)=>setSearchText(e.target.value)}/>
         <div className="SearchIcon" onClick={onSearchHandler}>
            <Icon><SearchOutlined /></Icon>  
         </div> 

   </div>
}
export default Search;
