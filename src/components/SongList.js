import {Component} from 'react'
import {connect} from 'react-redux'
import {selectSong} from '../action'

class SongList extends Component{


    render(){
      //  console.log(this.props.songs);
        return (
            <div>
                {this.props.songs.map((song)=>
                {
                return(
                    <div className = 'ui divided list' key = {song.title}>
                    <div className = 'item' >
                    <div className ={'right floated content'}>
                        <button className = 'ui button primary' 
                        onClick = {()=>
                             {
                                     this.props.selectSong(song)
                            }
                        }>Select</button>
                    </div>
                    <div>{song.title}</div>
                    </div>
                    </div>
                 )} )}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{

    console.log(state);
    return {
        songs: state.songReducer
    };
}


export default connect (mapStateToProps, {selectSong})(SongList) ;