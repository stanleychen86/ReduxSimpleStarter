import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyAgqlNR3Ff1YR0AMCK_dBZ3-pE4BOmG0YA';



//should produce some HTML
class App extends Component {
    constructor(props){
        super(props);

        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'surfborads'}, (videos) =>{
            //this.setState({videos:videos});
            this.setState({videos});
            
        });
    }


    render() {
    return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
    </div>
    );
    }
}


//take this component's generated html and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));