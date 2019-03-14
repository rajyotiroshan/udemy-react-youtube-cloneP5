import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

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
        console.log("From the app", video);
    };

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
            </div>
            
        );
    }
}

export default App