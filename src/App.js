import { useEffect } from 'react';
import './App.css';
import Search from './Components/Search/Search';
import axios from 'axios';
import qs from 'query-string';
import {useDispatch,useSelector} from 'react-redux';
import MusicList from './Components/MusicList/Musiclist';

function App() {
  const clientId ="2c34ca50f4b141a28364c443da71c63e";
  const clientSecret="b13bc86b4f714fe18bca260764b99079";
  const musiclist = useSelector(state=>state.musiclist);
  
  const dispatch =  useDispatch();
  const data = qs.stringify({
    'grant_type': 'client_credentials' 
   });
   
  useEffect(()=>{
    axios('https://accounts.spotify.com/api/token',{
      method:'post',
      headers: {
        'Authorization': 'Basic ' + btoa(clientId+':'+clientSecret),
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
      data 
    }).then(res=>{
      //console.log(res)
     dispatch({type:"SET_TOKEN",token:res.data.access_token});
    })
    .catch(err=>console.log(err));
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <span className="Logo">Music Mania</span>
        <span className="middleText">Let the beat Start</span>
        <Search/>
      </header>
      <div className="Musics">
      <MusicList/>
      </div>
      
    </div>
  );
}

export default App;