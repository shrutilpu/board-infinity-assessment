# Music-Mania

This project was created for the assesment of board-infinity.

# Technology used
1. React.js
   1.1 functional components
   1.2 hooks => useEffect, useSelector, usedispatch
2. Redux
3. Rest API (spotify search api)

# Features
1. search music => search could be done using artist name,album name,playlist or track. 
2. preview searched music 30sec audio.
3. listen using spotify (external link)
4. remove the music from list

# components
1. search {code for search and api call}
2. MusicElement {single music element contains description, preview ,remove and play with spotify}
   2.1 props => {name(track name) ,previewUrl(url for preview mp3),spotifyUrl,index,artist}
3. MusicList {display list of music Elemnts fetched using search (conatiner for musicElements)}

deploy link: https://music-searcher.netlify.app/