import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyC_1SpujxRNqBEbt8qmIM62gHnW3f4OR9E';

class App extends Component {
    constructor(props){
        super (props);

        this.state = {videos:[]};

        YTSearch({key: API_KEY, term: 'Publicis one cup'}, videos => {
            //console.log(data);
            this.setState({videos});
        });
    }
    
    render() {
        return (
        <div>
            <SearchBar/>
            <VideoList videos={this.state.videos} />
        </div>
        ); // This is JSX -> html in javascript
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));
