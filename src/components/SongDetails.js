import { connect } from 'react-redux'
import react from 'react'

const SongDetails = (props) =>{

 //console.log('props.song' , props.song.map((song)=>song.title));

if(props.song.length===0)
return <div>Select a song</div>

    return (
       <div>{
        props.song.map((song)=>
        <div key = {song.title}>
           { song.title}
            </div>
            )

       }</div>
    )
}

const mapStateToProps = (state) =>{

    console.log('state.selectedSong in song details', state.selectedSongReducer);

 return {
     song : state.selectedSongReducer
 }
}

export default connect (mapStateToProps)(SongDetails)

