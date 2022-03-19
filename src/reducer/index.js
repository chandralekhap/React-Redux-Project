import {combineReducers} from 'redux'

const songReducer = () => {

    return [
        {title: 'Ye dil Hai mushkil', Duration: '3.4'},
        {title: 'Dilbara', Duration: '2.4'},
        {title: 'Sawan aya hai', Duration: '3.6'},
        {title: 'Chale jaise havaye', Duration: '1.4'},
        {title: 'I lovee you', Duration: '3.1'},
        {title: 'YYe Sham Masatani', Duration: '1.5'}
    ];

}

const selectedSongReducer = (selectedSong = [], action) => {

  
    if(action.type === 'SONG_SELECTED')
    {
        let findItemIndex = selectedSong.findIndex((item)=> item.title === action.payload.title)
        console.log('item in array',action.payload.title,findItemIndex);
 
        if(findItemIndex>=0)
         {
                return selectedSong;
        }
        else
        {
            return [...selectedSong, 
                action.payload
                       
               ];
        }
}
    return selectedSong;
}

export default combineReducers ({ songReducer, selectedSongReducer});