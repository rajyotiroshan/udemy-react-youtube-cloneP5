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

        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
        
    }
    
    //callback for indivisual video click.
    onVideoSelect = (video)=> {
        this.setState({selectedVideo: video});
    };

    render(){
        let columnLength = '';
        if(this.state.selectedVideo) {
            columnLength = "two"
        }
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>

                <div className="ui grid">
                    <div className="ui row">
                       {
                        this.state.selectedVideo  && 
                        <div className="nine wide column">
                             <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                       }
                        <div className={`${columnLength} column wide `}>
                             <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
                        </div>
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default App