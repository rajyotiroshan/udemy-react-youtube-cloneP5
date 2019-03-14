import React from 'react';
import SearchBar from './SearchBar'
import youtube from '../api/youtube'

class App extends React.Component {
    
    onTermSubmit = (srchTerm)=>{
        youtube.get('/search',{
            params: {
                q: srchTerm
            }
        })
    }

    render(){
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
            </div>
            
        );
    }
}

export default App