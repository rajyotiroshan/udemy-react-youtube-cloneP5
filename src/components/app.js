import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    
    state= {
        videos: [],
        selectedVideo: null
    }

    //callback for SearchBar submit
    onTermSubmit = async (srchTerm)=>{
        const response = await youtube.get('/search',{
            params: {
                q: srchTerm
            }
        });

        this.setState({videos: response.data.items});
        
    }
    
    //callback for indivisual video click.
    onVideoSelect = (video)=> {
        this.setState({selectedVideo: video});
    };

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                {this.state.selectedVideo && <VideoDetail video={this.state.selectedVideo}/>}
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
            
        );
    }
}

export default App