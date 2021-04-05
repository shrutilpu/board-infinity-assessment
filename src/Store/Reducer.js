const initialState = {
    token:"",
    musicList:[]
  }
  
   const Reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MUSICLIST':
        return {...state,musicList:[...action.musiclist]}
      case 'SET_TOKEN':
        return {...state,token:action.token}
      case 'REMOVE_MUSIC':
        {
         let musics = state.musicList.filter((item,idx)=>idx!==action.index);
          return {...state,musicList:[...musics]}
        }
      default:
        return state
    }
  }
  
  export default  Reducer;